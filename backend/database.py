from sqlalchemy import create_engine, Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship, backref
from werkzeug.security import generate_password_hash, check_password_hash
import os

# Настройка подключения к базе данных
POSTGRES_USER = os.getenv("POSTGRES_USER")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
POSTGRES_DB = os.getenv("POSTGRES_DB")
POSTGRES_HOST = os.getenv("POSTGRES_HOST")
POSTGRES_PORT = os.getenv("POSTGRES_PORT")

DATABASE_URL = f"postgresql://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DB}"

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
    __tablename__ = "user"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password_hash = Column(String, nullable=False)
    email = Column(String, unique=True, index=True)
    is_admin = Column(Boolean, default=False, nullable=False)

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
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
