import { writable } from 'svelte/store';
export const websocketHasGame = writable(false);
export const websocketReplay = writable(false);
