import { Game } from 'enums/game';
import { readonly, writable } from 'svelte/store';
import { isPodiumWritableStore } from './on-podium';
import { pastStatfeedEventsStore, websocketHasGame } from '$lib/stores';
import type { StatFeedEvent } from './on-stat-feed';

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
			pastStatfeedEventsStore.set([]);
			break;
		default:
			console.debug(`UNKNOWN MATCH STATE`, event);
	}
};

export const matchStore = readonly(matchWritableStore);
