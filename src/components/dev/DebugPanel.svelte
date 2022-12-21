<script>
  import {
    feedEvent,
    gameTime,
    hasTarget,
    isFeedEventStarted,
    isMatchCreated,
    isMatchInitialized,
    isOT,
    target,
  } from '../../stores/game'
  import {
    isReplay,
    replayEnd,
    replayStatus,
    replayWillEnd,
  } from '../../stores/replay'
</script>

<div class="absolute z-50 bg-black bg-opacity-75 text-white flex flex-col h-full w-full text-3xl">
  <p>gameCreated: {$isMatchCreated}</p>
  <p>gameInitialized: {$isMatchInitialized}</p>
  <p>gameTime: {$gameTime}</p>
  <p>isOT: {$isOT}</p>
  <p>isReplay: {$isReplay}</p>
  <p>replayWillEnd: {$replayWillEnd}</p>
  <p>replayEnd: {$replayEnd}</p>
  <p>replayStatus: {$replayStatus}</p>
  <p>hasTarget: {$hasTarget}</p>
  <p>target: {$target}</p>
  <p>isFeedEventStarted: {$isFeedEventStarted}</p>
  <p>feedEvent: {$feedEvent}</p>
</div>
