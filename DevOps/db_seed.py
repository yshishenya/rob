import argparse  # Импорт модуля для разбора аргументов командной строки
from flask import Flask  # Импорт класса Flask для создания приложения
from flask_sqlalchemy import SQLAlchemy  # Импорт класса SQLAlchemy для работы с базой данных через ORM
from werkzeug.security import generate_password_hash  # Импорт функции для генерации хэша пароля
from dotenv import load_dotenv  # Импорт функции для загрузки переменных окружения из файла .env
import os  # Импорт модуля os для работы с операционной системой
import psycopg2  # Импорт модуля для работы с PostgreSQL
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT  # Импорт константы для установки уровня изоляции транзакции

# Загрузка переменных окружения из файла .env, расположенного на уровень выше текущего каталога
load_dotenv()

# Создание экземпляра приложения Flask и настройка подключения к базе данных через переменные окружения
app = Flask(__name__)
app.config.from_mapping(
    SQLALCHEMY_DATABASE_URI=f"postgresql://{os.getenv('POSTGRES_USER')}:" \
                            f"{os.getenv('POSTGRES_PASSWORD')}@localhost:" \
                            f"{os.getenv('POSTGRES_PORT')}/{os.getenv('POSTGRES_DB')}",
    SQLALCHEMY_TRACK_MODIFICATIONS=False  # Отключение отслеживания модификаций объектов для повышения производительности
)

# Инициализация объекта SQLAlchemy для работы с базой данных через ORM
db = SQLAlchemy(app)

def execute_query(query, params=None):
    """Функция для выполнения SQL запроса с параметрами.

    Args:
        query (str): SQL запрос.
        params (tuple, optional): Параметры запроса. Defaults to None.
    """
    #Параметры подключения к базе данных, получаемые из переменных окружения
    connection_params = {
        'dbname': 'postgres',
        'user': os.getenv('POSTGRES_USER'),
        'password': os.getenv('POSTGRES_PASSWORD'),
        'host': 'localhost',
        'port': os.getenv('POSTGRES_PORT')
    }
    # Установка соединения с базой данных
    conn = psycopg2.connect(**connection_params)
    try:
        # Установка режима autocommit для операций, не требующих транзакции
        if "DROP DATABASE" in query or "CREATE DATABASE" in query:
            conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
        # Создание курсора для выполнения запроса
        cursor = conn.cursor()
        try:
            cursor.execute(query, params)  # Выполнение запроса с параметрами
        finally:
            cursor.close()  # Закрытие курсора
    finally:
        conn.close()  # Закрытие соединения с базой данных

def reset_database():
    """Функция для удаления и создания базы данных."""
    database_name = os.getenv('POSTGRES_DB')  # Получение имени базы данных из переменной окружения

    # Запрос на закрытие всех активных подключений
    response = input(f"Вы уверены, что хотите закрыть все активные подключения и пересоздать базу данных {database_name}? (y/n): ")
    if response.lower() != 'y':
        print("Операция отменена.")
        return

    # Закрытие всех активных подключений к базе данных
    terminate_query = f"""
    SELECT pg_terminate_backend(pg_stat_activity.pid)
    FROM pg_stat_activity
    WHERE pg_stat_activity.datname = '{database_name}'
      AND pid <> pg_backend_pid();
    """
    execute_query(terminate_query)
    print(f"Все активные подключения к базе данных {database_name} были закрыты.")

    # Удаление базы данных, если она существует
    execute_query(f"DROP DATABASE IF EXISTS {database_name}")
    # Создание базы данных
    execute_query(f"CREATE DATABASE {database_name}")
    print(f"База данных {database_name} была пересоздана.")

# def create_database():
#     """Функция для создания базы данных, если она не существует."""
#     database_name = os.getenv('POSTGRES_DB')  # Получение имени базы данных из переменной окружения
#     # Установка соединения с базой данных
#     with psycopg2.connect(dbname='postgres', user=os.getenv('POSTGRES_USER'), password=os.getenv('POSTGRES_PASSWORD'), host=os.getenv('POSTGRES_HOST'), port=os.getenv('POSTGRES_PORT')) as conn:
#         conn.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)  # Установка режима autocommit
#         with conn.cursor() as cursor:
#             # Проверка существования базы данных
#             cursor.execute(f"SELECT 1 FROM pg_catalog.pg_database WHERE datname = '{database_name}'")
#             if not cursor.fetchone():
#                 execute_query(f"CREATE DATABASE {database_name}")  # Создание базы данных, если она не существует
#                 print(f"База данных {database_name} создана.")  # Вывод сообщения о создании базы данных
#             else:
#                 print(f"База данных {database_name} уже существует.")  # Вывод сообщения, если база данных уже существует

# Определение моделей данных для ORM
class User(db.Model):
    """Модель пользователя."""
    id = db.Column(db.Integer, primary_key=True)  # Идентификатор пользователя
    username = db.Column(db.String(50), unique=True, nullable=False)  # Имя пользователя
    password_hash = db.Column(db.String(255), nullable=False)  # Хэш пароля пользователя
    email = db.Column(db.String(255), unique=True, nullable=False)  # Электронная почта пользователя
    is_admin = db.Column(db.Boolean, default=False, nullable=False)  # Флаг администратора

class Token(db.Model):
    """Модель токена."""
    id = db.Column(db.Integer, primary_key=True)  # Идентификатор токена
    token = db.Column(db.String(255), unique=True, nullable=False)  # Значение токена
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)  # Внешний ключ на пользователя
    user = db.relationship('User', backref=db.backref('tokens', lazy=True))  # Связь с моделью пользователя
    expires_at = db.Column(db.DateTime, nullable=False)  # Добавляем поле для хранения времени истечения токена

class RefreshToken(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    refresh_token = db.Column(db.String(255), unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user = db.relationship('User', backref=db.backref('refresh_tokens', lazy=True))
    expires_at = db.Column(db.DateTime, nullable=False)

def create_admin():
    """Функция для создания администратора, если он не существует."""
    # Получение данных администратора из переменных окружения
    admin_username = os.getenv('ADMIN_USERNAME')
    admin_email = os.getenv('ADMIN_EMAIL')
    admin_password_hash = generate_password_hash(os.getenv('ADMIN_PASSWORD'))  # Генерация хэша пароля

    # Проверка существования администратора в базе данных
    admin_exists = User.query.filter((User.username == admin_username) | (User.email == admin_email)).first() is not None
    if not admin_exists:
        # Создание объекта администратора и добавление его в базу данных
        admin_user = User(username=admin_username, email=admin_email, password_hash=admin_password_hash, is_admin=True)
        db.session.add(admin_user)
        db.session.commit()
        print('Администратор создан.')  # Вывод сообщения о создании администратора
    else:
        print('Администратор уже существует.')  # Вывод сообщения, если администратор уже существует

# Основная часть скрипта для управления базой данных
if __name__ == '__main__':
    with app.app_context():
        reset_database()  # Сброс базы данных, если указан соответствующий аргумент
        db.create_all()  # Создание таблиц в базе данных
        create_admin()  # Создание администратора
