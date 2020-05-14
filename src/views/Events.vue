<template>
<div class="events">
    <h1 class="display-3 hidden-xs-only ma-6">Events</h1>
      <h3 class="display-2 hidden-sm-and-up ma-6">Events</h3>
      
    <h2 class=" hidden-xs-only ma-6 text-left primary--text">Upcoming Events</h2>
      <h4 class="hidden-sm-and-up ma-6 text-underline primary--text">Upcoming Events</h4>
      <v-div v-for="upcomingEvent in upcomingEvents" :key="upcomingEvent">
      <event-template
      :date="upcomingEvent.date"
      :role="upcomingEvent.role"
      :title="upcomingEvent.title"
      :body="upcomingEvent.body"
      :link="upcomingEvent.link"></event-template>
      </v-div>
    <h2 class=" hidden-xs-only ma-6 text-left primary--text">Prior Events</h2>
      <h4 class="hidden-sm-and-up ma-6 primary--text">Prior Events</h4>
      <v-div v-for="priorEvent in priorEvents" :key="priorEvent">
      <event-template
      :date="priorEvent.date"
      :role="priorEvent.role"
      :title="priorEvent.title"
      :body="priorEvent.body"
      :link="priorEvent.link"></event-template>
      </v-div>
      
      
  </div>    
</template>
<script>
import EventTemplate from '@/components/EventTemplate'
export default {
    data: () => {
      return {
        upcomingEvents: [
          {
            date: 'Oct 6, 2020',
            role: `Curator & Moderator`,
            title: `Flipping the Switch: Are Oil & Gas Companies Evolving, or are they Holding Up Climate Progress? Boston Area Sustainability Group: Oct. 2020`,
            body: `The spotlight is on oil & gas companies and their progress, or lack-thereof, on working towards decarbonization. Our lead speaker will be Dr. Peter Frumhoff, Director of Science & Policy and Chief Climate Scientist at the Union of Concerned Scientists and coauthor of the annual UCS “Climate Accountability Scorecard”, subtitled “Insufficient Progress from Major Fossil Fuel Companies.”`,
            link: `https://basgdotorg.wordpress.com/calendar/flipping-the-switch-are-energy-and-utility-companies-evolving`
          }
        ],
        priorEvents: [
          {
            date: `2020`,
            role: `Writer`,
            title: `Conservation Law Foundation, Why I Give`,
            body: `A brief essay on my long-standing interest in environmentalism and strong support for the Conservation Law Foundation.`,
            link: `https://www.clf.org/publication/conservation-matters-spring-2020/`
          },
          {
            date: `2019`,
            role: `Curator & Moderator`,
            title: `Owning It! Sustainability and Worker Cooperatives, Boston Area Sustainability Group`,
            body: `An evening featuring leaders in the growing field of worker-owned-cooperatives and employee stock ownership plan companies focused on sustainability.`,
            link: `https://basgdotorg.wordpress.com/archive/owning-it-sustainability-and-worker-cooperatives/`
          },
          {
            date: `2019`,
            role: `Curator & Moderator`,
            title: `Put Your Money Where It Matters: A Practical Intro to Impact Investment for Individuals, Boston Area Sustainability Group`,
            body: ``,
            link: `https://basgdotorg.wordpress.com/archive/put-your-money-where-it-matters/`
          },
          {
            date: `2018`,
            role: `Writer`,
            title: `Brownfields, Boston Area Sustainability Group`,
            body: ``,
            link: `https://basgdotorg.wordpress.com/archive/brownfields/`
          },
          {
            date: `2018`,
            role: `Curator & Speaker`,
            title: `Climate Change Action Panel, Emmanuel College`,
            body: ``,
            link: ``
          },
          {
            date: `2017`,
            role: `Curator & Moderator`,
            title: `Clearing the Air ~ Carbon and Health, Boston Area Sustainability Group`,
            body: ``,
            link: ``
          },
          {
            date: `2016`,
            role: `Curator & Moderator`,
            title: `Carbon Realities, Boston Area Sustainability Group`,
            body: ``,
            link: `https://basgdotorg.wordpress.com/archive/carbon_realities/`
          },
          {
            date: `2016`,
            role: `Curator & Moderator`,
            title: `The Clean Energy Transition, Boston Area Sustainability Group`,
            body: ``,
            link: ``
          },
          {
            date: `2014`,
            role: `Curator & Speaker`,
            title: `Screening “The Last Mountain” and discussion with professor Tina Grotzer, hosted by Harvard Graduate School of Education Green Team, the Office for Sustainability, and the Faculty of Arts and Sciences' Green Program`,
            body: ``,
            link: ` https://green.harvard.edu/events/last-mountain-screening-and-talk`
          },
          {
            date: `2012`,
            role: `Curator & Speaker`,
            title: `Screening “The Last Mountain” and panel on “The True Cost of Energy: Coal”, Hosted by Cambridge City Councilor Marjorie Decker `,
            body: ``,
            link: `www.clf.org/blog/join-clf-at-a-free-screening-of-the-last-mountain-on-wednesday-may-9-in-cambridge-ma/`
          },
          {
            date: `2012`,
            role: `Curator & Speaker`,
            title: `Screening “The Last Mountain”, Sustainability Film Series, Phillips Exeter Academy with Conservation Law Foundatio`,
            body: `A brief essay on my long-standing interest in environmentalism and strong support for the Conservation Law Foundation.`,
            link: `www.clf.org/blog/join-clf-at-a-free-screening-of-the-last-mountain-in-exeter-nh-on-may-4th/`
          },
          {
            date: `2009`,
            role: `Writer`,
            title: `“The main reason to raise the gas tax”, OpEd, Boston Globe`,
            body: `OpEd making the environmental and climate case for raising the gas tax.`,
            link: `http://archive.boston.com/bostonglobe/editorial_opinion/oped/articles/2009/05/25/the_main_reason_to_raise_the_gas_tax/`
          },
        ]
      }
    },
    components: {
      'event-template': EventTemplate
    }
}
</script>
<style scoped>

</style>