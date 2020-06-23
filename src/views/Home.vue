<template>
  
  <div class="home">
    <v-divider class="my-4 primary"></v-divider>
      <div v-for="(homeContent, index) in homeContents" :key="index">
      
      <hero-image
      data-aos="fade-in" data-aos-duration="1000"
      :title="homeContents[index].head"
      :body="homeContents[index].body"
      :photo="homeContents[index].source"
      :route="homeContents[index].route"
      ></hero-image>
      
      
      
        <v-row class="d-flex">
      
      <home-blurb class="ma-12"
      data-aos="fade-in" data-aos-duration="500" data-aos-easing="ease-in-sine"
      :title="cases[index].title"
      :body='cases[index].body'
      :route="cases[index].route"></home-blurb>
      </v-row>
    
    </div>
    

  </div>

</template>

<script>
// @ is an alias to /src
// import CardTemplate from '@/components/CardTemplate'
import HomeBlurb from '@/components/HomeBlurb'
import HeroImage from '@/components/HeroImage'
export default {
  name: 'Home',
  components: {
    // 'card-template': CardTemplate,
    'home-blurb': HomeBlurb,
    'hero-image': HeroImage

  },
  data(){
    return {
      
    
      }
    
  },
  computed: {
    homeContents(){
      return this.$store.state.homeContents;
    },
    cases(){
      return this.$store.state.cases;
    }
    }
}
</script>
<style scoped>
.backdrop{
        background-color: #0000008a;
        border-radius: 3%;
        padding: 3rem;
    }


  .display-4{
    font-family: Montserrat, cursive;
    color: rgba(0, 0, 0, .8)
  }

  .hero{
    font-size: 5rem;
  }
  .home {
        animation: fadeInAnimation ease 2s;
        
    }
    @keyframes fadeInAnimation{
        0% {
            opacity: 0;
            transform: translateY(3rem);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

</style>