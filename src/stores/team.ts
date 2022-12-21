import { writable } from "svelte/store";
import type { Team } from "../types";

export const teams = writable<Team[]>([])

export const homeTeam = writable<Team>({
    colorPrimary: "",
    colorSecondary: "",
    name: "",
    score: 0
})

export const awayTeam = writable<Team>({
    colorPrimary: "",
    colorSecondary: "",
    name: "",
    score: 0
})