import { Game } from 'enums/game';
import { readonly, writable } from 'svelte/store';

export interface RoundEvent {
	state: 'INITIALIZED' | 'PRE_COUNTDOWN_BEGIN' | 'POST_COUNTDOWN_BEGIN' | 'ROUNDED_STARTED_GO';
}

const roundStateWritableStore = writable<RoundEvent>({} as RoundEvent);

export const onRoundState = (event: string) => {
	switch (event) {
		case Game.INITIALIZED:
			roundStateWritableStore.set({ state: 'INITIALIZED' });
			break;
		case Game.PRE_COUNTDOWN_BEGIN:
			roundStateWritableStore.set({ state: 'PRE_COUNTDOWN_BEGIN' });
			break;
		case Game.POST_COUNTDOWN_BEGIN:
			roundStateWritableStore.set({ state: 'POST_COUNTDOWN_BEGIN' });
			break;
		case Game.ROUNDED_STARTED_GO:
			roundStateWritableStore.set({ state: 'ROUNDED_STARTED_GO' });
			break;
		default:
			console.log(`UNKNOWN ROUND STATE`, event);
	}
};

export const roundStateStore = readonly(roundStateWritableStore);
