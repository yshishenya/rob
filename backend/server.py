from fastapi import FastAPI, Request, WebSocket, WebSocketDisconnect, Depends
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware

from pydantic import BaseModel
import json
import os
from typing import Optional
from backend.websocket_manager import WebSocketManager
from backend.utils import write_md_to_pdf, write_md_to_word
from backend.auth import auth_router, token_required
import logging



logging.basicConfig(level=logging.DEBUG)

class ResearchRequest(BaseModel):
    task: str
    report_type: str
    agent: str


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Разрешить все источники
    allow_credentials=True,
    allow_methods=["*"],  # Разрешить все методы
    allow_headers=["*"],  # Разрешить все заголовки
)

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

app.include_router(auth_router)

logger = logging.getLogger(__name__)

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket, token: str = Depends(token_required)):
    try:
        logger.debug("Attempting to connect to WebSocket.")
        await websocket.accept()
        logger.debug("WebSocket connection accepted.")
        ...
    except Exception as e:
        logger.error(f"Error in websocket_endpoint: {e}")


    #await manager.connect(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            if data.startswith("start"):
                json_data = json.loads(data[6:])
                task = json_data.get("task")
                report_type = json_data.get("report_type")
                if task and report_type:
                    report = await manager.start_streaming(task, report_type, websocket)
                    # Saving report as pdf
                    pdf_path = await write_md_to_pdf(report)
                    # Saving report as docx
                    docx_path = await write_md_to_word(report)
                    # Returning the path of saved report files
                    await websocket.send_json({"type": "path", "output": {"pdf": pdf_path, "docx": docx_path}})
                else:
                    print("Error: not enough parameters provided.")

    except WebSocketDisconnect:
        await manager.disconnect(websocket)
