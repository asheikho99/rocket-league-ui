<script lang="ts">
	import Settings from './../../components/Settings.svelte';
	import Ball from './../../components/Ball.svelte';
	import Players from './../../components/Players.svelte';
	import { onMount } from 'svelte';
	import { createWsConnection, destoryWsConnection, wsStore } from '$lib/websocket';
	import { eventProcessor } from '$lib/event-processor';
	import Game from 'components/Game.svelte';
	import Replay from 'components/Replay.svelte';
	import { websocketHasGame } from '$lib/shared/stores';

	const tabs = [
		{ title: 'Game', content: 'Game' },
		{ title: 'Players', content: 'Players' },
		{ title: 'Replay', content: 'Replay' },
		{ title: 'Ball', content: 'Ball' },
		{ title: 'Settings', content: 'Settings' },
	];

	const components: {
		[key: string]: typeof Game | typeof Players | typeof Replay | typeof Ball | typeof Settings;
	} = {
		Game,
		Players,
		Replay,
		Ball,
		Settings,
	};

	let selectedTab: number = 0;

	onMount(() => {
		createWsConnection();
		wsStore.subscribe((values) => {
			if (values.isConnected) eventProcessor(values.websocket);
		});
		return () => destoryWsConnection();
	});
</script>

<div class="flex flex-row overflow-x-scroll justify-start border-b border-b-slate-300">
	{#each tabs as tab, index}
		<button
			tabindex={index}
			class={`disabled:cursor-not-allowed disabled:text-gray-400 hover:cursor-pointer py-2 font-semibold min-w-[100px] hover:text-black ${
				selectedTab == index
					? 'text-black border-b-black border-b-2 disabled:border-none'
					: 'text-gray-600'
			}`}
			on:click={() => {
				selectedTab = index;
			}}
			disabled={!$websocketHasGame}
		>
			{tab.title}
		</button>
	{/each}
</div>

{#if $websocketHasGame}
	<div class="flex flex-col p-4">
		<svelte:component this={components[tabs[selectedTab].content]} />
	</div>
{/if}
