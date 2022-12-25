<script lang="ts">
  import { hasTarget, target } from '../../../stores/game'
</script>

{#if $hasTarget}
  <span class='absolute z-10 pl-4 transition-all'>{JSON.parse(JSON.stringify($target))?.boost}</span>
{/if}
