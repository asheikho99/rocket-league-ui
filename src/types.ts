export type Payload = {
    event: string
    data: any
}

export type NameplateTick = {
	match_guid: string;
	nameplates: {
		ball: Ball;
	};
};

type Ball = {
	isvisible: boolean;
	position: Position;
};

type Position = {
	depth: number;
	x: number;
	y: number;
};
