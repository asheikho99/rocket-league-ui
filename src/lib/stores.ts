import { writable, type Writable } from 'svelte/store';
import type { StatFeedEvent, Target } from 'events/on-stat-feed';

export interface StatFeedPastEvent extends StatFeedEvent {
	event_time: string;
}

export const websocketHasGame = writable(false);
export const websocketReplay = writable(false);
export const pastStatfeedEventsStore: Writable<StatFeedPastEvent[]> = writable<StatFeedPastEvent[]>(
	[],
);
export const recentStatFeedStore: Writable<StatFeedPastEvent[]> = writable<StatFeedPastEvent[]>([]);

interface StatEvent {
	event_name: string;
	main_target: Target;
	match_guid: string;
	secondary_target: Target;
	type: string;
}

interface PlayerStatEvent {
	[key: string]: StatEvent[];
}

export const playerStatEventStore = writable<PlayerStatEvent[]>([]);
