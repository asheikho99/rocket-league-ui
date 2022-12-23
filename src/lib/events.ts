import type { FeedEvent, Payload, UpdateState } from '../types'
import { Event } from '../enums/Event'
import { onReplay } from '../events/onReplay'
import { onTeams } from '../events/onTeams'
import { onFeedEvent } from '../events/onFeedEvent'
import { onGoalScored } from '../events/onGoalScored'
import { onMatchDestroyed } from '../events/onMatchDestoryed'
import { onMatchEnded } from '../events/onMatchEnded'
import { onPodiumStart } from '../events/onPodiumStart'
import { onUpdateState } from '../events/onUpdateState'
import { onMatchInitialzed } from '../events/onMatchInitialized'
import { onMatchCreated } from '../events/onMatchCreated'

export const EventProcessor = (messageEvent: Payload) => {
  const event: string = messageEvent?.event
  const data: UpdateState | FeedEvent = messageEvent?.data

  switch (event) {
    case Event.MATCH_CREATED:
      onMatchCreated(event)
      break

    case Event.MATCH_INITIALIZED:
      onMatchInitialzed(event)
      break

    case Event.UPDATE_STATE:
      onUpdateState((data as UpdateState)?.game)
      onTeams((data as UpdateState)?.game?.teams)
      break

    case Event.STATFEED_EVENT:
      onFeedEvent((data as FeedEvent))
      break

    case Event.GOAL_SCORED:
      onGoalScored(event)
      break

    case Event.REPLAY_START:
    case Event.REPLAY_WILL_END:
    case Event.REPLAY_END:
      onReplay(event)
      break

    case Event.PODIUM_START:
      onPodiumStart(event)
      break

    case Event.MATCH_ENDED:
      onMatchEnded(event)
      break

    case Event.MATCH_DESTROYED:
      onMatchDestroyed(event)
      break

    default:
      return
  }
}