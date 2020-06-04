<template>
    <v-row justify="center">
        <v-expansion-panels accordion multiple hover popout >
            <v-expansion-panel class="panel"
            >
                    <v-expansion-panel-header class="primary">
                            <span class="mx-2"><strong class="event-title">{{ title }}</strong>  -<em>{{ host }}</em></span>
                            <span class="mx-2 text-right align-text-center"> {{ date }} </span>
                    </v-expansion-panel-header>
                <v-expansion-panel-content class="text-left mt-3">               
                <span class="primary--text"><em>{{ role }}</em></span>
                <br>
                <p>{{ body }}</p>
                                
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
    props: ['date', 'role', 'title', 'host', 'body', 'link']
}
</script>
<style scoped>
    .panel {
        margin: .15rem;
    }
    
    .event-title{
        font-weight: 600;
    }
</style>