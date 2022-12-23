import { Game } from '../enums/Game'
import { isReplay, isReplayEnd, isReplayWillEnd } from '../stores/replay'

export const onReplay = (event: Game.REPLAY_START | Game.REPLAY_WILL_END | Game.REPLAY_END) => {
    if (!event) return

    switch (event) {
        case Game.REPLAY_START:
            isReplayEnd.set(false)
            isReplay.set(true)
            break

        case Game.REPLAY_WILL_END:
            isReplayWillEnd.set(true)
            break

        case Game.REPLAY_END:
            isReplay.set(false)
            isReplayWillEnd.set(false)
            isReplayEnd.set(true)
            break

        default:
            return
    }
}