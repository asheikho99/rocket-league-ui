<script lang="ts">
	import { createWsConnection, destoryWsConnection, wsStore } from '$lib/websocket';
	import { onMount } from 'svelte';

	onMount(() => {
		createWsConnection();
		wsStore.subscribe((values) => {
			console.log(values.websocket);
		});

		return () => destoryWsConnection();
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>