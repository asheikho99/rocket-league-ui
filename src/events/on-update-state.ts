import { readonly, writable } from 'svelte/store';
import type { UpdateState } from '../types';

const updateStateWritableStore = writable<UpdateState>({} as UpdateState);

export const onUpdateState = (event: UpdateState) => {
	updateStateWritableStore.set({
		event: event.event,
		game: event.game,
		hasGame: event.hasGame,
		match_guid: event.match_guid,
		players: event.players
	});
};

export const UpdateStateStore = readonly(updateStateWritableStore);
