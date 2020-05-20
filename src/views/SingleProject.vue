<template>
<div class="projects">
    <h1 class="display-2 hidden-xs-only ma-6">{{ project.title }}</h1>
      <h3 class="display-1 hidden-sm-and-up">{{ project.title }}</h3>
      <v-divider></v-divider>
    <article v-for="paragraph in project.paragraphs" :key="paragraph" class="text-left blockquote">{{ paragraph }}<br><br></article>
    <img :src="project.photo" alt="" data-aos="fade-in" data-aos-once="true">
   
   <v-btn color="primary" outlined :to="{ name: 'SingleProject', params: {id:projectId-1} }" class="ma-6"><v-icon>mdi-chevron-left</v-icon>Previous Project</v-btn>
   <v-btn color="primary" outlined :to="{ name: 'projects' }" class="ma-6">Back to Projects </v-btn>
   <v-btn color="primary" outlined :to="{ name: 'SingleProject', params: {id:projectId+1} }" class="ma-6">Next Project <v-icon>mdi-chevron-right</v-icon></v-btn>
   
    
   
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
}
}
</script>