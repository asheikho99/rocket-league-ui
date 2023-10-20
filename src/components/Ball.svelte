<script lang="ts">
	import { updateStateStore } from './../events/on-update-state';
	import Collapsible from './Collapsible.svelte';
	$: BALL = $updateStateStore.game.ball;
</script>

<div class="flex flex-col space-y-4">
	<Collapsible title="Location">
		<div class={`flex flex-col space-y-2`}>
			<p>X: {BALL.location.X}</p>
			<p>Y: {BALL.location.Y}</p>
			<p>Z: {BALL.location.Z}</p>
		</div>
	</Collapsible>

	<Collapsible title="Last Hit">
		{#if BALL.team != 255}
			<p>{BALL.team == 0 ? 'Blue Team' : 'Orange'}</p>
		{:else}
			<p>None</p>
		{/if}
	</Collapsible>

	<Collapsible title="Speed">
		<p>{BALL.speed}</p>
	</Collapsible>
</div>
