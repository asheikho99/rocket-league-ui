<script lang="ts">
  import { payload } from './stores/websocket'
  import { createWebSocket } from './lib/websocket'
  import { EventProcessor } from './lib/events'
  import './app.css'

  createWebSocket()
  $: EventProcessor($payload)
</script>

<main />
