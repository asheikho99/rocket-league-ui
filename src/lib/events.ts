import type { Payload, PayloadData } from "../types"
import { Event } from '../enums/Event'
import { onReplay } from "../events/replay"
import { isGameCreated, isGameInitialized, gameTime, isOT, isPodiumStart, isMatchDestroyed, isMatchEnded, isFeedEventStarted, feedEvent } from "../stores/game"

export const EventProcessor = (messageEvent: Payload) => {
  const event: string = messageEvent?.event
  const data: PayloadData = messageEvent?.data

  switch (event) {
    case Event.MatchCreated:
      isGameCreated.set(true)
      break

    case Event.Initialized:
      isGameInitialized.set(true)
      break

    case Event.UpdateState:
      gameTime.set(data?.game?.time_seconds)
      isOT.set(data?.game.isOT)
      break

    case Event.StatFeedEvent:
      console.log({ event, data })
      isFeedEventStarted.set(true)
      feedEvent.set(JSON.stringify(data))
      break

    case Event.ReplayStart:
    case Event.ReplayWillEnd:
    case Event.ReplayEnd:
      onReplay(event)
      break

    case Event.PodiumStart:
      isPodiumStart.set(true)

    case Event.MatchEnded:
      isMatchEnded.set(true)
      break

    case Event.MatchDestroyed:
      isMatchDestroyed.set(true)
      break

    default:
      return
  }
}