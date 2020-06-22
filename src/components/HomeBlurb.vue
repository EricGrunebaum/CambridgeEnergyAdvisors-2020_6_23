<template>
    <div class="ma-4">
        <h3 class="primary--text display-1 hidden-xs-only content-title">{{ title }}</h3>
        <h5 class="primary--text hidden-sm-and-up content-title">{{ title }}</h5>
        <p class="text-justify ma-4 hidden-xs-only content-body">{{ body }}</p>
        <p class="text-center my-4 hidden-sm-and-up content-body">{{ body }}</p>
        <v-btn class="" tile="" color="primary" outlined="" hover="true" :to="route">Read More<v-icon right>mdi-chevron-right</v-icon></v-btn>
    </div>
</template>
<script>

export default {
    props: ['title', 'body', 'route']
}
</script>
<style scoped>
    .content-title {
        font-size: 1.75rem;
        
    }
    .content-body {
        /* font-size: larger; */
        font-size: 1.5rem;
    }
</style>