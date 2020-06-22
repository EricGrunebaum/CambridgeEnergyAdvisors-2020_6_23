<template>
  <div class="projects">
    <h1 class="display-3 hidden-xs-only ma-6">Case Studies</h1>
      <h3 class="display-2 hidden-sm-and-up">Case Studies</h3>
      <v-divider class="primary"></v-divider>
      
       
  <v-container>
    <v-row row wrap>
      
        
      
      <v-col cols="12" sm="6" md="6" lg="4" v-for="(project, index) in projects" :key="index">


          <v-card class="mx-auto elevation-{ hover ? 20 : 5 }"
                  max-width="800"
                  hover=""
                  >
          

            <router-link :to="{ name: 'SingleProject', params: {id:project.id} }">
              <v-parallax :src="project.photo" alt="" contain="" class="align-center justify-center white--text">
              <div class="chip">
              <v-chip
              label
              :color="project.color"
              class="text-center"
              text-color="black"
              
              >
              {{ project.category }}</v-chip>
              </div>
        
          
                
                <v-card-title class="hidden-xs-only text-break project-title justify-center" :id="project.name">{{ project.title }}</v-card-title>
                <v-card-title style="max-width: 400px; word-break: normal;" class="hidden-sm-and-up project-title" :id="project.name">{{ project.title }}</v-card-title>
        
              </v-parallax>
            </router-link>
        
          </v-card>
          
        
      </v-col> 
      
    </v-row>
    
      
    
  </v-container>
  </div>    
</template>
<script>

export default {
  
  data(){
    return {   
    }
  },
  computed: {
    projects(){
    return this.$store.state.projects;
    }
  },
  components: {
    
  }
}
</script>
<style scoped>
  a {
    text-decoration: none;
  }
  .chip{
    position: absolute;
    transform: translateY(-220px);
    
  }
  
  
  .projects {
        animation: fadeInAnimation ease 1s;
        
    }
  .project-title{
    font-weight: 900;
    background-color: white;
    color: black;
    opacity: .7;
    border-radius: 5px;
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