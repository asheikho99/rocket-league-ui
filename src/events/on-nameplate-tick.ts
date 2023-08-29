import { readonly, writable } from 'svelte/store';

export interface NameplateTickEvent {
	match_guid: string;
	nameplates: {
		ball: Ball;
	};
}

interface Ball {
	isvisible: boolean;
	position: Position;
}

interface Position {
	depth: number;
	x: number;
	y: number;
}

const nameplateTickWritableStore = writable<NameplateTickEvent>({} as NameplateTickEvent);

export const onNameplateTick = (event: NameplateTickEvent) => {
	nameplateTickWritableStore.set({
		match_guid: event.match_guid,
		nameplates: event.nameplates
	});
};

export const nameplateTickStore = readonly(nameplateTickWritableStore);
