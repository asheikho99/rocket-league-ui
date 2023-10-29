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

<div class="min-h-screen bg-red-100">
	<Scoreboard />
	<PlayersList />
	<ActivePlayer />
</div>
