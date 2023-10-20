<script lang="ts">
	import { updateStateStore } from 'events/on-update-state';
	import Collapsible from './Collapsible.svelte';

	$: GAME = $updateStateStore.game;
</script>

<Collapsible title="Stadium">
	{GAME.arena}
</Collapsible>

<Collapsible title="Time">
	<div class="flex flex-row">
		<span
			>{`${Math.floor((GAME.time_seconds % 3600) / 60)
				.toString()
				.padStart(2, '0')}:${Math.floor(GAME.time_seconds % 60)
				.toString()
				.padStart(2, '0')}`}
		</span>
	</div>
</Collapsible>

<Collapsible title="Replay">
	{GAME.isReplay}
</Collapsible>

<Collapsible title="Current Target">
	{#if GAME.target}
		{GAME.target}
	{:else}
		<p>No target selected</p>
	{/if}
</Collapsible>

<Collapsible title="Is Overtime">
	{GAME.isOT}
</Collapsible>

<Collapsible title="Winner">
	{#if GAME.hasWinner}
		<p>{GAME.winner}</p>
	{:else}
		<p>To be determined</p>
	{/if}
</Collapsible>