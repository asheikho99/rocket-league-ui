export type Payload = {
	event: string;
	data: any;
};

export type NameplateTick = {
	match_guid: string;
	nameplates: {
		ball: {
			isvisible: boolean;
			position: Position;
		};
	};
};

type Position = {
	depth: number;
	x: number;
	y: number;
};

export type ClockUpdatedSeconds = {
	match_guid: string;
};

export type BallHit = {
	ball: {
		location: {
			X: number;
			Y: number;
			Z: number;
		};
		post_hit_speed: number;
		pre_hit_speed: number;
	};
	match_guid: string;
	player: {
		id: string;
		name: string;
	};
};

export type UpdateState = {
	event: string;
	game: Game;
	hasGame: boolean;
	match_guid: string;
	players: Players;
};

type Game = {
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
};

type Team = {
	color_primary: string;
	color_secondary: string;
	name: string;
	score: number;
};

type BallState = {
	location: {
		X: number;
		Y: number;
		Z: number;
	};
	speed: number;
	team: number;
};

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
