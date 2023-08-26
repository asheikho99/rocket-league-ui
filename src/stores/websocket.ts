import { writable, type Writable } from 'svelte/store';

interface WsStore {
	websocket: undefined | WebSocket;
	isConnected: boolean;
	isDebug: boolean;
}

export const wsStore: Writable<WsStore> = writable({
	websocket: undefined,
	isConnected: false,
	isDebug: false
});
