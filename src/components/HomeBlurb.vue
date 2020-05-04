<template>
    <div class="ma-4">
        <v-title class="primary--text display-1 hidden-xs-only">{{ title }}</v-title>
        <v-title class="primary--text title hidden-sm-and-up">{{ title }}</v-title>
        <p class="text-justify">{{ body }}</p>
        <v-btn class="float-right" tile="" color="primary" outlined="" hover="true">Read More<v-icon right>mdi-chevron-right</v-icon></v-btn>
    </div>
</template>
<script>

export default {
    props: ['title', 'body']
}
</script>
<style scoped>

</style>