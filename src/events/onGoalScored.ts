import { isGoalScored } from "../stores/game"
import type { Event } from '../enums/Event'

export const onGoalScored = (event: Event.GOAL_SCORED) => {
    if (!event) return
    isGoalScored.set(true)
}