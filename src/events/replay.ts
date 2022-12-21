import { Event } from '../enums/Event'
import { replayStatus, isReplay } from '../stores/replay'

export const onReplay = (event: string) => {
    
    if(!event) return
    replayStatus.set(event)

    switch (event) {
        case Event.ReplayStart:
            isReplay.set(true)
            break
        case Event.ReplayWillEnd:
            break
        case Event.ReplayEnd:
            isReplay.set(false)
            break
        default:
            console.log(event)
    }
}