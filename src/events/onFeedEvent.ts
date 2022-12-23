import { isFeedEventStarted } from "../stores/game"
import type { FeedEvent } from "../types"

export const onFeedEvent = (event: FeedEvent) => {
    isFeedEventStarted.set(true)
}