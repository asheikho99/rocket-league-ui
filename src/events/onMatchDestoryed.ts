import { isMatchDestroyed } from "../stores/game"
import type { Game } from '../enums/Game'

export const onMatchDestroyed = (event: Game.MATCH_DESTROYED) => {
    if (!event) return
    isMatchDestroyed.set(true)
}