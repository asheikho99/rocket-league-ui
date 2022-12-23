import { isClockStarted } from "../stores/clock"

export const onClockStarted = () => {
    isClockStarted.set(true)
}