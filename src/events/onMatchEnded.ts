import { isMatchEnded } from "../stores/game"

export const onMatchEnded = () => {
  isMatchEnded.set(true)
}