from sqlalchemy import create_engine, Column, Integer, String, Boolean, DateTime, ForeignKey, text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from werkzeug.security import generate_password_hash
from dotenv import load_dotenv
import os

# Загрузка переменных окружения из файла .env
load_dotenv()

# Настройка подключения к базе данных через переменные окружения
DATABASE_URL = f"postgresql://{os.getenv('POSTGRES_USER')}:" \
               f"{os.getenv('POSTGRES_PASSWORD')}@localhost:" \
               f"{os.getenv('POSTGRES_PORT')}/{os.getenv('POSTGRES_DB')}"

DEFAULT_DATABASE_URL = f"postgresql://{os.getenv('POSTGRES_USER')}:" \
                       f"{os.getenv('POSTGRES_PASSWORD')}@localhost:" \
                       f"{os.getenv('POSTGRES_PORT')}/postgres"

engine = create_engine(DATABASE_URL)
default_engine = create_engine(DEFAULT_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def execute_query(query, params=None, autocommit=False, use_default_db=False):
    """Функция для выполнения SQL запроса с параметрами."""
    engine_to_use = default_engine if use_default_db else engine
    with engine_to_use.connect() as connection:
        if autocommit:
            connection = connection.execution_options(isolation_level="AUTOCOMMIT")
        connection.execute(text(query), params)

def reset_database():
    """Функция для удаления и создания базе данных."""
    database_name = os.getenv('POSTGRES_DB')
    response = input(f"Вы уверены, что хотите закрыть все активные подключения и пересоздать базу данных {database_name}? (y/n): ")
    if response.lower() != 'y':
        print("Операция отменена.")
        return

    terminate_query = f"""
    SELECT pg_terminate_backend(pg_stat_activity.pid)
    FROM pg_stat_activity
    WHERE pg_stat_activity.datname = '{database_name}'
      AND pid <> pg_backend_pid();
    """
    execute_query(terminate_query, use_default_db=True)
    print(f"Все активные подключения к базе данных {database_name} были закрыты.")

    execute_query(f"DROP DATABASE IF EXISTS {database_name}", autocommit=True, use_default_db=True)
    execute_query(f"CREATE DATABASE {database_name}", autocommit=True, use_default_db=True)
    print(f"База данных {database_name} была пересоздана.")

class User(Base):
    """Модель пользователя."""
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, nullable=False)
    is_admin = Column(Boolean, default=False, nullable=False)


def create_admin():
    """Функция для создания администратора, если он не существует."""
    admin_username = os.getenv('ADMIN_USERNAME')
    admin_email = os.getenv('ADMIN_EMAIL')
    admin_password_hash = generate_password_hash(os.getenv('ADMIN_PASSWORD'))

    db = SessionLocal()
    admin_exists = db.query(User).filter((User.username == admin_username) | (User.email == admin_email)).first() is not None
    if not admin_exists:
        admin_user = User(username=admin_username, email=admin_email, password_hash=admin_password_hash, is_admin=True)
        db.add(admin_user)
        db.commit()
        print('Администратор создан.')
    else:
        print('Администратор уже существует.')
    db.close()

if __name__ == "__main__":
    # Пересоздание базы данных
    reset_database()

    # Создание таблиц
    Base.metadata.create_all(bind=engine)

    # Создание администратора
    create_admin()
