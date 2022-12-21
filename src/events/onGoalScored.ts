import { isGoalScored } from "../stores/game"

export const onGoalScored = () => {
    isGoalScored.set(true)
}