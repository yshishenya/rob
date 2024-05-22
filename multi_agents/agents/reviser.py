from .utils.views import print_agent_output
from .utils.llms import call_model
import json
from fastapi import WebSocket

sample_revision_notes = """
{
  "draft": {
    draft title: The revised draft that you are submitting for review
  },
  "revision_notes": Your message to the reviewer about the changes you made to the draft based on their feedback
}
"""

class ReviserAgent:
    def __init__(self, websocket: WebSocket):
        self.websocket = websocket

    async def revise_draft(self, draft_state: dict):
        """
        Review a draft article
        :param draft_state:
        :return:
        """
        review = draft_state.get("review")
        task = draft_state.get("task")
        draft_report = draft_state.get("draft")
        model = draft_state.get("model")

        # Логирование значения модели
        await self.websocket.send_json({"type": "logs", "output": f"Model being used: {model}"})

        prompt = [{
            "role": "system",
            "content": "You are a research reviser. Your sole purpose is to revise the research draft based on the reviewer's feedback."
        }, {
            "role": "user",
            "content": f"""Draft:\n{draft_report}" + "Reviewer's notes:\n{review}\n\n
You have been tasked by your reviewer with revising the following draft, which was written by a non-expert.
If you decide to follow the reviewer's notes, please write a new draft and make sure to address all of the points they raised.
Please keep all other aspects of the draft the same.
You MUST return nothing but a JSON in the following format:
{sample_revision_notes}
Draft: {draft_state.get("draft")}
Reviewer's feedback: {draft_state.get("reviewer_feedback")}
"""
        }]

        await self.websocket.send_json({"type": "logs", "output": "Calling model to revise draft..."})
        response = call_model(prompt, model=model, response_format='json')
        await self.websocket.send_json({"type": "logs", "output": "Model response received for revision."})
        return json.loads(response)

    async def run(self, draft_state: dict):
        await self.websocket.send_json({"type": "logs", "output": "Rewriting draft based on feedback..."})
        revision = await self.revise_draft(draft_state)

        if draft_state.get("task").get("verbose"):
            await self.websocket.send_json({"type": "logs", "output": f"Revision notes: {revision.get('revision_notes')}", "agent": "REVISOR"})

        return {"draft": revision.get("draft"),
                "revision_notes": revision.get("revision_notes")}
