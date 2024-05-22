from datetime import datetime
import json5 as json
from fastapi import WebSocket
from .utils.views import print_agent_output
from .utils.llms import call_model

sample_json = """
{
  "Содержание": A table of contents in markdown syntax (using '-') based on the research headers and subheaders,
  "Введение": An indepth introduction to the topic in markdown syntax and hyperlink references to relevant sources,
  "Заключение": A conclusion to the entire research based on all research data in markdown syntax and hyperlink references to relevant sources,
  "Источники": A list with strings of all used source links in the entire research data in markdown syntax and apa citation format. For example: ['-  Title, year, Author [source url](source)', ...]
}
"""


class WriterAgent:
    def __init__(self, websocket: WebSocket):
        self.websocket = websocket

    def get_headers(self, research_state: dict):
        return {
            "title": research_state.get("title"),
            "date": "Дата",
            "introduction": "Введение",
            "table_of_contents": "Содержание",
            "conclusion": "Заключение",
            "references": "Список источников"
        }

    async def write_sections(self, research_state: dict):
        query = research_state.get("title")
        data = research_state.get("research_data")
        task = research_state.get("task")
        follow_guidelines = research_state.get("follow_guidelines")
        guidelines = research_state.get("guidelines")
        model = research_state.get("model")

        # Логирование значения модели
        await self.websocket.send_json({"type": "logs", "output": f"Model being used: {model}"})

        prompt = [{
            "role": "system",
            "content": "You are a research writer. Your sole purpose is to write a well-written "
                       "research reports in Russian about a "
                       "topic based on research findings and information.\n "
        }, {
            "role": "user",
            "content": f"Today's date is {datetime.now().strftime('%d/%m/%Y')}\n."
                       f"Query or Topic: {query}\n"
                       f"Research data: {str(data)}\n"
                       f"Your task is to write an in depth, well written and detailed "
                       f"introduction and conclusion to the research report based on the provided research data. "
                       f"Do not include headers in the results.\n"
                       f"You MUST include any relevant sources to the introduction and conclusion as markdown hyperlinks -"
                       f"For example: 'This is a sample text. ([url website](url))'\n\n"
                       f"{f'You must follow the guidelines provided: {guidelines}' if follow_guidelines else ''}\n"
                       f"You MUST return nothing but a JSON in the following format (without json markdown):\n"
                       f"{sample_json}\n\n"
                       f" You must write in Russian."

        }]

        await self.websocket.send_json({"type": "logs", "output": "Calling model to write sections..."})
        response = call_model(prompt, model, max_retries=2, response_format='json')
        await self.websocket.send_json({"type": "logs", "output": "Model response received."})
        return json.loads(response)

    async def revise_headers(self, research_state: dict, headers: dict):
        prompt = [{
            "role": "system",
            "content": """You are a research writer.
Your sole purpose is to revise the headers data based on the given guidelines."""
        }, {
            "role": "user",
            "content": f"""Your task is to revise the given headers JSON based on the guidelines given.
You are to follow the guidelines but the values should be in simple strings, ignoring all markdown syntax.
You must return nothing but a JSON in the same format as given in headers data.
Guidelines: {research_state.get("guidelines")}\n
Headers Data: {headers}\n
"""

        }]

        await self.websocket.send_json({"type": "logs", "output": "Calling model to revise headers..."})
        response = call_model(prompt, research_state.get("model"), response_format='json')

        # Логирование типа ответа
        await self.websocket.send_json({"type": "logs", "output": f"Model response type: {type(response)}"})

        # Преобразование ответа в строку, если это dict
        if isinstance(response, dict):
            response = json.dumps(response)

        await self.websocket.send_json({"type": "logs", "output": "Model response received for headers."})
        return {"headers": json.loads(response)}

    async def run(self, research_state: dict):
        await self.websocket.send_json({"type": "logs", "output": "Writing final research report based on research data...", "agent": "WRITER"})
        research_layout_content = await self.write_sections(research_state)

        if research_state.get("task").get("verbose"):
            await self.websocket.send_json({"type": "result", "output": research_layout_content}, agent="WRITER")

        headers = self.get_headers(research_state)
        if research_state.get("task").get("follow_guidelines"):
            await self.websocket.send_json({"type": "logs", "output": "Rewriting layout based on guidelines...", "agent": "WRITER"})
            headers = await self.revise_headers(research_state, headers).get("headers")

        await self.websocket.send_json({"type": "result", "output": {**research_layout_content, "headers": headers}})
