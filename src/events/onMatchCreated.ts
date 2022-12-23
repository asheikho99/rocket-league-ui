import { isMatchCreated } from "../stores/game"
import type { Event } from '../enums/Event'

export const onMatchCreated = (event: Event.MATCH_CREATED) => {
    if (!event) return
    isMatchCreated.set(true)
}