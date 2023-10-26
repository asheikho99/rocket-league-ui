<script lang="ts">
	import Collapsible from './Collapsible.svelte';
	import { pastStatfeedEventsStore } from '$lib/stores';
</script>

{#each $pastStatfeedEventsStore as event}
	{#if event.event_name != undefined}
		<Collapsible
			title={`${event.event_name} @ ${event.event_time}`}
		>
			{JSON.stringify(event)}
		</Collapsible>
	{/if}
{/each}
