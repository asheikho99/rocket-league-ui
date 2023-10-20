<script lang="ts">
	import { websocketHasGame } from '$lib/shared/stores';
</script>

{#if !$websocketHasGame}
	<div class="bg-red-500 text-white p-4">
		<h1 class="font-bold text-3xl">Error!</h1>
		<p>Websocket connection not established.</p>
	</div>
{/if}

<div class="min-h-screen flex flex-col bg-gray-100">
	<h1 class="font-bold mb-4 text-3xl p-4">Rocket League UI Debug</h1>
	<slot />
</div>
