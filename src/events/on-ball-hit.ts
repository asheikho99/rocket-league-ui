import { readonly, writable } from 'svelte/store';

export interface BallHitEvent {
	ball: Ball;
	match_guid: string;
	player: Player;
}

interface Ball {
	location: {
		X: number;
		Y: number;
		Z: number;
	};
	post_hit_speed: number;
	pre_hit_speed: number;
}

interface Player {
	id: string;
	name: string;
}

const ballHitWritableStore = writable<BallHitEvent>({} as BallHitEvent);

export const onBallHit = (event: BallHitEvent) => {
	ballHitWritableStore.set({
		ball: event.ball,
		match_guid: event.match_guid,
		player: event.player
	});
};

export const ballHitStore = readonly(ballHitWritableStore);
