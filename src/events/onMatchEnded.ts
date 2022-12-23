import { isMatchEnded } from "../stores/game"
import type { Game } from '../enums/Game'

export const onMatchEnded = (event: Game.MATCH_ENDED) => {
  if (!event) return
  isMatchEnded.set(true)
}