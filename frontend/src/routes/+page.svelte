<script lang="ts">
	import { onMount } from 'svelte';
	import { createWsConnection, destoryWsConnection, wsStore } from '$lib/websocket';
	import { eventProcessor } from '$lib/event-processor';
	import { ActivePlayer, PlayersList, Scoreboard } from '$lib/overlay';

	onMount(() => {
		createWsConnection();
		wsStore.subscribe((values) => {
			if (values.isConnected) eventProcessor(values.websocket);
		});
		return () => destoryWsConnection();
	});
</script>

<div class="min-h-screen flex flex-col">
	<Scoreboard />
	<PlayersList />
	<ActivePlayer />
</div>
