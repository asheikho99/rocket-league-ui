import { payload } from "../stores/websocket"

export const createWebSocket = () => {
    const websocket = new WebSocket('ws://localhost:49122')
    websocket.onmessage = (message: MessageEvent) => { payload.set(JSON.parse(message?.data))  }
}
