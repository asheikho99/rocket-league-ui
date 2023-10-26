import { readonly, writable, type Writable } from 'svelte/store';

interface WsStore {
	websocket: undefined | WebSocket;
	isConnected: boolean;
	isDebug?: boolean;
}

export const wsWritableStore: Writable<WsStore> = writable({
	websocket: undefined,
	isConnected: false,
	isDebug: false
});

export const createWsConnection = () => {
	try {
		wsWritableStore.set({
			websocket: new WebSocket('ws://localhost:49122'),
			isConnected: true,
			isDebug: false
		});
		console.log(`Websocket connection initiated`)
	} catch (err) {
		console.error(err);
	}
};

export const destoryWsConnection = () => {
	try {
		wsStore.subscribe((values) =>
			values.websocket?.close(1001, 'CONNECTION FORCIBLY CLOSED BY ROOT PAGE UNMOUNT')
		);
		wsWritableStore.set({
			websocket: undefined,
			isConnected: false
		});
		console.log(`Websocket connection destroyed`)
	} catch (err) {
		console.error(err);
	}
};

export const wsStore = readonly(wsWritableStore);
