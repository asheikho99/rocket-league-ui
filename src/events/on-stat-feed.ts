import { StatFeed } from 'enums/stat-feed';
import { readonly, writable } from 'svelte/store';

export interface StatFeedEvent {
	event_name: string;
	main_target: Target;
	match_guid: string;
	secondary_target: Target;
	type: string;
}

interface Target {
	id: string;
	name: string;
	team_num: number;
}

const statFeedWritableStore = writable<StatFeedEvent>({} as StatFeedEvent);

export const onStatFeed = (event: StatFeedEvent) => {
	switch (event.type) {
		case StatFeed.AERIAL_GOAL:
		case StatFeed.AERIAL_HIT:
		case StatFeed.ASSIST:
		case StatFeed.BACKWARDS_GOAL:
		case StatFeed.BICYCLE_GOAL:
		case StatFeed.BICYCLE_HIT:
		case StatFeed.BULLET_HIT:
		case StatFeed.CENTER_BALL:
		case StatFeed.CLEAR_BALL:
		case StatFeed.DAMAGE:
		case StatFeed.DEMOLITION:
		case StatFeed.EPIC_SAVE:
		case StatFeed.EXTERMINATION:
		case StatFeed.FIRST_TOUCH:
		case StatFeed.GOAL:
		case StatFeed.HAT_TRICK:
		case StatFeed.HIGH_FIVE:
		case StatFeed.JUGGLE:
		case StatFeed.LONG_GOAL:
		case StatFeed.LOW_FIVE:
		case StatFeed.MVP:
		case StatFeed.OVERTIME_GOAL:
		case StatFeed.PLAYMAKER:
		case StatFeed.POOL_SHOT:
		case StatFeed.SAVE:
		case StatFeed.SAVIOR:
		case StatFeed.SHOT:
		case StatFeed.SHOT_ON_GOAL:
		case StatFeed.SWISH_GOAL:
		case StatFeed.TUTRLE_GOAL:
		case StatFeed.ULTRA_DAMAGE:
		case StatFeed.WIN:
			statFeedWritableStore.set({
				event_name: event.event_name,
				main_target: event.main_target,
				match_guid: event.match_guid,
				secondary_target: event.secondary_target,
				type: event.type,
			});
			break;
		default:
			console.debug('UNKNOWN STAT FEED EVENT', event);
	}
};

export const statFeedStore = readonly(statFeedWritableStore);
