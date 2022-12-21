import { writable } from "svelte/store"

export const isClockStarted = writable<boolean>(false)
export const isClockStopped = writable<boolean>(false)