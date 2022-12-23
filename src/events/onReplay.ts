import { Game } from '../enums/Game'
import { replayStatus, isReplay } from '../stores/replay'

export const onReplay = (event: Game.REPLAY_START | Game.REPLAY_WILL_END | Game.REPLAY_END) => {

    if (!event) return
    replayStatus.set(event)

    switch (event) {
        case Game.REPLAY_START:
            isReplay.set(true)
            break
        case Game.REPLAY_WILL_END:
            break
        case Game.REPLAY_END:
            isReplay.set(false)
            break
        default:
            return
    }
}