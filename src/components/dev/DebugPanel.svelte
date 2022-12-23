<script>
  import { isPodiumStart } from './../../stores/game'
  import {
    feedEvent,
    matchTime,
    hasTarget,
    isFeedEventStarted,
    isMatchCreated,
    isMatchInitialized,
    isOT,
    target,
    isMatchDestroyed,
    isMatchEnded,
  } from '../../stores/game'
  import {
    isReplay,
    isReplayWillEnd,
    isReplayEnd,
    replayStatus,
  } from '../../stores/replay'
</script>

<div
  class="absolute z-50 bg-black bg-opacity-75 text-white flex flex-col h-full w-full text-3xl"
>
  <p>matchCreated: {$isMatchCreated}</p>
  <p>matchInitialized: {$isMatchInitialized}</p>
  <p>matchTime: {$matchTime}</p>
  <p>isOT: {$isOT}</p>
  <p>isReplay: {$isReplay}</p>
  <p>replayWillEnd: {$isReplayWillEnd}</p>
  <p>replayEnd: {$isReplayEnd}</p>
  <p>replayStatus: {$replayStatus}</p>
  <p>hasTarget: {$hasTarget}</p>
  <p>target: {$target}</p>
  <p>isPodium started {$isPodiumStart}</p>
  <p>isMatchEnded: {$isMatchEnded}</p>
  <p>isMatchDestroyed {$isMatchDestroyed}</p>
  <p>isFeedEventStarted: {$isFeedEventStarted}</p>
  <p>Latest Feed Event: {$feedEvent}</p>
</div>
