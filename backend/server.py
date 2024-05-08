import json
import os
import logging
from datetime import datetime, timezone, timedelta
import re


from unidecode import unidecode

# Импорты FastAPI
from fastapi import FastAPI, Request, WebSocket, WebSocketDisconnect, Depends
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware

# Импорты Pydantic
from pydantic import BaseModel

# Импорты из локальных модулей
from backend.websocket_manager import WebSocketManager
from backend.utils import write_md_to_pdf, write_md_to_word, write_text_to_md
from backend.auth.auth import auth_router, token_required


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


# Включение маршрутизатора аутентификации
app.include_router(auth_router)

def format_filename(task):
    # Извлечение первой строки
    report_name = task.split('\n', 1)[0]
    # Удаление спецсимволов
    report_name = re.sub(r'[^\w\s]', '', report_name)
    # Замена пробелов на подчеркивания и удаление лишних подчеркиваний
    report_name = re.sub(r'\s+', '_', report_name).strip('_')
    # Ограничение названия первыми четырьмя словами
    report_name = '_'.join(report_name.split('_')[:5])
    # Транслитерация с использованием unidecode
    report_name_translit = unidecode(report_name)
    # Добавление даты и уникального идентификатора
    current_date = datetime.now().strftime("%Y-%m-%d")
    current_time_ms = datetime.now().strftime("%H-%M-%S-%f")
    unique_folder_path = f"outputs/{current_date}_{report_name_translit}_{current_time_ms}"
    os.makedirs(unique_folder_path, exist_ok=True)
    file_path = f"{unique_folder_path}/{report_name_translit}"
    return file_path

# Dynamic directory for outputs once first research is run
@app.on_event("startup")
def startup_event():
    if not os.path.isdir("outputs"):
        os.makedirs("outputs")
    app.mount("/outputs", StaticFiles(directory="outputs"), name="outputs")

@app.get("/")
async def read_root(request: Request):
    return templates.TemplateResponse('index.html', {"request": request, "report": None})

def save_request_to_file(data, username):
    moscow_time = datetime.now(timezone(timedelta(hours=3)))  # Московское время UTC+3
    timestamp = moscow_time.strftime("%Y-%m-%d %H:%M:%S")
    with open("user_requests.txt", "a") as file:
        file.write(f"{timestamp} МСК - User:{username} - Request:{data}\n")

# Определение WebSocket эндпоинта
@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket, username: str = Depends(token_required)):
    try:
        logger.debug("Attempting to connect to WebSocket.")
        await websocket.accept()
        logger.debug("WebSocket connection accepted.")
    except Exception as e:
        logger.error(f"Error in websocket_endpoint: {e}")

    # Обработка сообщений WebSocket
    try:
        while True:
            data = await websocket.receive_text()
            save_request_to_file(data, username)  # Сохраняем текст запроса
            if data.startswith("start"):
                try:
                    json_data = json.loads(data[6:])
                    task = json_data.get("task")
                    report_type = json_data.get("report_type")
                    file_path = format_filename(task)
                    if task and report_type:
                        report = await manager.start_streaming(task, report_type, websocket)
                        # Сохранение отчета в формате MD
                        md_path = await write_text_to_md(report, file_path)
                        # Сохранение отчета в формате PDF
                        pdf_path = await write_md_to_pdf(report, file_path)
                        # Сохранение отчета в формате DOCX
                        docx_path = await write_md_to_word(report, file_path)
                        # Возврат путей к сохраненным файлам отчетов
                        await websocket.send_json({"type": "path", "output": {"pdf": pdf_path, "docx": docx_path, "md": md_path}})
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


