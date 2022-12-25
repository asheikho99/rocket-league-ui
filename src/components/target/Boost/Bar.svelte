<script>
  import { hasTarget, target } from '../../../stores/game'
</script>

{#if $hasTarget}
  <div class="relative z-5 bg-home-primary py-5 transition-all" style={`width: ${JSON.parse(JSON.stringify($target))?.boost}%;`} >
    <slot />
  </div>
{/if}
