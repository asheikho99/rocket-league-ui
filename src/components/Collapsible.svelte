<script lang="ts">
	let isExpanded: boolean = false;
	export let title: string = 'Section title';

	const toggleExpanded = () => {
		isExpanded = !isExpanded;
	}
</script>

<div class="flex flex-col">
	<button
		class="font-semibold text-lg"
		aria-expanded={isExpanded}
		on:click={toggleExpanded}
	>
		<span class="flex flex-row space-x-2 justify-start items-center">
			{#if !isExpanded}
				<svg viewBox="0 0 20 20" fill="none" class="w-4 h-4">
					<path d="M1 10L19 10" stroke="black" stroke-width="2" />
				</svg>
			{:else if isExpanded}
				<svg viewBox="0 0 20 20" fill="none" class="w-4 h-4">
					<path class="vert" d="M10 1V19" stroke="black" stroke-width="2" />
					<path d="M1 10L19 10" stroke="black" stroke-width="2" />
				</svg>
			{/if}
			<span>{title}</span>
		</span></button
	>
	<div class={isExpanded ? 'hidden' : 'block'}>
		<slot />
	</div>
</div>
