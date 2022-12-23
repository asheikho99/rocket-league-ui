import { isMatchDestroyed } from "../stores/game"
import type { Event } from '../enums/Event'

export const onMatchDestroyed = (event: Event.MATCH_DESTROYED) => {
    if (!event) return
    isMatchDestroyed.set(true)
}