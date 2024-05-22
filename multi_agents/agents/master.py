import os
import time
from langgraph.graph import StateGraph, END
from .utils.views import print_agent_output
from multi_agents.memory.research import ResearchState
from fastapi import WebSocket

# Import agent classes
from . import \
    WriterAgent, \
    EditorAgent, \
    PublisherAgent, \
    ResearchAgent


class ChiefEditorAgent:
    def __init__(self, task: dict, websocket: WebSocket):
        self.task_id = int(time.time()) # Currently time based, but can be any unique identifier
        self.task = task
        query = self.task.get('query', '')
        if not isinstance(query, str):
            raise ValueError("The 'query' field must be a string")
        self.output_dir = f"./outputs/run_{self.task_id}_{query[0:60]}"
        self.websocket = websocket
        os.makedirs(self.output_dir, exist_ok=True)
        self.publisher_agent = PublisherAgent(self.output_dir, self.websocket)
    def init_research_team(self):
        # Initialize agents
        writer_agent = WriterAgent(self.websocket)
        editor_agent = EditorAgent(self.websocket)
        research_agent = ResearchAgent(self.websocket)
        publisher_agent = PublisherAgent(self.output_dir, self.websocket)

        # Define a Langchain StateGraph with the ResearchState
        workflow = StateGraph(ResearchState)

        # Add nodes for each agent
        workflow.add_node("browser", research_agent.run_initial_research)
        workflow.add_node("planner", editor_agent.plan_research)
        workflow.add_node("researcher", editor_agent.run_parallel_research)
        workflow.add_node("writer", writer_agent.run)
        workflow.add_node("publisher", publisher_agent.run)

        workflow.add_edge('browser', 'planner')
        workflow.add_edge('planner', 'researcher')
        workflow.add_edge('researcher', 'writer')
        workflow.add_edge('writer', 'publisher')

        # set up start and end nodes
        workflow.set_entry_point("browser")
        workflow.add_edge('publisher', END)

        return workflow

    async def run_research_task(self):
        research_team = self.init_research_team()

        # compile the graph
        chain = research_team.compile()

        print_agent_output(f"Starting the research process for query '{self.task}'...", "MASTER")
        await self.websocket.send_json({"type": "logs", "output": f"Starting the research process for query '{self.task}'..."})
        result = await chain.ainvoke({"task": self.task, "websocket": self.websocket})

        await self.websocket.send_json({"type": "result", "output": result})
        return result
