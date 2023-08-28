import { Game } from 'enums/game';
import { readonly, writable } from 'svelte/store';

const isMatchWritableStore = writable<boolean>(false);

export const onMatch = (event: string) => {
	switch (event) {
		case Game.MATCH_CREATED:
			isMatchWritableStore.set(true);
			break;
		case Game.MATCH_DESTROYED:
			isMatchWritableStore.set(false);
			break;
		default:
			console.debug(`UNKNOWN MATCH STATE`, event);
	}
};

export const isMatch = readonly(isMatchWritableStore);
