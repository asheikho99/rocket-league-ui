import { writable } from "svelte/store"

export const isPreCountdownBegin = writable<boolean>(false)
export const isPostCountdownBegin = writable<boolean>(false)