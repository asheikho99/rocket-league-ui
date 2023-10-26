import { Game } from 'enums/game';
import { readonly, writable } from 'svelte/store';

// exported to be accessible to onMatch event handler
export const isPodiumWritableStore = writable<boolean>(false);

export const onPodium = (event: string) => {
	switch (event) {
		case Game.PODIUM_START:
			isPodiumWritableStore.set(true);
			break;
		default:
			console.debug(`UNKNOWN PODUIM STATE`, event);
	}
};

export const isPodiumStore = readonly(isPodiumWritableStore);
