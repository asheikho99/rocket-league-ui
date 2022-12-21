import { gameTime, isOT } from "../stores/game"
import type { Game } from "../types"

export const onUpdateState = (game: Game) => {
    gameTime.set(game.time_seconds)
    isOT.set(game?.isOT)
}