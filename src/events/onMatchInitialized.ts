import { isMatchInitialized } from "../stores/game"
import type { Event } from '../enums/Event'

export const onMatchInitialzed = (event: Event.MATCH_INITIALIZED) => {
    if (!event) return
    isMatchInitialized.set(true)
}