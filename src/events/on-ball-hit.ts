import { readonly, writable } from 'svelte/store';
import type { BallHit } from '../types';

const ballHitkWritableStore = writable<BallHit>({} as BallHit);

export const onBallHit = (event: BallHit) => {
	ballHitkWritableStore.set({
		ball: event.ball,
		match_guid: event.match_guid,
		player: event.player
	});
};

export const ballHitStore = readonly(ballHitkWritableStore);
