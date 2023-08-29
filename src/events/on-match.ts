import { Game } from 'enums/game';
import { readonly, writable } from 'svelte/store';

export interface MatchEvent {
	status: 'CREATED' | 'ENDED' | 'DESTROYED';
}

const matchWritableStore = writable<MatchEvent>({} as MatchEvent);

export const onMatch = (event: string) => {
	switch (event) {
		case Game.MATCH_CREATED:
			matchWritableStore.set({
				status: 'CREATED'
			});
			break;
		case Game.MATCH_ENDED:
			matchWritableStore.set({
				status: 'ENDED'
			});
			break;
		case Game.MATCH_DESTROYED:
			matchWritableStore.set({
				status: 'DESTROYED'
			});
			break;
		default:
			console.debug(`UNKNOWN MATCH STATE`, event);
	}
};

export const matchStore = readonly(matchWritableStore);
