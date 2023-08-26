import { SOS } from 'enums/sos';
import { onSosVersion } from 'events/on-sos-version';

export const eventProcessor = (websocket: WebSocket | undefined) => {
	if (websocket) {
		websocket.onmessage = (messageEvent: MessageEvent) => {
			const payload: Payload = JSON.parse(messageEvent.data);

			const event: string = payload.event;
			const data = payload.data;

			switch (event) {
				case SOS.VERSION:
					onSosVersion(data);
					break;
				default:
					console.debug('UNKNOWN EVENT', event);
			}
		};
	}
};
