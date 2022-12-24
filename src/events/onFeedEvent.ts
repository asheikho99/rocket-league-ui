import { latestFeedEvent, isFeedEventStarted } from "../stores/game"
import type { FeedEvent } from "../types"

export const onFeedEvent = (event: FeedEvent) => {
    isFeedEventStarted.set(true)
    latestFeedEvent.set(event)
}