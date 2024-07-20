import json
import os
import logging
from datetime import datetime, timezone, timedelta
import re


from unidecode import unidecode

# Импорты FastAPI
import json
import os
import re
import time

from fastapi import FastAPI, Request, WebSocket, WebSocketDisconnect, Depends, File, UploadFile, Header
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates


# Импорты Pydantic
from pydantic import BaseModel

# Импорты из локальных модулей
from backend.websocket_manager import WebSocketManager
from backend.utils import write_md_to_pdf, write_md_to_word, write_text_to_md
from backend.auth.auth import auth_router, token_required

import shutil
from multi_agents.main import run_research_task
from gpt_researcher.document.document import DocumentLoader
from gpt_researcher.master.actions import stream_output





# Настройка уровня логирования для отладки
logging.basicConfig(level=logging.DEBUG)

# Создание экземпляра логгера
logger = logging.getLogger(__name__)


# Определение модели данных для запроса исследования
class ResearchRequest(BaseModel):
    task: str
    report_type: str
    agent: str

class ConfigRequest(BaseModel):
    ANTHROPIC_API_KEY: str
    TAVILY_API_KEY: str
    LANGCHAIN_TRACING_V2: str
    LANGCHAIN_API_KEY: str
    OPENAI_API_KEY: str
    DOC_PATH: str
    RETRIEVER: str
    GOOGLE_API_KEY: str = ''
    GOOGLE_CX_KEY: str = ''
    BING_API_KEY: str = ''
    SERPAPI_API_KEY: str = ''
    SERPER_API_KEY: str = ''
    SEARX_URL: str = ''
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
    return templates.TemplateResponse(
        "index.html", {"request": request, "report": None}
    )


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
                    tone = json_data.get("tone")
                    headers = json_data.get("headers", {})
                    file_path = format_filename(task)
                    report_source = json_data.get("report_source")
                    if task and report_type:
                        report = await manager.start_streaming(
                            task, report_type, report_source, tone, websocket, headers
                        )
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


@app.post("/api/multi_agents")
async def run_multi_agents():
    websocket = manager.active_connections[0] if manager.active_connections else None
    if websocket:
        report = await run_research_task("Is AI in a hype cycle?", websocket, stream_output)
        return {"report": report}
    else:
        return JSONResponse(status_code=400, content={"message": "No active WebSocket connection"})

@app.get("/getConfig")
async def get_config(
    langchain_api_key: str = Header(None),
    openai_api_key: str = Header(None),
    tavily_api_key: str = Header(None),
    google_api_key: str = Header(None),
    google_cx_key: str = Header(None),
    bing_api_key: str = Header(None),
    serpapi_api_key: str = Header(None),
    serper_api_key: str = Header(None),
    searx_url: str = Header(None)
):
    config = {
        "LANGCHAIN_API_KEY": langchain_api_key if langchain_api_key else os.getenv("LANGCHAIN_API_KEY", ""),
        "OPENAI_API_KEY": openai_api_key if openai_api_key else os.getenv("OPENAI_API_KEY", ""),
        "TAVILY_API_KEY": tavily_api_key if tavily_api_key else os.getenv("TAVILY_API_KEY", ""),
        "GOOGLE_API_KEY": google_api_key if google_api_key else os.getenv("GOOGLE_API_KEY", ""),
        "GOOGLE_CX_KEY": google_cx_key if google_cx_key else os.getenv("GOOGLE_CX_KEY", ""),
        "BING_API_KEY": bing_api_key if bing_api_key else os.getenv("BING_API_KEY", ""),
        "SERPAPI_API_KEY": serpapi_api_key if serpapi_api_key else os.getenv("SERPAPI_API_KEY", ""),
        "SERPER_API_KEY": serper_api_key if serper_api_key else os.getenv("SERPER_API_KEY", ""),
        "SEARX_URL": searx_url if searx_url else os.getenv("SEARX_URL", ""),
        "LANGCHAIN_TRACING_V2": os.getenv("LANGCHAIN_TRACING_V2", "true"),
        "DOC_PATH": os.getenv("DOC_PATH", ""),
        "RETRIEVER": os.getenv("RETRIEVER", "")
    }
    return config

@app.post("/setConfig")
async def set_config(config: ConfigRequest):
    os.environ["ANTHROPIC_API_KEY"] = config.ANTHROPIC_API_KEY
    os.environ["TAVILY_API_KEY"] = config.TAVILY_API_KEY
    os.environ["LANGCHAIN_TRACING_V2"] = config.LANGCHAIN_TRACING_V2
    os.environ["LANGCHAIN_API_KEY"] = config.LANGCHAIN_API_KEY
    os.environ["OPENAI_API_KEY"] = config.OPENAI_API_KEY
    os.environ["DOC_PATH"] = config.DOC_PATH
    os.environ["RETRIEVER"] = config.RETRIEVER
    os.environ["GOOGLE_API_KEY"] = config.GOOGLE_API_KEY
    os.environ["GOOGLE_CX_KEY"] = config.GOOGLE_CX_KEY
    os.environ["BING_API_KEY"] = config.BING_API_KEY
    os.environ["SERPAPI_API_KEY"] = config.SERPAPI_API_KEY
    os.environ["SERPER_API_KEY"] = config.SERPER_API_KEY
    os.environ["SEARX_URL"] = config.SEARX_URL
    return {"message": "Config updated successfully"}


)


# Define DOC_PATH
DOC_PATH = os.getenv("DOC_PATH", "./my-docs")
if not os.path.exists(DOC_PATH):
    os.makedirs(DOC_PATH)


@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    file_path = os.path.join(DOC_PATH, file.filename)
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    print(f"File uploaded to {file_path}")

    # Load documents after upload
    document_loader = DocumentLoader(DOC_PATH)
    await document_loader.load()

    return {"filename": file.filename, "path": file_path}


@app.get("/files/")
async def list_files():
    files = os.listdir(DOC_PATH)
    print(f"Files in {DOC_PATH}: {files}")
    return {"files": files}

@app.delete("/files/{filename}")
async def delete_file(filename: str):
    file_path = os.path.join(DOC_PATH, filename)
    if os.path.exists(file_path):
        os.remove(file_path)
        print(f"File deleted: {file_path}")
        return {"message": "File deleted successfully"}
    else:
        print(f"File not found: {file_path}")
        return JSONResponse(status_code=404, content={"message": "File not found"})
