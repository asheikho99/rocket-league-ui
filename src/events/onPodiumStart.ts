import { isPodiumStart } from "../stores/game"
import type { Game } from '../enums/Game'

export const onPodiumStart = (event: Game.PODIUM_START) => {
  if (!event) return
  isPodiumStart.set(true)
}