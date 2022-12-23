import type { FeedEvent, Payload, UpdateState } from '../types'
import { Game } from '../enums/Game'
import { onReplay } from '../events/onReplay'
import { onFeedEvent } from '../events/onFeedEvent'
import { onGoalScored } from '../events/onGoalScored'
import { onMatchDestroyed } from '../events/onMatchDestoryed'
import { onMatchEnded } from '../events/onMatchEnded'
import { onPodiumStart } from '../events/onPodiumStart'
import { onUpdateState } from '../events/onUpdateState'
import { onMatchInitialzed } from '../events/onMatchInitialized'
import { onMatchCreated } from '../events/onMatchCreated'
import { onSosVersion } from '../events/onSosVersion'

export const EventProcessor = (messageEvent: Payload) => {

  const event: string = messageEvent?.event
  const data: UpdateState | FeedEvent | string = messageEvent?.data

  switch (event) {
    case Game.VERSION:
      onSosVersion(data as string)
      break

    case Game.MATCH_CREATED:
      onMatchCreated(event)
      break

    case Game.MATCH_INITIALIZED:
      onMatchInitialzed(event)
      break

    case Game.UPDATE_STATE:
      onUpdateState((data as UpdateState))
      break

    case Game.STATFEED_EVENT:
      onFeedEvent((data as FeedEvent))
      break

    case Game.GOAL_SCORED:
      onGoalScored(event)
      break

    case Game.REPLAY_START:
    case Game.REPLAY_WILL_END:
    case Game.REPLAY_END:
      onReplay(event)
      break

    case Game.PODIUM_START:
      onPodiumStart(event)
      break

    case Game.MATCH_ENDED:
      onMatchEnded(event)
      break

    case Game.MATCH_DESTROYED:
      onMatchDestroyed(event)
      break

    default:
      return
  }
}
