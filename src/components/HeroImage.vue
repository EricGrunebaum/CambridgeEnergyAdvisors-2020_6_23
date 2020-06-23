<template>
     <v-parallax
    height="1000"
    dark
    :src="photo"
  >
    <v-row class="d-flex align-start justify-space-between"
    >
         <v-overlay
          
          opacity=".1"
          >

    <h1 class="display-4 hidden-xs-only">{{ head }}</h1>
    <h1 class="display-2 hidden-sm-and-up">{{ head }}</h1>
    <v-col class="" cols="12">
    <div class="backdrop">
        <h1 class="text-center display-2 mb-6 hidden-xs-only">{{ title }}</h1>
        <h1 id="mobile-img-title" class="text-center hidden-sm-and-up">{{ title }}</h1>
        <h4 id="content-body" class="text-center text--light hidden-xs-only subheading">{{ body }}</h4> <!--subheading-->
        <h4 id="content-body-mobile" class="text-center text--light hidden-sm-and-up subheading">{{ body }}</h4> <!--subheading-->

        <v-btn :to="route" outlined="" class="ma-6">Learn More <v-icon right>mdi-chevron-right</v-icon> </v-btn>
    </div>
    
    </v-col>
        </v-overlay>
    </v-row>
    
  </v-parallax>
</template>

<script>
export default {
    props: ['title', 'body', 'head', 'photo', 'route'],
    
}
</script>
<style scoped>
    #mobile-img-title{
        font-family: 'Roboto', sans-serif;
        font-size: 1.7rem;
        margin-bottom: 1rem;
    }
    .backdrop{
        background-color: #0000008f;
        opacity: .8;
        border-radius: 1rem;
        padding: 1rem;
        color: #ffffff;
        
    }
    #content-body{
        font-size: 1.5rem;
    }
    #content-body-mobile{
        font-size: 1.05em;
    }
    .subheading{
        font-size: 20px;
        font-weight: 400;
        padding: 0 2rem;
    }
    .display-4,
    .display-2{
        font-weight: 600;
    }
    h1{
        max-width: 800px;
        word-break: normal;
    }
    h4{
        max-width: 800px;
        word-break: normal;
        font-size: x-large;
    }
    
    
</style>