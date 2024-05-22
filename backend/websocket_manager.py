# connect any client to gpt-researcher using websocket
import asyncio
import datetime
from typing import Dict, List

from fastapi import WebSocket

from backend.report_type import BasicReport, DetailedReport

from gpt_researcher.utils.enum import ReportType

# Импортируем ChiefEditorAgent из multi_agents
from multi_agents.agents.master import ChiefEditorAgent
from multi_agents.agents.publisher import PublisherAgent


class WebSocketManager:
    """Manage websockets"""

    def __init__(self):
        """Initialize the WebSocketManager class."""
        self.active_connections: List[WebSocket] = []
        self.sender_tasks: Dict[WebSocket, asyncio.Task] = {}
        self.message_queues: Dict[WebSocket, asyncio.Queue] = {}

    async def start_sender(self, websocket: WebSocket):
        """Start the sender task."""
        queue = self.message_queues.get(websocket)
        if not queue:
            return

        while True:
            message = await queue.get()
            if websocket in self.active_connections:
                try:
                    await websocket.send_text(message)
                except:
                    break
            else:
                break

    async def connect(self, websocket: WebSocket):
        """Connect a websocket."""
        await websocket.accept()
        self.active_connections.append(websocket)
        self.message_queues[websocket] = asyncio.Queue()
        self.sender_tasks[websocket] = asyncio.create_task(
            self.start_sender(websocket))

    async def disconnect(self, websocket: WebSocket):
        """Disconnect a websocket."""
        if websocket in self.active_connections:
            self.active_connections.remove(websocket)
            self.sender_tasks[websocket].cancel()
            await self.message_queues[websocket].put(None)
            del self.sender_tasks[websocket]
            del self.message_queues[websocket]

    async def start_streaming(self, task, report_type, websocket):
        """Start streaming the output."""
        report = await run_agent(task, report_type, websocket)
        return report


async def run_agent(task, report_type, websocket):
    """Run the agent."""
    try:
        # Измеряем время начала
        start_time = datetime.datetime.now()
        await websocket.send_json({"type": "logs", "output": "Starting ChiefEditorAgent"})

        # Инициализируем ChiefEditorAgent с задачей и WebSocket
        chief_editor = ChiefEditorAgent({"query": task}, websocket)
        report = await chief_editor.run_research_task()

        await websocket.send_json({"type": "logs", "output": "ChiefEditorAgent completed"})
        await websocket.send_json({"type": "logs", "output": "Starting PublisherAgent"})

        # Инициализируем PublisherAgent с WebSocket
        publisher = PublisherAgent(output_dir="outputs", websocket=websocket)
        await publisher.publish_research_report(report, {"pdf": True, "docx": True, "markdown": True})

        # Измеряем время окончания
        end_time = datetime.datetime.now()
        await websocket.send_json({"type": "logs", "output": f"\nTotal run time: {end_time - start_time}\n"})

        return report
    except Exception as e:
        await websocket.send_json({"type": "error", "message": str(e)})
        raise

