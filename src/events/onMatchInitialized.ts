import { isMatchInitialized } from "../stores/game"

export const onMatchInitialzed = () => {
    isMatchInitialized.set(true)
}