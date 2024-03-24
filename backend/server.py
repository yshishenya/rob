from fastapi import FastAPI, Request, WebSocket, WebSocketDisconnect, HTTPException, Response
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from pydantic import BaseModel
from datetime import datetime, timezone
import json
import os
from gpt_researcher.utils.websocket_manager import WebSocketManager
from .utils import write_md_to_pdf


class ResearchRequest(BaseModel):
    task: str
    report_type: str
    agent: str

class LoginData(BaseModel):
    username: str
    password: str

app = FastAPI()

app.mount("/site", StaticFiles(directory="./frontend"), name="site")
app.mount("/static", StaticFiles(directory="./frontend/static"), name="static")

templates = Jinja2Templates(directory="./frontend")

manager = WebSocketManager()


# Dynamic directory for outputs once first research is run
@app.on_event("startup")
def startup_event():
    if not os.path.isdir("outputs"):
        os.makedirs("outputs")
    app.mount("/outputs", StaticFiles(directory="outputs"), name="outputs")

@app.get("/")
async def read_root(request: Request):
    return templates.TemplateResponse('index.html', {"request": request, "report": None})


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            if data.startswith("start"):
                json_data = json.loads(data[6:])
                task = json_data.get("task")
                report_type = json_data.get("report_type")
                if task and report_type:
                    report = await manager.start_streaming(task, report_type, websocket)
                    path = await write_md_to_pdf(report)
                    await websocket.send_json({"type": "path", "output": path})
                else:
                    print("Error: not enough parameters provided.")

    except WebSocketDisconnect:
        await manager.disconnect(websocket)

# Определение абсолютного пути к директории текущего скрипта
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Создание пути к файлу users.json, используя BASE_DIR
users_file_path = os.path.join(BASE_DIR, "users.json")


@app.post("/login")
async def login(login_data: LoginData, response: Response):
    # Путь к файлу users.json относительно местоположения текущего скрипта
    BASE_DIR = os.path.dirname(os.path.abspath(__file__))
    users_file_path = os.path.join(BASE_DIR, "users.json")

    with open(users_file_path, "r") as file:
        users = json.load(file)

    # Поиск пользователя в списке
    user = next((u for u in users if u["username"] == login_data.username and u["password"] == login_data.password), None)
    if not user:
        raise HTTPException(status_code=401, detail="Неверное имя пользователя или пароль")

    # Проверка срока действия
    user_expiry = datetime.fromisoformat(user["expiry"].replace("Z", "+00:00"))
    now = datetime.now(timezone.utc)
    if now > user_expiry:
        raise HTTPException(status_code=403, detail="Срок предоставленного доступа истек, обратитесь по адресу для продления")

    # Установка cookie
    response.set_cookie(key="username", value=login_data.username, expires=14*24*60*60)  # Cookie на 14 дней
    return {"message": "Успешная авторизация"}
