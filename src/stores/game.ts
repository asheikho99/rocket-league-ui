import { writable } from "svelte/store";

export const gameTime = writable<number>(0)
export const hasGame = writable<boolean>(false)
export const hasTarget = writable<boolean>(false)
export const hasWinner = writable<boolean>(false)
export const isGameCreated = writable<boolean>(false)
export const isGameDestroyed = writable<boolean>(false)
export const isGameInitialized = writable<boolean>(false)
export const isGoalScored = writable<boolean>(false)
export const isMatchDestroyed = writable<boolean>(false)
export const isMatchEnded = writable<boolean>(false)
export const isOT = writable<boolean>(false)
export const isPodiumStart = writable<boolean>(false)
export const target =  writable<string>('')
export const winner = writable<string>('')
export const isFeedEventStarted = writable<boolean>(false)
export const feedEvent = writable()