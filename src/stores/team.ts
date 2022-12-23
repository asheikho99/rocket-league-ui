import { writable } from "svelte/store";
import type { Player, Team } from "../types";

export type RocketLeagueTeam = {
    team: Team
    players: Player[]
}

export const teams = writable<Team[]>([])
export const homeTeam = writable<RocketLeagueTeam>()
export const awayTeam = writable<RocketLeagueTeam>()