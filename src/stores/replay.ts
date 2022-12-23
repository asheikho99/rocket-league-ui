import { writable } from "svelte/store"

export const isReplay = writable<boolean>(false)
export const isReplayWillEnd = writable<boolean>(false)
export const isReplayEnd = writable<boolean>(false)
export const replayStatus = writable<string>('')