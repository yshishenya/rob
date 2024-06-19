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
    user_id: int = Field(..., description="Идентификатор пользователя, для которого нужно изменить пароль.")
    new_password: str = Field(..., description="Новый пароль пользователя. Должен быть надежным и содержать минимум 6 символов.")

class PasswordChangeResponse(BaseModel):
    user_id: int = Field(..., description="Идентификатор пользователя, для которого был изменен пароль.")
    message: str = Field(..., description="Сообщение об успешной смене пароля.")

class DeleteUserRequest(BaseModel):
    user_id: int = Field(..., description="Идентификатор пользователя, которого нужно удалить.")

class DeleteUserResponse(BaseModel):
    message: str = Field(..., description="Сообщение об успешном удалении пользователя.")





#API ключ
#api_key_header = APIKeyHeader(name="token", auto_error=False)
#Схема аутентификации
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/login")
#Максимальное количество одновременных сессий
MAX_ACTIVE_TOKENS_PER_USER = 5

# Создаем экземпляр хранилища токенов Redis
token_storage = RedisTokenStorage()

# Создаем экземпляр APIRouter
auth_router = APIRouter()

# Проверка токена
async def token_required(websocket: WebSocket, db: Session = Depends(get_db)):
    token = websocket.query_params.get('token')
    logger.info(f"Token received for validation: {token}")
    if token:
        user_id = token_storage.retrieve_token(token)
        if user_id:
            logger.info(f"Token is valid for user_id: {user_id}")
            user = db.query(User).filter(User.id == user_id).first()
            return user.username # Token is valid and username is returned
        else:
            logger.error(f"Token not found or expired")
            await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
            raise HTTPException(status_code=401, detail="Invalid or expired token")
    else:
        logger.warning("Token is required for access")
        await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
        raise HTTPException(status_code=403, detail='Token is required')

async def get_current_user_admin(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
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

# async def get_current_user_admin(request: Request, db: Session = Depends(get_db)):
#     token = request.headers.get('token')
#     if not token:
#         raise HTTPException(status_code=403, detail="Token is required")

#     user_id = token_storage.retrieve_user_id_by_token(token)
#     if not user_id:
#         raise HTTPException(status_code=401, detail="Invalid or expired token")

#     user = db.query(User).filter_by(id=user_id).first()
#     if not user or not user.is_admin:
#         raise HTTPException(status_code=403, detail="Admin privileges required")

#     return user

# Функция для создания токенов доступа и обновления
async def create_tokens(user_id):
    # Удаляем все предыдущие токены пользователя
    tokens = token_storage.retrieve_token(user_id)
    if tokens:
        for token in tokens:
            token_storage.delete_token(token['token'])

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

@auth_router.post('/login', response_model=LoginResponse, summary="Авторизация пользователя", description="Позволяет пользователю войти в систему, используя имя пользователя и пароль.")
async def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    username_lower = form_data.username.lower()  # Преобразование имени пользователя в нижний регистр
    logger.debug(f"Username: {username_lower}, Password: {form_data.password}")
    try:
        user = db.query(User).filter_by(username=username_lower).first()
        if user:
            logger.debug(f"Checking password for user {user.username}")
            if user.check_password(form_data.password):
                logger.debug("Password is correct.")
                # Создаем новые токены, удаляя старые
                new_access_token, new_refresh_token = await create_tokens(user.id)
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

@auth_router.post('/logout', summary="Выход пользователя из системы", description="Позволяет пользователю выйти из системы, удаляя его токены.")
async def logout(request: RefreshRequest):
    refresh_token = request.refresh_token
    logger.info(f"Logging out user with refresh token: {refresh_token}")

    user_id = token_storage.retrieve_user_id_by_refresh_token(refresh_token)
    if not user_id:
        logger.error("Refresh token not found or expired")
        raise HTTPException(status_code=401, detail="Invalid or expired refresh token")

    try:
        # Удаляем все токены пользователя
        token_storage.delete_tokens_by_user_id(user_id)
        token_storage.delete_all_refresh_tokens_by_user_id(user_id)
        logger.info(f"User {user_id} logged out successfully")
        return JSONResponse(content={'detail': 'Logged out successfully'}, status_code=200)
    except Exception as e:
        logger.error(f"Failed to log out user: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@auth_router.post('/refresh', response_model=RefreshResponse, summary="Обновление токена доступа", description="Позволяет обновить токен доступа пользователя, используя действующий токен обновления.")
async def refresh_token(request: RefreshRequest, db: Session = Depends(get_db)):
    refresh_token = request.refresh_token
    logger.info(f"Attempting to refresh token for token: {refresh_token}")

    try:
        # Получаем user_id по токену обновления
        user_id = token_storage.retrieve_user_id_by_refresh_token(refresh_token)

    except UnicodeDecodeError:
        logger.error(f"Redis error, failed to decode user_id for refresh token: {refresh_token}")
        raise HTTPException(status_code=500, detail='Internal server error 10')

    except Exception as e:
        logger.error(f"Unexpected error during token retrieval: {str(e)}")
        raise HTTPException(status_code=500, detail='Internal server error 20')

    if not user_id:
        logger.info(f"Invalid or expired refresh token: {refresh_token}")
        raise HTTPException(status_code=401, detail=f'Invalid or expired refresh token')

    try:
        # Удаляем старый refresh_token перед созданием нового
        token_storage.delete_refresh_token(refresh_token)
    except Exception as e:
        logger.error(f"Error during refresh token deletion: {str(e)}")
        raise HTTPException(status_code=500, detail='Internal server error 30')

    try:
        logger.info(f"Refresh token is valid for user_id: {user_id}")
        user = db.query(User).filter_by(id=int(user_id)).first()

        if not user:
            logger.warning(f"DB error, failed to find user for user_id: {user_id}")
            raise HTTPException(status_code=404, detail='User not found')

        # Создаем новый токен доступа и refresh_token
        new_access_token, new_refresh_token = await create_tokens(user.id)

        return JSONResponse(content={
            'access_token': new_access_token['token'],
            'expires_in': new_access_token['expires_in'],
            'expires_at': new_access_token['expires_at'],
            'refresh_token': new_refresh_token['token'],
            'refresh_expires_in': new_refresh_token['expires_in'],
            'refresh_expires_at': new_refresh_token['expires_at']
        }, status_code=200)

    except Exception as e:
        logger.error(f"Unexpected error while creating new tokens: {str(e)}")
        raise HTTPException(status_code=500, detail='Internal server error 40')



@auth_router.post("/users/create", response_model=UserResponse, summary="Добавление нового пользователя", description="Создает нового пользователя с указанными данными.", dependencies=[Depends(oauth2_scheme)])
async def create_user(user_request: UserCreateRequest, db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    if not admin.is_admin:
        raise HTTPException(status_code=403, detail="Admin privileges required")
    try:
        username_lower = user_request.username.lower()  # Преобразование имени пользователя в нижний регистр
        new_user = User(username=username_lower, email=user_request.email, is_admin=user_request.is_admin)
        new_user.set_password(user_request.password)
        db.add(new_user)
        db.commit()
    except SQLAlchemyError as e:
        db.rollback()
        logger.error(f"Failed to create user: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")
    return new_user

@auth_router.delete("/users/delete", status_code=204, summary="Удаление пользователя", description="Удаляет пользователя по идентификатору.", dependencies=[Depends(oauth2_scheme)])
async def delete_user(user_request: DeleteUserRequest, db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    if not admin.is_admin:
        raise HTTPException(status_code=403, detail="Admin privileges required")
    user = db.query(User).filter_by(id=user_request.user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Начало транзакции
    try:
        tokens = token_storage.retrieve_token(user_request.user_id)
        if tokens:
            for token in tokens:
                token_storage.delete_token(token['token'])

        db.delete(user)
        db.commit()
    except SQLAlchemyError as e:
        db.rollback()
        logger.error(f"Failed to delete user {user_request.user_id}: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")
    return Response(status_code=204)

@auth_router.put("/users/password", response_model=PasswordChangeResponse, status_code=200, summary="Смена пароля пользователя", description="Позволяет изменить пароль пользователя.", dependencies=[Depends(oauth2_scheme)])
async def change_user_password(password_request: PasswordChangeRequest, db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    if not admin.is_admin:
        raise HTTPException(status_code=403, detail="Admin privileges required")
    try:
        user = db.query(User).filter_by(id=password_request.user_id).first()
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

@auth_router.put("/users/modify", response_model=UserResponse, status_code=200, summary="Изменение пользователя", description="Изменяет пользователя по идентификатору.", dependencies=[Depends(oauth2_scheme)])
async def modify_user(user_request: UserCreateRequest, db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    logger.info("Полученные данные:", user_request.model_dump())  # Добавьте эту строку для отладки
    if not admin.is_admin:
        raise HTTPException(status_code=403, detail="Admin privileges required")
    try:
        user = db.query(User).filter_by(id=user_request.user_id).first()
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


@auth_router.get("/users", response_model=List[UserResponse], summary="Получение списка пользователей", description="Возвращает список всех пользователей.", dependencies=[Depends(oauth2_scheme)])
async def get_users(db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    if not admin.is_admin:
        raise HTTPException(status_code=403, detail="Admin privileges required")
    users = db.query(User).all()
    return users

def init_app(app):
    init_db()  # Инициализация базы данных
    app.include_router(auth_router)
    return app
