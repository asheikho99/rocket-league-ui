<script lang="ts">
	import { websocketReplay } from '$lib/shared/stores';
	import { replayStore } from 'events/on-replay';
	$: REPLAY = $replayStore;
</script>

{#if $websocketReplay}
	<p>{REPLAY.status}</p>
{:else}
	<p>No replay in progress</p>
{/if}
