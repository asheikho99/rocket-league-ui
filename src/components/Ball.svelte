<script lang="ts">
	import { updateStateStore } from './../events/on-update-state';
	$: BALL = $updateStateStore.game.ball;
</script>

<div class="flex flex-col space-y-4">
	<div class="flex flex-col">
		<p class="font-semibold text-lg">Location</p>
		<div class="flex flex-col space-y-2">
			<p>X: {BALL.location.X}</p>
			<p>Y: {BALL.location.Y}</p>
			<p>Z: {BALL.location.Z}</p>
		</div>
	</div>

	<div class="flex flex-col">
		<p class="font-semibold text-lg">Last Hit</p>
		<p>{BALL.team == 0 ? 'Blue Team' : 'Orange'}</p>
	</div>

	<div class="flex flex-col">
		<p class="font-semibold text-lg">Speed</p>
		<p>{BALL.speed}</p>
	</div>
</div>
