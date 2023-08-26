import { readonly, writable } from 'svelte/store';
import type { NameplateTick } from '../types';

const nameplateTickWritableStore = writable<NameplateTick>({} as NameplateTick);

export const onNameplateTick = (event: NameplateTick) => {
	nameplateTickWritableStore.set({
		match_guid: event.match_guid,
		nameplates: event.nameplates
	});
};

export const nameplateTickStore = readonly(nameplateTickWritableStore);
