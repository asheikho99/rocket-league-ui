import { readonly, writable } from 'svelte/store';

export interface SosVersionEvent {
	version: string;
}

const sosVersionWritableStore = writable<SosVersionEvent>({} as SosVersionEvent);

export const onSosVersion = (sosVersion: SosVersionEvent) => {
	sosVersionWritableStore.set({ version: sosVersion.version });
};

export const sosVersionStore = readonly(sosVersionWritableStore);
