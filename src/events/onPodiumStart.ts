import { isPodiumStart } from "../stores/game"

export const onPodiumStart = () => {
  isPodiumStart.set(true)
}