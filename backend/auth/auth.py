# Импорт стандартных библиотек
import binascii
import logging
import os
from datetime import datetime, timedelta
from typing import List

# Импорт библиотек для работы с FastAPI
from fastapi import APIRouter, Depends, HTTPException, Response, status, WebSocket
from fastapi.responses import JSONResponse
from fastapi.security import APIKeyHeader, OAuth2PasswordBearer

# Импорт библиотек для работы с переменными окружения
from dotenv import load_dotenv

# Импорт библиотек для валидации данных
from pydantic import BaseModel, Field

# Настройка логирования
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Импорт библиотек для работы с базой данных
from sqlalchemy.orm import Session

#Импорт лок
from ..db import User, Token, RefreshToken, get_db, init_db

# Загрузка переменных окружения
load_dotenv()



# Модели Pydantic для запросов и ответов
class LoginRequest(BaseModel):
    username: str = Field(..., description="Имя пользователя для входа в систему")
    password: str = Field(..., description="Пароль пользователя")

class LoginResponse(BaseModel):
    access_token: str = Field(..., description="Токен доступа, используемый для аутентификации")
    expires_at: str = Field(..., description="Время истечения токена доступа")
    refresh_token: str = Field(..., description="Токен для обновления доступа")
    refresh_token_expires_at: str = Field(..., description="Время истечения токена обновления")
    is_admin: bool = Field(..., description="Признак администратора")

class RefreshRequest(BaseModel):
    refresh_token: str = Field(..., description="Токен обновления, который нужно использовать для получения нового токена доступа.")

class RefreshResponse(BaseModel):
    access_token: str = Field(..., description="Новый токен доступа, выданный пользователю.")
    expires_at: str = Field(..., description="Время истечения нового токена доступа.")

class UserCreateRequest(BaseModel):
    username: str
    email: str
    password: str
    is_admin: bool

class UserResponse(BaseModel):
    id: int
    username: str
    email: str
    is_admin: bool

class PasswordChangeRequest(BaseModel):
    new_password: str

# Создаем экземпляр APIRouter
auth_router = APIRouter()
api_key_header = APIKeyHeader(name="token", auto_error=False)

MAX_ACTIVE_TOKENS_PER_USER = 5  # Максимальное количество одновременных сессий

# Маршруты API
@auth_router.post('/login', response_model=LoginResponse, summary="Авторизация пользователя", description="Позволяет пользователю войти в систему, используя имя пользователя и пароль.")
async def login(login_request: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter_by(username=login_request.username).first()
    if user and user.check_password(login_request.password):
        # Удаляем старые токены доступа и обновления
        db.query(Token).filter(Token.user_id == user.id, Token.expires_at <= datetime.utcnow()).delete()
        db.query(RefreshToken).filter(RefreshToken.user_id == user.id, RefreshToken.expires_at <= datetime.utcnow()).delete()

        # Проверяем количество активных токенов
        active_tokens = db.query(Token).filter(Token.user_id == user.id, Token.expires_at > datetime.utcnow()).all()
        if len(active_tokens) >= MAX_ACTIVE_TOKENS_PER_USER:
            # Удаляем самый старый токен
            oldest_token = min(active_tokens, key=lambda x: x.expires_at)
            db.delete(oldest_token)

        # Создаем новые токены
        access_token = binascii.hexlify(os.urandom(24)).decode()
        access_token_expires_at = datetime.utcnow() + timedelta(hours=1)  # Токен доступа на 1 час
        refresh_token = binascii.hexlify(os.urandom(24)).decode()
        refresh_token_expires_at = datetime.utcnow() + timedelta(days=30)  # Токен обновления на 30 дней

        new_access_token = Token(token=access_token, user_id=user.id, expires_at=access_token_expires_at)
        new_refresh_token = RefreshToken(refresh_token=refresh_token, user_id=user.id, expires_at=refresh_token_expires_at)

        db.add(new_access_token)
        db.add(new_refresh_token)
        db.commit()

        # Возвращаем оба токена пользователю
        return JSONResponse(content={
            'access_token': access_token,
            'expires_at': access_token_expires_at.isoformat(),
            'refresh_token': refresh_token,
            'refresh_token_expires_at': refresh_token_expires_at.isoformat(),
            'is_admin': user.is_admin
        }, status_code=200)
    else:
        return JSONResponse(content={'detail': 'Invalid username or password'}, status_code=401)

@auth_router.post('/refresh', response_model=RefreshResponse, summary="Обновление токена доступа", description="Позволяет обновить токен доступа пользователя, используя действующий токен обновления.")
async def refresh_token(request: RefreshRequest, db: Session = Depends(get_db)):
    refresh_token = db.query(RefreshToken).filter_by(refresh_token=request.refresh_token).first()
    if refresh_token and refresh_token.expires_at > datetime.utcnow():
        # Токен обновления действителен, создаем новый токен доступа
        new_access_token = binascii.hexlify(os.urandom(24)).decode()
        access_token_expires_at = datetime.utcnow() + timedelta(hours=1)  # Новый токен доступа на 1 час
        # Обновляем или создаем новый токен доступа для пользователя
        access_token = db.query(Token).filter_by(user_id=refresh_token.user_id).first()
        if access_token:
            access_token.token = new_access_token
            access_token.expires_at = access_token_expires_at
        else:
            new_token = Token(token=new_access_token, user_id=refresh_token.user_id, expires_at=access_token_expires_at)
            db.add(new_token)

        db.commit()
        return JSONResponse(content={'access_token': new_access_token, 'expires_at': access_token_expires_at.isoformat()}, status_code=200)
    else:
        raise HTTPException(status_code=401, detail='Invalid or expired refresh token')

async def token_required(websocket: WebSocket, db: Session = Depends(get_db)):
    token = websocket.query_params.get('token')
    logger.debug(f"Received headers: {websocket.headers}")  # Вывод всех заголовков
    if token and token.startswith('Bearer '):
        parts = token.split(' ')
        if len(parts) == 2:
            token = parts[1]  # Используем токен после 'Bearer'
        else:
            logger.warning("Token format is incorrect")
            await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
            raise HTTPException(status_code=403, detail='Token format is incorrect')

    if not token:
        logger.warning("Authorization header is missing or does not start with 'Bearer '")
        await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
        raise HTTPException(status_code=403, detail='Token is required')

    access_token = db.query(Token).filter_by(token=token).first()
    if not access_token:
        error_message = 'Token not found!!!!!!!'
        logger.error(f"Error: {error_message}")
        await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
        raise HTTPException(status_code=401, detail=error_message)

    if access_token.expires_at <= datetime.utcnow():
        error_message = 'Token is expired'
        logger.error(f"Error: {error_message}")
        await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
        raise HTTPException(status_code=401, detail=error_message)

    logger.info(f"Token {token} is valid and expires at {access_token.expires_at}")
    return access_token

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

async def get_current_user_admin(db: Session = Depends(get_db), token: str = Depends(oauth2_scheme)):
    user_token = db.query(Token).filter_by(token=token).first()
    #logger.info(f"User token: {user_token}")
    if not user_token:
        logger.error("Token not found&&&&&")
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    if user_token.expires_at <= datetime.utcnow():
        logger.error("Token is expired")
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    user = db.query(User).filter_by(id=user_token.user_id).first()
    if not user or not user.is_admin:
        logger.error("User is not admin or not found")
        raise HTTPException(status_code=403, detail="Admin privileges required")
    return user

@auth_router.post("/users/create", response_model=UserResponse, summary="Добавление нового пользователя", description="Создает нового пользователя с указанными данными.")
async def create_user(user_request: UserCreateRequest, db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    new_user = User(username=user_request.username, email=user_request.email, is_admin=user_request.is_admin)
    new_user.set_password(user_request.password)
    db.add(new_user)
    db.commit()
    return new_user

@auth_router.delete("/users/{user_id}/delete", status_code=204, summary="Удаление пользователя", description="Удаляет пользователя по идентификатору.")
async def delete_user(user_id: int, db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    user = db.query(User).filter_by(id=user_id).first()
    if user:
        # Удаление связанных токенов обновления
        db.query(RefreshToken).filter_by(user_id=user_id).delete()
        db.query(Token).filter_by(user_id=user_id).delete()
        db.delete(user)
        db.commit()
        return Response(status_code=status.HTTP_204_NO_CONTENT)
    else:
        raise HTTPException(status_code=404, detail="User not found")

@auth_router.put("/users/{user_id}/password", status_code=200, summary="Смена пароля пользователя", description="Позволяет изменить пароль пользователя.")
async def change_user_password(user_id: int, password_request: PasswordChangeRequest, db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    user = db.query(User).filter_by(id=user_id).first()
    if user:
        user.set_password(password_request.new_password)
        db.commit()
        return Response(status_code=status.HTTP_200_OK, content="Password updated successfully")
    else:
        raise HTTPException(status_code=404, detail="User not found")

@auth_router.put("/users/modify", response_model=UserResponse, status_code=200, summary="Изменение пользователя", description="Изменяет пользователя по идентификатору.")
async def modify_user(user_id: int, user_request: UserCreateRequest, db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    logger.info("Полученные данные:", user_request.model_dump())  # Добавьте эту строку для отладки
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

@auth_router.get("/users", response_model=List[UserResponse], summary="Получение списка пользователей", description="Возвращает список всех пользователей.")
async def get_users(db: Session = Depends(get_db), _: User = Depends(get_current_user_admin)):
    users = db.query(User).all()
    return users

def init_app(app):
    init_db()  # Инициализация базы данных
    app.include_router(auth_router)
    return app