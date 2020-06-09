<template>
  <v-app class="grey lighten-4"> <!--Root component-->
   <Navbar />
    <v-content class="text-center ma-10">      
    
        <router-view :key="$route.path"></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';


export default {
  name: 'App',

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
  * {
    overflow: scroll;
  }
</style>
