import { readonly, writable } from 'svelte/store';

export interface GoalScoredEvent {
	assister: Assister;
	ball_last_touch: BallListTouch;
	goalspeed: number;
	goaltime: number;
	impact_location: ImpactLocation;
	scorer: Scorer;
}

interface Assister {
	id: string;
	name: string;
}

interface BallListTouch {
	player: string;
	speed: number;
}

interface ImpactLocation {
	X: number;
	Y: number;
}

interface Scorer {
	id: string;
	name: string;
	teamnum: number;
}

const goalScoredWritableStore = writable<GoalScoredEvent>({} as GoalScoredEvent);

export const onGoalScored = (event: GoalScoredEvent) => {
	goalScoredWritableStore.set({
		assister: event.assister,
		ball_last_touch: event.ball_last_touch,
		goalspeed: event.goalspeed,
		goaltime: event.goaltime,
		impact_location: event.impact_location,
		scorer: event.scorer
	});
};

export const goalScoredStore = readonly(goalScoredWritableStore);
