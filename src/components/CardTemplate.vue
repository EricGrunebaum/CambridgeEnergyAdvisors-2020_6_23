<template>
<v-container>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="photo"
      darken
    >
      <v-card-title style="word-break: break-word;">{{ title }}</v-card-title>
    </v-img>

    <!-- <v-card-subtitle class="pb-0">Number 10</v-card-subtitle> -->

    <v-card-text class="text--primary">

      <div class="text-truncate">{{ body }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        raised
        color="secondary"
        text
        :to="route"
      >
        Learn More
      </v-btn>
    </v-card-actions>
  </v-card>
</v-container>
</template>
<script>

export default {
  props: ['title', 'body', 'route', 'photo']
}
</script>
<style scoped>
  .img-text{
    color: #fff
  }
</style>