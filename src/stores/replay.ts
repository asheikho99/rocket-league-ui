import { writable } from "svelte/store"

export const isReplay = writable<boolean>(false)
export const replayWillEnd = writable<boolean>(false)
export const replayEnd = writable<boolean>(false)
export const replayStatus = writable<string>('')