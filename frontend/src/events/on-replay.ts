import { Game } from 'enums/game';
import { readonly, writable } from 'svelte/store';

interface Replay {
	isReplay: boolean;
	status: string;
}

const isReplayWritableStore = writable<Replay>({} as Replay);

export const onReplay = (event: string) => {
	switch (event) {
		case Game.REPLAY_START:
		case Game.REPLAY_WILL_END:
			isReplayWritableStore.set({
				isReplay: true,
				status: event.toUpperCase(),
			});
			break;
		case Game.REPLAY_END:
			isReplayWritableStore.set({
				isReplay: false,
				status: event.toUpperCase(),
			});
			break;
		default:
			console.debug(`UNKNOWN REPLAY EVENT:`, event);
	}
};

export const replayStore = readonly(isReplayWritableStore);
