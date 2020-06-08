<template>
<div class="events">
    <h1 class="display-3 hidden-xs-only ma-6">Events</h1>
      <h3 class="display-2 hidden-sm-and-up ma-6">Events</h3>
      <v-divider class="primary"></v-divider>
      
    <h2 class=" hidden-xs-only ma-6 text-left primary--text">Upcoming Events</h2>
      <h4 class="hidden-sm-and-up ma-6 text-underline primary--text mobile-heading">Upcoming Events</h4>
      <v-div v-for="upcomingEvent in events.upcomingEvents" :key="upcomingEvent">
      <event-template
      :date="upcomingEvent.date"
      :role="upcomingEvent.role"
      :title="upcomingEvent.title"
      :host="upcomingEvent.host"
      :body="upcomingEvent.body"
      :link="upcomingEvent.link"></event-template>
      </v-div>
    <h2 class=" hidden-xs-only ma-6 text-left primary--text">Prior Events</h2>
      <h4 class="hidden-sm-and-up ma-6 primary--text mobile-heading">Prior Events</h4>
      <v-div v-for="priorEvent in events.priorEvents" :key="priorEvent">
      <event-template
      :date="priorEvent.date"
      :role="priorEvent.role"
      :title="priorEvent.title"
      :host="priorEvent.host"
      :body="priorEvent.body"
      :link="priorEvent.link"></event-template>
      </v-div>
      
      
  </div>    
</template>
<script>
import EventTemplate from '@/components/EventTemplate'
export default {
    data(){
      return {
      }
    },
    computed: {
      events(){
        return this.$store.state.events;
      }
    },
    components: {
      'event-template': EventTemplate
    }
}
</script>
<style scoped>
.mobile-heading {
  font-size: 1.5rem;
}
.events {
        animation: fadeInAnimation ease 1s;
        
    }
    @keyframes fadeInAnimation{
        0% {
            opacity: 0;
            transform: translateY(1rem);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

</style>