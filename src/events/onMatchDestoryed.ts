import { hasTarget, isFeedEventStarted, isMatchCreated, isMatchDestroyed, isMatchEnded, isMatchInitialized, isOT, isPodiumStart, matchTime, target } from "../stores/game"
import type { Game } from '../enums/Game'
import { isReplay, isReplayEnd, isReplayWillEnd, replayStatus } from "../stores/replay"

export const onMatchDestroyed = (event: Game.MATCH_DESTROYED) => {
    if (!event) return
    isMatchDestroyed.set(true)

    hasTarget.set(false)
    isFeedEventStarted.set(false)
    isMatchCreated.set(false)
    isMatchDestroyed.set(false)
    isMatchEnded.set(false)
    isMatchInitialized.set(false)
    isOT.set(false)
    isPodiumStart.set(false)
    isReplay.set(false)
    isReplayWillEnd.set(false)
    isReplayEnd.set(false)
    matchTime.set(0)
    replayStatus.set('')
    target.set('')
}