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
        a: require('../../public/eric1.png'),
        b: require('../../public/eric2.png')
        
        
      },
      contents: {
        a: `Cambridge Energy Advisors and principal Eric Grunebaum, provide a mixed consultancy focused on developing clean energy projects, providing critical business development and raising investment for companies and funds that move our energy and resource systems towards transformational clean energy and efficiency improvements.`,
        b: `Through Bequia Securities, we also help connect investors to opportunities that allow high net-worth individuals, family offices, foundations, endowments to financially benefit from the systemic changes now taking place throughout our resource and energy systems.`,
        c: `In our project development business, we focus on developing building-scaled clean energy and efficiency projects and sourcing capital to fund them when the building owner, whether non-profit, school or private owner may not have the capital available or may have different priorities for their capital.`,
        d: `Our broad experience and visibility into multiple domains, from project development, business development, communications, to fundraising from both the investor and recipient’s perspectives provides us with a valuable perspective and insight into catalyzing change through the worlds of business and investment.`
      }
    }
  }  
}
</script>
<style scoped>
  
</style>
