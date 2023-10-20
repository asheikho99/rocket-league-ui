<script lang="ts">
	import { updateStateStore } from 'events/on-update-state';
	import Collapsible from './Collapsible.svelte';
	import { getFormattedTime } from '$lib/utils';

	$: GAME = $updateStateStore.game;
</script>

<Collapsible title="Stadium">
	{GAME.arena}
</Collapsible>

<Collapsible title="Score">
	<div class="grid grid-cols-2 grid-rows-2">
		{#each GAME.teams as team (team.name)}
			<div class="row">
				<div class="col font-semibold">{team.name}</div>
				<div class="col">{team.score}</div>
			</div>
		{/each}
	</div>
</Collapsible>

<Collapsible title="Time">
	<div class="flex flex-row">
		<span
			>{getFormattedTime(GAME.time_seconds)}
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
