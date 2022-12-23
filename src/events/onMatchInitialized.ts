import { isMatchInitialized } from "../stores/game"
import type { Game } from '../enums/Game'

export const onMatchInitialzed = (event: Game.MATCH_INITIALIZED) => {
    if (!event) return
    isMatchInitialized.set(true)
}