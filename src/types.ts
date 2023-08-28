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