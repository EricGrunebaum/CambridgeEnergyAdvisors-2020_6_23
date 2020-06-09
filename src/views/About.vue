<template>
  <div class="about">
    <v-container>
    
      <h1 class="display-3 hidden-xs-only ma-6">About Us</h1>
      <h3 class="display-2 hidden-sm-and-up">About Us</h3>
      <v-divider class="primary"></v-divider>
    
    <div v-for="content in about.lead1" :key="content" class="text-left ma-4">
        <p class=" content-body">{{ content }}</p>
    </div>
    <div  class="text-left ma-4">
        <p v-for="content in about.lead2.a" :key="content" class=" content-body lead hidden-xs-only"> • {{ content }}</p>
    </div>
    <div v-for="content in about.lead2.a" :key="content" class="text-left ma-4">
        <p class=" content-body hidden-sm-and-up"> • {{ content }}</p>
    </div>
    
    <div v-for="content in about.contents" :key="content" class="text-left ma-4">
        <blockquote class=" content-body">{{ content }}</blockquote>
    </div>
    </v-container>
    <v-col justify-content="space-around" class="hidden-xs-only" >
        <v-avatar size="200">
          <v-img :src="about.images.a" aspect-ratio="1" alt="" data-aos="fade-in" data-aos-duration="2000"></v-img>
        </v-avatar>
      </v-col>
      <v-col justify-content="space-around">  
        <v-avatar size="144" class="hidden-sm-and-up">
        <v-img :src="about.images.a" data-aos="fade-in" data-aos-duration="2000"></v-img>
        </v-avatar>
      </v-col>
      <sub><em>Eric Grunebaum, Principal</em></sub>
  </div>
</template>
<script>
export default {
  data(){
    return {
      
    }
  },
  computed: {
    about(){
      return this.$store.state.about
    }
  }
}
</script>
<style scoped>
    
    .about {
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
    .lead {
      padding: 0 2rem;
      margin-bottom: 5px;
    }
    .content-body{
      font-size: 1.3rem;
      font-weight: 300;

    }

</style>
