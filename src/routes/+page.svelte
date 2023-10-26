<script lang="ts">
	import { onMount } from 'svelte';
	import { createWsConnection, destoryWsConnection, wsStore } from '$lib/websocket';
	import { eventProcessor } from '$lib/event-processor';
	import { websocketHasGame } from '$lib/stores';
	import { updateStateStore } from 'events/on-update-state';
	import Scoreboard from 'components/overlay/scoreboard/Container.svelte';
	import ActivePlayerContainer from 'components/overlay/active-player/Container.svelte';
	import PlayersListContainer from 'components/overlay/players/Container.svelte';

	$: GAME = $updateStateStore.game;
	onMount(() => {
		createWsConnection();
		wsStore.subscribe((values) => {
			if (values.isConnected) eventProcessor(values.websocket);
		});
		return () => destoryWsConnection();
	});
</script>

{#if $websocketHasGame}
	<div class="min-h-screen">
		<Scoreboard />
		<PlayersListContainer />
		{#if GAME.hasTarget}
			<ActivePlayerContainer />
		{/if}
	</div>
{/if}
