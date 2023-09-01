<script lang="ts">
	import Settings from './../../components/Settings.svelte';
	import Ball from './../../components/Ball.svelte';
	import Players from './../../components/Players.svelte';
	import { onMount } from 'svelte';
	import { createWsConnection, destoryWsConnection, wsStore } from '$lib/websocket';
	import { eventProcessor } from '$lib/event-processor';
	import Game from 'components/Game.svelte';

	const tabs = [
		{ title: 'Game', content: 'Game' },
		{ title: 'Players', content: 'Players' },
		{ title: 'Ball', content: 'Ball' },
		{ title: 'Settings', content: 'Settings' },
	];

	const components: {
		[key: string]: typeof Game | typeof Players | typeof Ball | typeof Settings;
	} = {
		Game,
		Players,
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
			class={`hover:cursor-pointer py-2 font-semibold min-w-[100px] hover:text-black ${
				selectedTab == index ? 'text-black border-b-black border-b-2' : 'text-gray-600'
			}`}
			on:click={() => {
				selectedTab = index;
			}}
		>
			{tab.title}
		</button>
	{/each}
</div>

<div class="flex flex-col p-4">
	<svelte:component this={components[tabs[selectedTab].content]} />
</div>
