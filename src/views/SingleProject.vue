<template>
<div class="single-projects">
    <h1 class="display-2 hidden-xs-only ma-6">{{ project.title }}</h1>
      <h3 class="display-1 hidden-sm-and-up">{{ project.title }}</h3>
      <v-divider id="divider"></v-divider>
    <article v-for="paragraph in project.paragraphs" :key="paragraph" class="content-body text-left">{{ paragraph }}<br><br></article>
   
   <div class="hidden-xs-only">
       <div class="d-flex justify-center">
        <v-img :src="project.photo2" max-width="600" alt="" data-aos="fade-in" data-aos-duration="2000" data-aos-once="true"></v-img>
       </div>
        <v-btn v-if="this.projectId > 1" color="primary" outlined :to="{ name: 'SingleProject', params: {id:projectId-1} }" class="ma-6"><v-icon>mdi-chevron-left</v-icon>Previous Project</v-btn>
        <v-btn color="primary"  :to="{ name: 'projects' }" class="ma-6">Back to Projects </v-btn>
        <v-btn v-if="this.projectId < 6" color="primary" outlined :to="{ name: 'SingleProject', params: {id:projectId+1} }" class="ma-6">Next Project <v-icon>mdi-chevron-right</v-icon></v-btn>
   </div>

   <div class="hidden-sm-and-up">
    <v-col class="">
        <v-img :src="project.photo2" sizes="(max-width: 600px) 480px" alt="" data-aos="fade-in" data-aos-duration="2000" data-aos-once="true"></v-img>
        <v-btn class="ma-6 xs-6"  v-if="this.projectId > 1" color="primary" outlined :to="{ name: 'SingleProject', params: {id:projectId-1} }"><v-icon>mdi-chevron-left</v-icon></v-btn>
        <v-btn class="ma-6 xs-6"  v-if="this.projectId < 6" color="primary" outlined :to="{ name: 'SingleProject', params: {id:projectId+1} }"><v-icon>mdi-chevron-right</v-icon></v-btn>
        <v-btn color="primary xs-12"  :to="{ name: 'projects' }" class="ma-6">Back to Projects </v-btn>
    </v-col>
   </div>
   
    
   
</div>
</template>
<script>

export default {
    data(){
        return {            
            projectId: this.$route.params.id,
        }      
    },

computed: {
    // projects(){
    //     return this.$store.state.projects;
    // }

      project(){
        return this.$store.state.projects.find(
            project => project.id === this.projectId
        )
    }
},

}
</script>

<style scoped>
#divider {
    margin: 2rem 0;
}
    .content-body{
        font-size: 1.3rem;
        font-weight: 300;
    }
    .single-projects {
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