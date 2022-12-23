import { Event } from '../enums/Event'
import { replayStatus, isReplay } from '../stores/replay'

export const onReplay = (event: Event.REPLAY_START | Event.REPLAY_WILL_END | Event.REPLAY_END) => {

    if (!event) return
    replayStatus.set(event)

    switch (event) {
        case Event.REPLAY_START:
            isReplay.set(true)
            break
        case Event.REPLAY_WILL_END:
            break
        case Event.REPLAY_END:
            isReplay.set(false)
            break
        default:
            return
    }
}