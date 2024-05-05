from sqlalchemy import create_engine, Column, Integer, String, Boolean, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship, backref
from werkzeug.security import generate_password_hash, check_password_hash
import os
import logging
from dotenv import load_dotenv

# Настройка логирования
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Загрузка переменных окружения
load_dotenv()

# Получение переменных окружения для подключения к базе данных с заданием значений по умолчанию
POSTGRES_USER = os.getenv("POSTGRES_USER", "default_user")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD", "default_password")
POSTGRES_DB = os.getenv("POSTGRES_DB", "default_db")
POSTGRES_HOST = os.getenv("POSTGRES_HOST", "localhost")
POSTGRES_PORT = os.getenv("POSTGRES_PORT", "5432")



# Настройка подключения к базе данных
DATABASE_URL = f"postgresql://{os.getenv('POSTGRES_USER')}:{os.getenv('POSTGRES_PASSWORD')}@{os.getenv('POSTGRES_HOST')}:{os.getenv('POSTGRES_PORT')}/{os.getenv('POSTGRES_DB')}"
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

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

# class Token(Base):
#     __tablename__ = "token"
#     id = Column(Integer, primary_key=True, index=True)
#     token = Column(String, unique=True, index=True)
#     user_id = Column(Integer, ForeignKey('user.id'), index=True)
#     user = relationship('User', backref=backref('tokens', lazy=True))
#     expires_at = Column(DateTime, nullable=False)

# class RefreshToken(Base):
#     __tablename__ = "refresh_token"
#     id = Column(Integer, primary_key=True, index=True)
#     refresh_token = Column(String, unique=True, index=True)
#     user_id = Column(Integer, ForeignKey('user.id'), index=True)
#     user = relationship('User', backref=backref('refresh_tokens', lazy=True))
#     expires_at = Column(DateTime, nullable=False)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def init_db():
    Base.metadata.create_all(bind=engine)
