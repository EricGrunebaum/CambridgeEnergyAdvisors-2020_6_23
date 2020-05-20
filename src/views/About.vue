<template>
  <div class="about">
    <v-container>
    
      <h1 class="display-3 hidden-xs-only ma-6">About Us</h1>
      <h3 class="display-2 hidden-sm-and-up">About Us</h3>

    <div v-for="content in contents" :key="content" class="text-left ma-4">
        <blockquote class="blockquote">{{ content }}</blockquote>
    </div>
    </v-container>
    <v-col justify-content="space-around" class="hidden-xs-only">
        <v-avatar size="144">
          <v-img :src="images.a" aspect-ratio="1" alt=""></v-img>
        </v-avatar>
      </v-col>
      <v-col justify-content="space-around" class="hidden-sm-and-up">
        <!-- <v-avatar size="72">
          <v-img :src="images.a" aspect-ratio="1" alt=""></v-img>
        </v-avatar> -->
  
        <v-avatar size="72">
        <v-img :src="images.a"></v-img>
        </v-avatar>
      </v-col>
      <sub><em>Eric Grunebaum, Principal</em></sub>
  </div>
</template>
<script>
export default {
  data(){
    return {
      images: {
        a: require('../../public/eric1.jpg'),    
      },
      contents: {
        a: `Cambridge Energy Advisors and principal Eric Grunebaum, provide a broad consultancy focused on developing clean energy projects, raising investment for resource efficiency companies and impact funds and providing critical business development strategies that moves our energy and resource systems towards transformational clean energy and efficiency improvements.`,
        b: `Through Bequia Securities, we help connect investors to opportunities that allow high net-worth individuals, family offices, foundations and endowments to financially benefit from the systemic changes which are underway throughout our resource and energy systems and will continue on that trajectory for the coming decades.`,
        c: `Our project development business focuses on building-scale clean energy and efficiency projects and sourcing capital to fund them in cases where the building owner – whether non-profit, school or commercial – may have different capital priorities. We also help unlock tax benefits for non-tax paying entities.`,
        d: `Our broad experience and visibility into these related domains, from project development, business development, communications and fundraising – from both the investor’s and recipient’s side of table – provides us with a valuable perspective and insight into catalyzing change through the worlds of business and investment.`
      }
    }
  }  
}
</script>
<style scoped>
  
</style>
