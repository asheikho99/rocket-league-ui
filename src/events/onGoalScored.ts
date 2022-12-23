import { isGoalScored } from "../stores/game"
import type { Game } from '../enums/Game'

export const onGoalScored = (event: Game.GOAL_SCORED) => {
    if (!event) return
    isGoalScored.set(true)
}