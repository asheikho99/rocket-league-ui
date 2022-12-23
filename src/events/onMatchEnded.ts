import { isMatchEnded } from "../stores/game"
import type { Event } from '../enums/Event'

export const onMatchEnded = (event: Event.MATCH_ENDED) => {
  if (!event) return
  isMatchEnded.set(true)
}