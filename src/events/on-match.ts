import { Game } from 'enums/game';
import { readonly, writable } from 'svelte/store';
import { isPodiumWritableStore } from './on-podium';
import { websocketHasGame } from '$lib/shared/stores';

export interface MatchEvent {
	status: 'CREATED' | 'ENDED' | 'DESTROYED';
}

const matchWritableStore = writable<MatchEvent>({} as MatchEvent);

export const onMatch = (event: string) => {
	switch (event) {
		case Game.MATCH_CREATED:
			matchWritableStore.set({
				status: 'CREATED',
			});
			isPodiumWritableStore.set(false);
			break;
		case Game.MATCH_ENDED:
			matchWritableStore.set({
				status: 'ENDED',
			});
			break;
		case Game.MATCH_DESTROYED:
			matchWritableStore.set({
				status: 'DESTROYED',
			});
			isPodiumWritableStore.set(false);
			websocketHasGame.set(false);
			break;
		default:
			console.debug(`UNKNOWN MATCH STATE`, event);
	}
};

export const matchStore = readonly(matchWritableStore);
