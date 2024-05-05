# Импорт стандартных библиотек
import binascii
import logging
import os
from datetime import datetime, timedelta
from typing import List

# Импорт библиотек для работы с FastAPI
from fastapi import APIRouter, Depends, HTTPException, Response, status, WebSocket, Request
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

# Импорт библиотек для работы с переменными окружения
from dotenv import load_dotenv

# Импорт библиотек для валидации данных
from pydantic import BaseModel, Field, EmailStr, constr
from enum import Enum

# Настройка логирования
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Импорт библиотек для работы с базой данных
from sqlalchemy.orm import Session
from sqlalchemy.exc import SQLAlchemyError
#Импорт лок
from ..db import User, get_db, init_db
# Импорт реализации хранилища токенов Redis
from .redis_token_storage import RedisTokenStorage


# Загрузка переменных окружения
load_dotenv()

# class RoleEnum(str, Enum):
#     admin = 'admin'  # Роль администратора, обладающая расширенными правами доступа.
#     user = 'user'  # Обычная пользовательская роль с базовым уровнем доступа.

# Модели Pydantic для запросов и ответов
class LoginRequest(BaseModel):
    username: str = Field(..., description="Имя пользователя для входа в систему. Должно быть уникальным и не повторяться с другими пользователями.")
    password: str = Field(..., description="Пароль пользователя. Должен быть надежным и содержать минимум 6 символов для обеспечения безопасности.")

class LoginResponse(BaseModel):
    access_token: str = Field(..., description="Токен доступа, который используется для аутентификации пользователя в системе.")
    expires_in: int = Field(..., description="Время жизни токена доступа в секундах, после которого токен становится недействительным.")
    expires_at: str = Field(..., description="Точная дата и время истечения токена доступа в формате ISO 8601.")
    refresh_token: str = Field(..., description="Токен для обновления доступа, который можно использовать для получения нового токена доступа после истечения текущего.")
    refresh_expires_in: int = Field(..., description="Время жизни токена для обновления в секундах, после которого токен становится недействительным.")
    refresh_token_expires_at: str = Field(..., description="Точная дата и время истечения токена обновления в формате ISO 8601.")
    is_admin: bool = Field(..., description="Флаг, указывающий, является ли пользователь администратором. True, если пользователь имеет права администратора.")

class RefreshRequest(BaseModel):
    refresh_token: str = Field(..., description="Токен обновления, который нужно использовать для получения нового токена доступа.")

class RefreshResponse(BaseModel):
    access_token: str = Field(..., description="Новый токен доступа, выданный пользователю.")
    expires_in: int = Field(..., description="Время жизни нового токена доступа в секундах.")
    expires_at: str = Field(..., description="Время истечения нового токена доступа в формате ISO 8601.")
    refresh_token: str = Field(..., description="Новый токен обновления, выданный пользователю.")
    refresh_expires_in: int = Field(..., description="Время жизни нового токена обновления в секундах.")
    refresh_expires_at: str = Field(..., description="Время истечения нового токена обновления в формате ISO 8601.")

class UserCreateRequest(BaseModel):
    username: constr(min_length=3, max_length=50) = Field(..., description="Имя пользователя. Должно быть уникальным и содержать от 3 до 50 символов.")
    email: EmailStr = Field(..., description="Электронная почта пользователя. Должна быть действительной и уникальной.")
    password: constr(min_length=6, max_length=50) = Field(..., description="Пароль пользователя. Должен быть надежным и содержать от 6 до 50 символов.")
    is_admin: bool = Field(..., description="Является ли пользователь администратором. True, если пользователь имеет права администратора.")

class UserResponse(BaseModel):
    id: int = Field(..., description="Уникальный идентификатор пользователя в системе.")
    username: str = Field(..., description="Имя пользователя.")
    email: str = Field(..., description="Электронная почта пользователя.")
    is_admin: bool = Field(..., description="Признак того, является ли пользователь администратором.")

class PasswordChangeRequest(BaseModel):
    new_password: str = Field(..., description="Новый пароль пользователя. Должен быть надежным и содержать минимум 6 символов.")

class form_data(BaseModel):
    username: str
    password: str

#API ключ
#api_key_header = APIKeyHeader(name="token", auto_error=False)
#Схема аутентификации
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/login")
#Максимальное количество одновременных сессий
MAX_ACTIVE_TOKENS_PER_USER = 5

# Создаем экземпляр хранилища токенов Redis
token_storage = RedisTokenStorage()

# Создаем экземпляр APIRouter
auth_router = APIRouter(
    dependencies=[Depends(oauth2_scheme)]
)
# Проверка токена
async def token_required(websocket: WebSocket, db: Session = Depends(get_db)):
    token = websocket.query_params.get('token')
    logger.info(f"Token received for validation: {token}")
    if token:
        user_id = token_storage.retrieve_token(token)
        if user_id:
            logger.info(f"Token is valid for user_id: {user_id}")
            return True  # Token is valid
        else:
            logger.error(f"Token not found or expired")
            await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
            raise HTTPException(status_code=401, detail="Invalid or expired token")
    else:
        logger.warning("Token is required for access")
        await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
        raise HTTPException(status_code=403, detail='Token is required')

async def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    logger.info(f"Retrieving user details for token: {token}")
    user_id = token_storage.retrieve_token(token)
    if not user_id:
        logger.error("Token not found or expired")
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    try:
        user = db.query(User).filter_by(id=user_id).first()
    except SQLAlchemyError as e:
        logger.error(f"DB error, failed to find user: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

    if not user.is_admin:
        logger.error("User is not admin")
        raise HTTPException(status_code=403, detail="Admin privileges required")

    logger.info(f"User {user.username} authenticated as admin")
    return user

async def get_current_user_admin(request: Request, db: Session = Depends(get_db)):
    token = request.headers.get('token')
    if not token:
        raise HTTPException(status_code=403, detail="Token is required")

    user_id = token_storage.retrieve_user_id_by_token(token)
    if not user_id:
        raise HTTPException(status_code=401, detail="Invalid or expired token")

    user = db.query(User).filter_by(id=user_id).first()
    if not user or not user.is_admin:
        raise HTTPException(status_code=403, detail="Admin privileges required")

    return user

# Функция для создания токенов доступа и обновления
async def create_tokens(user_id):
    # Генерируем токен доступа и токен обновления
    access_token = binascii.hexlify(os.urandom(24)).decode()
    access_token_expires_in = 3600  # 1 час в секундах
    access_token_expires_at = datetime.utcnow() + timedelta(seconds=access_token_expires_in)
    refresh_token = binascii.hexlify(os.urandom(24)).decode()
    refresh_token_expires_in = 2592000  # 30 дней в секундах
    refresh_token_expires_at = datetime.utcnow() + timedelta(seconds=refresh_token_expires_in)

    # Сохраняем токены в Redis
    token_storage.store_token(access_token, user_id, access_token_expires_in)
    token_storage.store_refresh_token(refresh_token, user_id, refresh_token_expires_in)

    return {
        'token': access_token,
        'expires_in': access_token_expires_in,
        'expires_at': access_token_expires_at.isoformat()
    }, {
        'token': refresh_token,
        'expires_in': refresh_token_expires_in,
        'expires_at': refresh_token_expires_at.isoformat()
    }

# Маршруты API
@auth_router.post('/login', response_model=LoginResponse, summary="Авторизация пользователя", description="Позволяет пользователю войти в систему, используя имя пользователя и пароль.")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    logger.debug(f"Username: {form_data.username}, Password: {form_data.password}")
    try:
        user = db.query(User).filter_by(username=form_data.username).first()
        if user:
            logger.debug(f"Checking password for user {user.username}")
            if user.check_password(form_data.password):
                logger.debug("Password is correct.")
                # Получаем список всех токенов пользователя
                tokens = token_storage.retrieve_token(user.id)
                if tokens is None:
                    tokens = []  # Обеспечиваем, что tokens будет списком для последующей обработки
                if len(tokens) > MAX_ACTIVE_TOKENS_PER_USER:
                    tokens_to_delete = sorted(tokens, key=lambda x: x['expires_at'])[:len(tokens) - MAX_ACTIVE_TOKENS_PER_USER]
                    for token in tokens_to_delete:
                        token_storage.delete_token(token['token'])

                # Создаем новые токены
                new_access_token, new_refresh_token = create_tokens(user.id)
                return JSONResponse(content={
                    'access_token': new_access_token['token'],
                    'expires_in': new_access_token['expires_in'],  # Время жизни токена доступа в секундах
                    'expires_at': new_access_token['expires_at'],
                    'refresh_token': new_refresh_token['token'],
                    'refresh_expires_in': new_refresh_token['expires_in'],  # Время жизни токена обновления в секундах
                    'refresh_token_expires_at': new_refresh_token['expires_at'],
                    'is_admin': user.is_admin
                }, status_code=200)
            else:
                logger.debug("Password is incorrect.")
                return JSONResponse(content={'detail': 'Invalid username or password'}, status_code=401)
        else:
            logger.debug("User not found.")
            return JSONResponse(content={'detail': 'Invalid username or password'}, status_code=401)
    except SQLAlchemyError as e:
        logger.error(f"DB error, failed to find user: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@auth_router.post('/refresh', response_model=RefreshResponse, summary="Обновление токена доступа", description="Позволяет обновить токен доступа пользователя, используя действующий токен обновления.")
async def refresh_token(request: RefreshRequest, db: Session = Depends(get_db)):
    try:
        refresh_token = request.refresh_token
        print(refresh_token)
        logger.info(f"Attempting to refresh token for token: {refresh_token}")
        # Получаем user_id по токену обновления
        user_id = token_storage.retrieve_user_id_by_refresh_token(refresh_token)
        if not user_id:
            logger.info(f"Invalid or expired refresh token: {refresh_token}")
            raise HTTPException(status_code=401, detail=f'Invalid or expired refresh token {refresh_token}')

        # Удаляем старый refresh_token перед созданием нового
        token_storage.delete_refresh_token(refresh_token)

        logger.info(f"Refresh token is valid for user_id: {user_id}")
        user = db.query(User).filter_by(id=int(user_id)).first()
        if not user:
            logger.warning(f"DB error, failed to find user for user_id: {user_id}")
            raise HTTPException(status_code=404, detail='User not found')
        # Создаем новый токен доступа и refresh_token
        new_access_token, new_refresh_token = create_tokens(user.id)
        return JSONResponse(content={
            'access_token': new_access_token['token'],
            'expires_in': new_access_token['expires_in'],
            'expires_at': new_access_token['expires_at'],
            'refresh_token': new_refresh_token['token'],
            'refresh_expires_in': new_refresh_token['expires_in'],
            'refresh_expires_at': new_refresh_token['expires_at']
        }, status_code=200)
    except UnicodeDecodeError:
        logger.error(f"Redis error, failed to decode user_id for refresh token: {refresh_token}")
        raise HTTPException(status_code=500, detail='Internal server error')
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        raise HTTPException(status_code=500, detail='Internal server error')



@auth_router.post("/users/create", response_model=UserResponse, summary="Добавление нового пользователя", description="Создает нового пользователя с указанными данными.", dependencies=[Depends(oauth2_scheme)])
async def create_user(user_request: UserCreateRequest, db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    if not admin.is_admin:
        raise HTTPException(status_code=403, detail="Admin privileges required")
    try:
        new_user = User(username=user_request.username, email=user_request.email, is_admin=user_request.is_admin)
        new_user.set_password(user_request.password)
        db.add(new_user)
        db.commit()
    except SQLAlchemyError as e:
        db.rollback()
        logger.error(f"Failed to create user: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")
    return new_user

@auth_router.delete("/users/{user_id}/delete", status_code=204, summary="Удаление пользователя", description="Удаляет пользователя по идентификатору.")
async def delete_user(user_id: int, db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    if not admin.is_admin:
        raise HTTPException(status_code=403, detail="Admin privileges required")
    user = db.query(User).filter_by(id=user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Начало транзакции
    try:
        tokens = token_storage.retrieve_token(user_id)
        if tokens:
            for token in tokens:
                token_storage.delete_token(token['token'])

        db.delete(user)
        db.commit()
    except SQLAlchemyError as e:
        db.rollback()
        logger.error(f"Failed to delete user {user_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")
    return Response(status_code=status.HTTP_204_NO_CONTENT)

@auth_router.put("/users/{user_id}/password", status_code=200, summary="Смена пароля пользователя", description="Позволяет изменить пароль пользователя.")
async def change_user_password(user_id: int, password_request: PasswordChangeRequest, db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    if not admin.is_admin:
        raise HTTPException(status_code=403, detail="Admin privileges required")
    try:
        user = db.query(User).filter_by(id=user_id).first()
        if user:
            user.set_password(password_request.new_password)
            db.commit()
            return Response(status_code=status.HTTP_200_OK, content="Password updated successfully")
        else:
            raise HTTPException(status_code=404, detail="User not found")
    except SQLAlchemyError as e:
        db.rollback()
        logger.error(f"Failed to change user password: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@auth_router.put("/users/modify", response_model=UserResponse, status_code=200, summary="Изменение пользователя", description="Изменяет пользователя по идентификатору.")
async def modify_user(user_id: int, user_request: UserCreateRequest, db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    logger.info("Полученные данные:", user_request.model_dump())  # Добавьте эту строку для отладки
    if not admin.is_admin:
        raise HTTPException(status_code=403, detail="Admin privileges required")
    try:
        user = db.query(User).filter_by(id=user_id).first()
        if user:
            user.username = user_request.username
            user.email = user_request.email
            user.set_password(user_request.password)
            user.is_admin = user_request.is_admin
            db.commit()
            return Response(status_code=status.HTTP_200_OK, content="User updated successfully")
        else:
            raise HTTPException(status_code=404, detail="User not found")
    except SQLAlchemyError as e:
            db.rollback()
            logger.error(f"Failed to modify user: {str(e)}")
            raise HTTPException(status_code=500, detail="Internal server error")


@auth_router.get("/users", response_model=List[UserResponse], summary="Получение списка пользователей", description="Возвращает список всех пользователей.")
async def get_users(db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    if not admin.is_admin:
        raise HTTPException(status_code=403, detail="Admin privileges required")
    users = db.query(User).all()
    return users

def init_app(app):
    init_db()  # Инициализация базы данных
    app.include_router(auth_router)
    return app
