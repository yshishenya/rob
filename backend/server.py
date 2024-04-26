import json
import os
import logging
from datetime import datetime
from functools import wraps

# Импорты FastAPI
from fastapi import FastAPI, Request, WebSocket, WebSocketDisconnect, Depends
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware

# Импорты Pydantic
from pydantic import BaseModel

# Импорты SQLAlchemy
from sqlalchemy.orm import Session

# Импорты из локальных модулей
from backend.websocket_manager import WebSocketManager
from backend.utils import write_md_to_pdf, write_md_to_word
from backend.auth import auth_router, token_required, Token, RefreshToken, get_db

# Импорты сторонних библиотек
from apscheduler.schedulers.asyncio import AsyncIOScheduler

# Настройка уровня логирования для отладки
logging.basicConfig(level=logging.DEBUG)

# Создание экземпляра логгера
logger = logging.getLogger(__name__)

# Определение модели данных для запроса исследования
class ResearchRequest(BaseModel):
    task: str
    report_type: str
    agent: str

# Создание экземпляра приложения FastAPI
app = FastAPI()

# Настройка CORS политики для приложения
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Разрешить все источники
    allow_credentials=True,
    allow_methods=["*"],  # Разрешить все методы
    allow_headers=["*"],  # Разрешить все заголовки
)

# Монтирование статических файлов и шаблонов
app.mount("/site", StaticFiles(directory="./frontend"), name="site")
app.mount("/static", StaticFiles(directory="./frontend/static"), name="static")
templates = Jinja2Templates(directory="./frontend")

# Создание менеджера WebSocket
manager = WebSocketManager()

# Создание планировщика задач
scheduler = AsyncIOScheduler()

# Включение маршрутизатора аутентификации
app.include_router(auth_router)

# Декоратор для работы с сессией базы данных
def with_db_session(job_func):
    @wraps(job_func)
    def wrapper_job(*args, **kwargs):
        # Создание сессии из генератора
        db_generator = get_db()
        db = next(db_generator)  # Получение сессии
        try:
            return job_func(db, *args, **kwargs)
        finally:
            db.close()  # Закрытие сессии после выполнения функции
            try:
                next(db_generator)  # Завершение генератора
            except StopIteration:
                pass
    return wrapper_job

# Функция для очистки устаревших токенов
@with_db_session
def cleanup_tokens(db: Session):
    current_time = datetime.utcnow()
    num_deleted_tokens = db.query(Token).filter(Token.expires_at <= current_time).delete()
    num_deleted_refresh_tokens = db.query(RefreshToken).filter(RefreshToken.expires_at <= current_time).delete()
    db.commit()
    logger.info(f"Очистка токенов: Удалено {num_deleted_tokens} устаревших токенов и {num_deleted_refresh_tokens} устаревших обновлений токенов.")

# Настройка событий при запуске и завершении работы приложения
@app.on_event("startup")
def startup_event():
    if not os.path.isdir("outputs"):
        os.makedirs("outputs")
    app.mount("/outputs", StaticFiles(directory="outputs"), name="outputs")
    # Добавление задачи в планировщик
    scheduler.add_job(cleanup_tokens, 'interval', minutes=1)
    # Запуск планировщика
    scheduler.start()

@app.on_event("shutdown")
def shutdown_scheduler():
    scheduler.shutdown()

# Определение корневого маршрута
@app.get("/")
async def read_root(request: Request):
    return templates.TemplateResponse('index.html', {"request": request, "report": None})

# Определение WebSocket эндпоинта
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket, token: str = Depends(token_required)):
    try:
        logger.debug("Attempting to connect to WebSocket.")
        await websocket.accept()
        logger.debug("WebSocket connection accepted.")
        ...
    except Exception as e:
        logger.error(f"Error in websocket_endpoint: {e}")

    # Обработка сообщений WebSocket
    try:
        while True:
            data = await websocket.receive_text()
            if data.startswith("start"):
                try:
                    json_data = json.loads(data[6:])
                    task = json_data.get("task")
                    report_type = json_data.get("report_type")
                    if task and report_type:
                        report = await manager.start_streaming(task, report_type, websocket)
                        # Сохранение отчета в формате PDF
                        pdf_path = await write_md_to_pdf(report)
                        # Сохранение отчета в формате DOCX
                        docx_path = await write_md_to_word(report)
                        # Возврат путей к сохраненным файлам отчетов
                        await websocket.send_json({"type": "path", "output": {"pdf": pdf_path, "docx": docx_path}})
                    else:
                        await websocket.send_text("Error: not enough parameters provided.")
                except json.JSONDecodeError:
                    await websocket.send_text("Error: Failed to parse JSON.")
                except Exception as e:
                    logger.error(f"Error during report generation or saving: {e}")
                    await websocket.send_text("Error: Failed to process the request.")
    except WebSocketDisconnect:
        await manager.disconnect(websocket)
    except Exception as e:
        logger.error(f"Unhandled error in websocket_endpoint: {e}")
        await websocket.close(code=1011)  # Неожиданное условие, которое помешало выполнить запрос

