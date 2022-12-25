<script lang="ts">
  import { hasTarget } from "../../stores/game"
  import Boost from "./Boost/Boost.svelte"
  import Title from "./Title/Title.svelte"
</script>

{#if $hasTarget}
  <div class='absolute flex flex-col top-[80%] left-[1%] text-2xl font-semibold text-white bg-theme-primary w-full max-w-xl'>
      <Title />
      <Boost />
  </div>
{/if}