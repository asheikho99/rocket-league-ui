import { Game } from 'enums/game';
import { readonly, writable } from 'svelte/store';

interface ClockStateEvent {
	status: 'STARTED' | 'STOPPED';
}

const clockStatekWritableStore = writable({} as ClockStateEvent);

export const onClockState = (event: string) => {
	switch (event) {
		case Game.CLOCK_STARTED:
			clockStatekWritableStore.set({
				status: 'STARTED',
			});
			break;
		case Game.CLOCK_STOPPED:
			clockStatekWritableStore.set({
				status: 'STOPPED',
			});
			break;
		default:
			console.log(`UNKNOWN CLOCK STATE`, event);
	}
};

export const clockStateStore = readonly(clockStatekWritableStore);
