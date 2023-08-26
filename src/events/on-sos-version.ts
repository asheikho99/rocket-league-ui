import { readonly, writable } from 'svelte/store';

const sosVersionWritableStore = writable<{ version: string }>({ version: '' });

export const onSosVersion = (sosVersion: string) => {
	sosVersionWritableStore.set({ version: sosVersion });
};

export const sosVersionStore = readonly(sosVersionWritableStore);
