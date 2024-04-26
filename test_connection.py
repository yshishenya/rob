import asyncio
import websockets

async def test_websocket():
    uri = "ws://49.12.122.181:8033/ws"
    headers = {"Authorization": "Bearer fbee1a14d51492b5020c9a8bd8f1f54a6a81723900cd1d44"}
    async with websockets.connect(uri, extra_headers=headers) as websocket:
        greeting = await websocket.recv()
        print(f"Received: {greeting}")

asyncio.run(test_websocket())
