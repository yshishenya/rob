from fastapi import APIRouter, Request, Depends, HTTPException
from fastapi.responses import JSONResponse
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship, backref, Session
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
import binascii
import os
from functools import wraps

# Создаем экземпляр APIRouter
auth_router = APIRouter()

# Инициализация объекта SQLAlchemy
DATABASE_URL = "postgresql://pro4:lkf^ge9_43Fad@localhost:4321/volter"
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

# Модели данных
# Определение моделей данных для ORM
class User(Base):
    """Модель пользователя."""
    __tablename__ = "user"

    id = Column(Integer, primary_key=True, index=True)  # Идентификатор пользователя
    username = Column(String, unique=True, index=True)  # Имя пользователя
    password_hash = Column(String, nullable=False)  # Хэш пароля пользователя
    email = Column(String, unique=True, index=True)  # Электронная почта пользователя
    is_admin = Column(Boolean, default=False, nullable=False)  # Флаг администратора

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
    expires_at = Column(DateTime, nullable=False)  # Добавляем поле для хранения времени истечения токена

class RefreshToken(Base):
    __tablename__ = "refresh_token"

    id = Column(Integer, primary_key=True, index=True)
    refresh_token = Column(String, unique=True, index=True)
    user_id = Column(Integer, ForeignKey('user.id'), index=True)
    user = relationship('User', backref=backref('refresh_tokens', lazy=True))
    expires_at = Column(DateTime, nullable=False)

# Маршруты
@auth_router.post('/login')
async def login(request: Request, db: Session = Depends(get_db)):
    data = await request.json()
    user = db.query(User).filter_by(username=data['username']).first()
    if user and user.check_password(data['password']):
        # Проверяем и обновляем (при необходимости) токен доступа
        access_token = db.query(Token).filter_by(user_id=user.id).first()
        if not access_token or access_token.expires_at <= datetime.utcnow():
            new_access_token = binascii.hexlify(os.urandom(24)).decode()
            access_token_expires_at = datetime.utcnow() + timedelta(minutes=10)  # Токен доступа на 1 час
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
        raise HTTPException(status_code=401, detail='Invalid username or password')

@auth_router.post('/refresh')
async def refresh_token(request: Request, db: Session = Depends(get_db)):
    data = await request.json()
    refresh_token = db.query(RefreshToken).filter_by(refresh_token=data['refresh_token']).first()
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
            access_token = Token(token=new_access_token, user_id=refresh_token.user_id, expires_at=access_token_expires_at)
            db.add(access_token)
        db.commit()
        return JSONResponse(content={'access_token': new_access_token, 'expires_at': access_token_expires_at.isoformat()}, status_code=200)
    raise HTTPException(status_code=401, detail='Invalid or expired refresh token')

def token_required(f):
    @wraps(f)
    def decorated_function(request: Request, db: Session = Depends(get_db), *args, **kwargs):
        # Получаем токен из заголовков запроса
        token = request.headers.get('Authorization')
        if not token:
            raise HTTPException(status_code=403, detail='Invalid or expired access token')

        # Пытаемся найти токен в базе данных
        try:
            # Обычно токен передается в формате "Bearer <token>", поэтому необходимо извлечь сам токен
            token = token.split(" ")[1]
            access_token = db.query(Token).filter_by(token=token).first()
            if access_token is None or access_token.expires_at <= datetime.utcnow():
                raise HTTPException(status_code=401, detail='Token is invalid or expired')
        except:
            raise HTTPException(status_code=401, detail='Problem with token verification')

        return f(*args, **kwargs)
    return decorated_function

@auth_router.get('/protected')
def protected_route(db: Session = Depends(get_db), token: str = Depends(token_required)):
    return JSONResponse(content={'message': 'This route is only available to authenticated users'}, status_code=200)

def init_app(app):
    app.include_router(auth_router)
    Base.metadata.create_all(bind=engine)
    Base.metadata.bind = engine

