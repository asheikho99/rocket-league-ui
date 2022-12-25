<script lang="ts">
  import { hasTarget, target } from '../../../stores/game'
</script>

<div class="flex flex-row justify-center items-center bg-home-secondary flex-1 py-2">
  {#if $hasTarget}
    <p>{JSON.parse(JSON.stringify($target)).name}</p>
  {/if}
</div>
