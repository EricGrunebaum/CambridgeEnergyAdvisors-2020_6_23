<template>
     <v-parallax
    height="1000"
    dark
    :src="photo"
  >
    <v-row class="d-flex align-start justify-space-between"
    >
         <v-overlay
          absolute=""
          opacity=".3"
          >

    <h1 class="display-4">{{ head }}</h1>
    <v-col class="" cols="12">
        <h1 class="text-center display-2 font-weight-thin mb-4">{{ title }}</h1>
        <h4 class="text-center subheading">{{ body }}</h4>
        <v-btn :to="route" outlined="" class="ma-6">Learn More <v-icon right>mdi-chevron-right</v-icon> </v-btn>
    </v-col>
        </v-overlay>
    </v-row>
    
  </v-parallax>
</template>

<script>
export default {
    props: ['title', 'body', 'head', 'photo', 'route']
}
</script>
<style scoped>
    .subheading{
        font-size: 20px;
    }
</style>