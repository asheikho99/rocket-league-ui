import { websocketHasGame } from '$lib/shared/stores';
import { readonly, writable } from 'svelte/store';

export interface UpdateStateEvent {
	event: string;
	game: Game;
	hasGame: boolean;
	match_guid: string;
	players: Players;
}

interface Game {
	arena: string;
	ball: BallState;
	hasTarget: boolean;
	hasWinner: boolean;
	isOT: boolean;
	isReplay: boolean;
	target: string;
	teams: Team[];
	time_milliseconds: number;
	time_seconds: number;
	winner: string;
}

interface BallState {
	location: BallLocation;
	speed: number;
	team: number;
}

interface BallLocation {
	X: number;
	Y: number;
	Z: number;
}

interface Team {
	color_primary: string;
	color_secondary: string;
	name: string;
	score: number;
}

interface Player {
	assists: number;
	attacker: string;
	boost: number;
	cartouches: number;
	demos: number;
	goals: number;
	hasCar: boolean;
	id: string;
	isDead: boolean;
	isPowersliding: false;
	isSonic: boolean;
	location: PlayerLocation;
	name: string;
	onGround: boolean;
	onWall: boolean;
	primaryID: number;
	saves: number;
	score: number;
	shortcut: number;
	shots: number;
	speed: number;
	team: number;
	touches: number;
}

interface PlayerLocation {
	X: number;
	Y: number;
	Z: number;
	pitch: number;
	roll: number;
	yaw: number;
}

type Players = Record<string, Player>;

const updateStateWritableStore = writable<UpdateStateEvent>({} as UpdateStateEvent);

export const onUpdateState = (event: UpdateStateEvent) => {
	updateStateWritableStore.set({
		event: event.event,
		game: event.game,
		hasGame: event.hasGame,
		match_guid: event.match_guid,
		players: event.players
	});
	
	websocketHasGame.set(true);
};

export const updateStateStore = readonly(updateStateWritableStore);
