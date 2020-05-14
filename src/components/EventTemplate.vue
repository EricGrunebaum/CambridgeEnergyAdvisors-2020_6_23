<template>
    <v-row justify="center">
        <v-expansion-panels accordion multiple hover popout>
            <v-expansion-panel
                
            >
                    <v-expansion-panel-header>
                            <span class="title mx-2">{{ title }}</span>
                            <span class="mx-2 text-right align-text-center"> {{ date }} </span>
                    </v-expansion-panel-header>
                <v-expansion-panel-content class="text-left">
                <span class="pr-4 py-4"><em>{{ role }}</em></span>
                <br>
                <br>
                <p>{{ body }}</p>
                <br>
                <div v-if="link != ''">
                    <a :href="link" target="_blank">Learn More</a>
                </div>
                <div v-else></div>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-row>
</template>
<script>
export default {
    props: ['date', 'role', 'title', 'body', 'link']
}
</script>
<style scoped>

</style>