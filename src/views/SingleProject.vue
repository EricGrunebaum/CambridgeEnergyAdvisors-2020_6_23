<template>
<div>
    <h2>{{ projectId }}</h2>
    <ul>
        <li>
            {{ project.title }}
            {{ project.body }}
        </li>
    </ul>
    
        
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