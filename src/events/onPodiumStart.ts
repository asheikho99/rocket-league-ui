import { isPodiumStart } from "../stores/game"
import type { Event } from '../enums/Event'

export const onPodiumStart = (event: Event.PODIUM_START) => {
  if (!event) return
  isPodiumStart.set(true)
}