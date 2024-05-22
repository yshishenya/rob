import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))
from gpt_researcher import GPTResearcher
from fastapi import WebSocket
from colorama import Fore, Style
from .utils.views import print_agent_output


class ResearchAgent:
    def __init__(self, websocket: WebSocket):
        self.websocket = websocket

    async def research(self, task: str, research_report: str = "research_report", parent_query: str = "", verbose=True):
        # Initialize the researcher
        researcher = GPTResearcher(query=task, report_type=research_report, parent_query=parent_query, verbose=verbose)

        # Conduct research on the given query
        await self.websocket.send_json({"type": "logs", "output": f"Starting research for query: {task}"})
        await researcher.conduct_research()

        # Write the report
        await self.websocket.send_json({"type": "logs", "output": f"Writing report for query: {task}"})
        report = await researcher.write_report()

        return report

    async def run_subtopic_research(self, parent_query: str, subtopic: str, verbose: bool = True):
        try:
            await self.websocket.send_json({"type": "logs", "output": f"Starting subtopic research for: {subtopic}"})
            report = await self.research(parent_query=parent_query, query=subtopic, research_report="subtopic_report", verbose=verbose)
        except Exception as e:
            await self.websocket.send_json({"type": "error", "output": f"Error in researching topic {subtopic}: {e}"})
            report = None
        return {subtopic: report}

    async def run_initial_research(self, research_state: dict):
        task = research_state.get("task")
        #query = research_state.get("query")
        await self.websocket.send_json({"type": "logs", "output": f"Running initial research on the following query: {task}"})
        result = await self.research(task=task, verbose=research_state.get("verbose"))
        await self.websocket.send_json({"type": "result", "output": result})
        return {"task": task, "initial_research": result}

    async def run_depth_research(self, draft_state: dict, research_state: dict):
        task = draft_state.get("task")
        topic = draft_state.get("topic")
        parent_query = research_state.get("task")
        verbose = research_state.get("verbose")
        await self.websocket.send_json({"type": "logs", "output": f"Running in-depth research on the following report topic: {topic}"})
        research_draft = await self.run_subtopic_research(parent_query, topic, verbose)
        await self.websocket.send_json({"type": "result", "output": research_draft})
        return {"draft": research_draft}
