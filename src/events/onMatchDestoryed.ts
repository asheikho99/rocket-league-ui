import { isMatchDestroyed } from "../stores/game"

export const onMatchDestroyed = () => {
    isMatchDestroyed.set(true)
}