import { isClockStopped } from "../stores/clock"

export const onClockStopped = () => {
  isClockStopped.set(true)
}