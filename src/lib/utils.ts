import { updateStateStore } from 'events/on-update-state';
import { get } from 'svelte/store';

export function getFormattedTime(seconds: number) {
	return convertToArabic(
		`${Math.floor((seconds % 3600) / 60)
			.toString()
			.padStart(2, '0')}:${Math.floor(seconds % 60)}`,
	);
}

export function getMinutes(seconds: number) {
	return convertToArabic(`${Math.floor((seconds % 3600) / 60).toString()}`);
}

export function getSeconds(seconds: number) {
	return `${Math.floor(seconds % 60)}`
		.toString()
		.padStart(2, '0')
		.replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[parseInt(d)]);
}

export function convertToArabic(number: string) {
	return number.replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[parseInt(d)]);
}

export function getPlayerTeamNumber(playerName: string): number | null {
	const players = get(updateStateStore).players;
	for (const key in players) {
	  if (players[key].name === playerName) {
		return players[key].team;
	  }
	}
	return null; // return null if no matching player is found
  }
  