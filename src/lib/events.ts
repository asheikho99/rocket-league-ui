import type { BallHit, FeedEvent, Payload, UpdateState } from '../types'
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
import { onBallHit } from '../events/onBallHit'
import { onPreCoundownBegin } from '../events/onPreCountdownBegin'
import { onPostCountdownBegin } from '../events/onPostCountdownBegin'
import { onRoundStartedGo } from '../events/onRoundStartedGo'
import { onClockStarted } from '../events/onClockStarted'
import { onClockStopped } from '../events/onClockStopped'
import { onClockUpdatedSeconds } from '../events/onClockUpdatedSeconds'

export const EventProcessor = (messageEvent: Payload) => {

  const event: string = messageEvent?.event
  const data: UpdateState | FeedEvent | BallHit | string = messageEvent?.data

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

    case Game.PRE_COUNTDOWN_BEGIN:
      onPreCoundownBegin()
      break

    case Game.POST_COUNTDOWN_BEGIN:
      onPostCountdownBegin()
      break

    case Game.ROUND_STARTED_GO:
      onRoundStartedGo()
      break

    case Game.CLOCK_STARTED:
      onClockStarted()
      break

    case Game.CLOCK_STOPPED:
      onClockStopped()
      break

    case Game.CLOCK_UPDATED_SECONDS:
      onClockUpdatedSeconds()
      break

    case Game.UPDATE_STATE:
      onUpdateState((data as UpdateState))
      break

    case Game.STATFEED_EVENT:
      onFeedEvent((data as FeedEvent))
      break

    case Game.BALL_HIT:
      onBallHit(data as BallHit)
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
      console.log(event)
  }
}

