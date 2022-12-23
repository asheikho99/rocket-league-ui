import { isMatchCreated } from "../stores/game"
import type { Game } from '../enums/Game'

export const onMatchCreated = (event: Game.MATCH_CREATED) => {
    if (!event) return
    isMatchCreated.set(true)
}