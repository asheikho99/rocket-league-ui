import { isMatchCreated } from "../stores/game"

export const onMatchCreated = () => {
    isMatchCreated.set(true)
}