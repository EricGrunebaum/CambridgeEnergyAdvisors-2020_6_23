<template>
    <v-row justify="center">
        <v-expansion-panels accordion multiple hover popout >
            <v-expansion-panel class="panel"
            >
                    <v-expansion-panel-header :class="color">
                            <span class="mx-2 content-title"><strong class="event-title">{{ title }}</strong>  ~<em>{{ host }}</em></span>
                            <span class="mx-2 text-right align-text-center"> {{ date }} </span>
                    </v-expansion-panel-header>
                <v-expansion-panel-content class="text-left mt-3">               
                <span class="content-body primary--text" :class="`${color}--text`"><em>{{ role }}</em></span>
                <br>
                <p class="content-body">{{ body }}</p>
                                
                <div v-if="link != ''">
                    <a :class="`${color}--text`" :href="link" target="_blank">Learn More</a>
                </div>
                <div v-else></div>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
    </v-row>
</template>
<script>
export default {
    props: ['date', 'role', 'title', 'host', 'body', 'link', 'color']
}
</script>
<style scoped>
    .content-title {
        font-size: 1.05rem;
        line-height: normal;
    }
    .content-body {
        font-size: 1.05rem;
        line-height: normal;
    }
    .panel {
        margin: .35rem;
    }
    
    .event-title{
        font-weight: 600;
    }
</style>