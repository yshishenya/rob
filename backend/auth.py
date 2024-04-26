# Импорт стандартных библиотек
from datetime import datetime, timedelta
import binascii
import os
import logging

# Импорт библиотек для работы с FastAPI
from fastapi import APIRouter, Depends, HTTPException, status, WebSocket, Response
from fastapi.responses import JSONResponse
from fastapi.security import APIKeyHeader

# Импорт библиотек для работы с SQLAlchemy
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship, backref

# Импорт библиотек для работы с паролями
from werkzeug.security import generate_password_hash, check_password_hash

# Импорт библиотек для работы с переменными окружения
from dotenv import load_dotenv

# Импорт библиотек для валидации данных
from pydantic import BaseModel, Field

# Настройка логирования
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Модели Pydantic для запросов и ответов
class LoginRequest(BaseModel):
    username: str = Field(..., description="Имя пользователя для входа в систему")
    password: str = Field(..., description="Пароль пользователя")

class LoginResponse(BaseModel):
    access_token: str = Field(..., description="Токен доступа, используемый для аутентификации")
    expires_at: str = Field(..., description="Время истечения токена доступа")
    refresh_token: str = Field(..., description="Токен для обновления доступа")
    refresh_token_expires_at: str = Field(..., description="Время истечения токена обновления")

class RefreshRequest(BaseModel):
    refresh_token: str = Field(..., description="Токен обновления, который нужно использовать для получения нового токена доступа.")

class RefreshResponse(BaseModel):
    access_token: str = Field(..., description="Новый токен доступа, выданный пользователю.")
    expires_at: str = Field(..., description="Время истечения нового токена доступа.")

class UserCreateRequest(BaseModel):
    username: str
    email: str
    password: str

class UserResponse(BaseModel):
    id: int
    username: str
    email: str

class PasswordChangeRequest(BaseModel):
    new_password: str

# Создаем экземпляр APIRouter
auth_router = APIRouter()
api_key_header = APIKeyHeader(name="token", auto_error=False)

# Загрузка переменных окружения
load_dotenv()

# Получение переменных окружения для подключения к базе данных с заданием значений по умолчанию
POSTGRES_USER = os.getenv("POSTGRES_USER", "default_user")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD", "default_password")
POSTGRES_DB = os.getenv("POSTGRES_DB", "default_db")
POSTGRES_HOST = os.getenv("POSTGRES_HOST", "localhost")
POSTGRES_PORT = os.getenv("POSTGRES_PORT", "5432")

# Проверка, что все переменные окружения установлены
if not all([POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_HOST, POSTGRES_PORT]):
    logger.error("Одна или несколько переменных окружения для подключения к базе данных не установлены.")
    raise ValueError("Необходимые переменные окружения для подключения к базе данных отсутствуют.")

# Строка подключения к базе данных
DATABASE_URL = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DB}"

# Настройка подключения к базе данных
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Функция для получения сессии базы данных
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Определение моделей данных для ORM
class User(Base):
    """Модель пользователя."""
    __tablename__ = "user"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password_hash = Column(String, nullable=False)
    email = Column(String, unique=True, index=True)
    is_admin = Column(Boolean, default=False, nullable=False)

    def set_password(self, password):
        """Создает хэш пароля и сохраняет его в объекте пользователя."""
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        """Проверяет, совпадает ли хэшированный пароль с паролем пользователя."""
        return check_password_hash(self.password_hash, password)

class Token(Base):
    __tablename__ = "token"
    id = Column(Integer, primary_key=True, index=True)
    token = Column(String, unique=True, index=True)
    user_id = Column(Integer, ForeignKey('user.id'), index=True)
    user = relationship('User', backref=backref('tokens', lazy=True))
    expires_at = Column(DateTime, nullable=False)

class RefreshToken(Base):
    __tablename__ = "refresh_token"
    id = Column(Integer, primary_key=True, index=True)
    refresh_token = Column(String, unique=True, index=True)
    user_id = Column(Integer, ForeignKey('user.id'), index=True)
    user = relationship('User', backref=backref('refresh_tokens', lazy=True))
    expires_at = Column(DateTime, nullable=False)

# Маршруты API
@auth_router.post('/login', response_model=LoginResponse, summary="Авторизация пользователя", description="Позволяет пользователю войти в систему, используя имя пользователя и пароль.")
async def login(login_request: LoginRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter_by(username=login_request.username).first()
    if user and user.check_password(login_request.password):
        # Удаляем старые токены доступа
        db.query(Token).filter(Token.user_id == user.id, Token.expires_at <= datetime.utcnow()).delete()
        # Удаляем старые токены обновления
        db.query(RefreshToken).filter(RefreshToken.user_id == user.id, RefreshToken.expires_at <= datetime.utcnow()).delete()

        # Проверяем и обновляем (при необходимости) токен доступа
        access_token = db.query(Token).filter_by(user_id=user.id).first()
        if not access_token or access_token.expires_at <= datetime.utcnow():
            new_access_token = binascii.hexlify(os.urandom(24)).decode()
            access_token_expires_at = datetime.utcnow() + timedelta(days=1)  # Токен доступа на 1 день
            access_token = Token(token=new_access_token, user_id=user.id, expires_at=access_token_expires_at)
            db.add(access_token)

        # Проверяем и обновляем (при необходимости) токен обновления
        refresh_token = db.query(RefreshToken).filter_by(user_id=user.id).first()
        if not refresh_token or refresh_token.expires_at <= datetime.utcnow():
            new_refresh_token = binascii.hexlify(os.urandom(24)).decode()
            refresh_token_expires_at = datetime.utcnow() + timedelta(days=30)  # Токен обновления на 30 дней
            refresh_token = RefreshToken(refresh_token=new_refresh_token, user_id=user.id, expires_at=refresh_token_expires_at)
            db.add(refresh_token)

        db.commit()

        # Возвращаем оба токена пользователю
        return JSONResponse(content={
            'access_token': access_token.token,
            'expires_at': access_token.expires_at.isoformat(),
            'refresh_token': refresh_token.refresh_token,
            'refresh_token_expires_at': refresh_token.expires_at.isoformat()
        }, status_code=200)
    else:
        # Явное возвращение ошибки с деталями
        return JSONResponse(content={
            'detail': 'Invalid username or password'
        }, status_code=401)

@auth_router.post('/refresh', response_model=RefreshResponse, summary="Обновление токена доступа", description="Позволяет обновить токен доступа пользователя, используя действующий токен обновления.")
async def refresh_token(request: RefreshRequest, db: Session = Depends(get_db)):
    refresh_token = db.query(RefreshToken).filter_by(refresh_token=request.refresh_token).first()
    if refresh_token and refresh_token.expires_at > datetime.utcnow():
        # Токен обновления действителен, создаем новый токен доступа
        new_access_token = binascii.hexlify(os.urandom(24)).decode()
        access_token_expires_at = datetime.utcnow() + timedelta(days=1)  # Новый токен доступа на 1 день
        # Обновляем или создаем новый токен доступа для пользователя
        access_token = db.query(Token).filter_by(user_id=refresh_token.user_id).first()
        if access_token:
            access_token.token = new_access_token
            access_token.expires_at = access_token_expires_at
        else:
            access_token = Token(token=new_access_token, user_id=refresh_token.user_id, expires_at=access_token_expires_at)
            db.add(access_token)
        db.commit()
        return JSONResponse(content={'access_token': new_access_token, 'expires_at': access_token_expires_at.isoformat()}, status_code=200)
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
        error_message = 'Token not found'
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

async def get_current_user_admin(db: Session = Depends(get_db), token: str = Depends(api_key_header)):
    user_token = db.query(Token).filter_by(token=token).first()
    if not user_token or user_token.expires_at <= datetime.utcnow():
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    user = db.query(User).filter_by(id=user_token.user_id).first()
    if not user or not user.is_admin:
        raise HTTPException(status_code=403, detail="Admin privileges required")
    return user

@auth_router.post("/users", response_model=UserResponse, summary="Добавление нового пользователя", description="Создает нового пользователя с указанными данными.")
async def create_user(user_request: UserCreateRequest, db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    new_user = User(username=user_request.username, email=user_request.email)
    new_user.set_password(user_request.password)
    db.add(new_user)
    db.commit()
    return new_user

@auth_router.delete("/users/{user_id}", status_code=204, summary="Удаление пользователя", description="Удаляет пользователя по идентификатору.")
async def delete_user(user_id: int, db: Session = Depends(get_db), admin: User = Depends(get_current_user_admin)):
    user = db.query(User).filter_by(id=user_id).first()
    if user:
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
        return Response(status_code=status.OK, content="Password updated successfully")
    else:
        raise HTTPException(status_code=404, detail="User not found")

def init_app(app):
    app.include_router(auth_router)
    Base.metadata.create_all(bind=engine)
    Base.metadata.bind = engine
