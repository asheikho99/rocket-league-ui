import { Game } from 'enums/game';
import { readonly, writable } from 'svelte/store';

const isReplayWritableStore = writable<boolean>(false);

export const onReplay = (event: string) => {
	switch (event) {
		case Game.REPLAY_START:
		case Game.REPLAY_WILL_END:
			isReplayWritableStore.set(true);
			break;
		case Game.REPLAY_END:
			isReplayWritableStore.set(false);
			break;
		default:
			console.debug(`UNKNOWN REPLAY EVENT:`, event);
	}
};

export const isReplay = readonly(isReplayWritableStore);
