import { writable, type Writable } from 'svelte/store';
import type { StatFeedEvent } from 'events/on-stat-feed';

export interface StatFeedPastEvent extends StatFeedEvent {
	event_time: string;
}

export const websocketHasGame = writable(false);
export const websocketReplay = writable(false);
export const pastStatfeedEventsStore: Writable<StatFeedPastEvent[]> = writable<StatFeedPastEvent[]>([]);
