<template>
<div class="events">
    <h1 class="display-3 hidden-xs-only ma-6">Events</h1>
      <h3 class="display-2 hidden-sm-and-up">Events</h3>
      <event-template></event-template>
  </div>    
</template>
<script>
import EventTemplate from '@/components/EventTemplate'
export default {
    components: {
      'event-template': EventTemplate
    }
}
</script>
<style scoped>

</style>