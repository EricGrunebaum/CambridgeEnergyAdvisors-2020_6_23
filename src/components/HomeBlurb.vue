<template>
    <div class="ma-4">
        <v-title class="primary--text display-1 hidden-xs-only">{{ title }}</v-title>
        <v-title class="primary--text hidden-sm-and-up">{{ title }}</v-title>
        <p class="text-justify my-4 hidden-xs-only">{{ body }}</p>
        <p class="text-center my-4 hidden-sm-and-up">{{ body }}</p>
        <v-btn class="" tile="" color="primary" outlined="" hover="true" :to="route">Read More<v-icon right>mdi-chevron-right</v-icon></v-btn>
    </div>
</template>
<script>

export default {
    props: ['title', 'body', 'route']
}
</script>
<style scoped>

</style>