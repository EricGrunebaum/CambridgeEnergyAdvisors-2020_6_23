<template>
  
  <div class="home">
    <v-div>
      <!--Vertically center heading-->
    <h1 class="display-1 my-4 hidden-sm-and-up">Cambridge Energy Advisors</h1>
    </v-div>
    <v-divider class="my-4 primary"></v-divider>
      <div v-for="(blurb, index) in blurbs" :key="blurb">
      <hero-image
      
      :title="blurb.head"
      :body="blurb.body"
      :photo="blurb.source"
      :route="blurb.route"></hero-image>
      
        <v-row class="d-flex">
      <!-- <card-template class="justify-start"
      :photo="cards[index].photo"
      :head="cards[index].head"
      :content="cards[index].content"
      :route="cards[index].route"
      ></card-template> -->
      <home-blurb class="ma-12"
      :title="cases[index].title"
      :body='cases[index].body'
      :route="cases[index].route"></home-blurb>
      </v-row>
    
    </div>
    

  </div>

</template>

<script>
// @ is an alias to /src
// import CardTemplate from '@/components/CardTemplate'
import HomeBlurb from '@/components/HomeBlurb'
import HeroImage from '@/components/HeroImage'
export default {
  name: 'Home',
  components: {
    // 'card-template': CardTemplate,
    'home-blurb': HomeBlurb,
    'hero-image': HeroImage

  },
  data(){
    return {
      blurbs: [
                {              
                  head: `Fundraising and Impact Investment`,
                  body: `Our approach to investment focuses on providing great value for funds, companies and investors. Impact investment opportunities do not require lowering financial returns to generate positive environmental or social values, indeed multiple studies indicate the reverse to be true. Holding the FINRA Series 82 + 63 licenses, and working with team of partners to source deals, we connect investors to opportunities while sourcing capital for companies and funds focusing on clean energy and resource efficiency.`,
                  source: require(`../../public/trees.jpg`),
                  route: `/about`
                },
                {
                  head: `Project Development – Solar,  Commercial Energy Efficiency & Environmental Justice`,
                  body: `Our project development work focuses on developing and funding commercial scale solar and energy efficiency upgrades along with pro bono environmental justice work. We work with non-profit and for-profit entities bringing technical expertise, sources of off-balance sheet funding when needed, visioning and community/stakeholder engagement to help advance profitable projects that increase sustainability.`,
                  source: require(`../../public/energy_circle.jpg`),
                  route: `/about`
                },
              ],
      cases: [
              {
                title: `Case Study: Solar Tax Equity and Bond Fund`,
                body: `For this startup solar commercial fund, we helped expand their investor base, bringing in our network of high net-worth, family office and foundation investors, raising total of $2.25 million. This funding in turn, allowed them to build ~1 megawatt of rooftop solar for a broad spectrum of non-profits, schools, houses of worship, REITs and other businesses while generating great returns for investors.`,
                route: `/projects`,
              },
              {
                title: `Case Study: Commercial Solar in Harvard Square, Cambridge`,
                body: `This commercial solar array on a signficant block in Harvard Square has three distinct phases – first is a traditional flat roof solar array, second is a publicly visible solar array on a rooftop mechanical structure and finally, will be translucent panels mounted above a dramatic atrium space, providing both shading properties and power generation.`,
                route: `/projects`,
            
              }
             ]
      
    }
  },
  
}
</script>
<style scoped>
  .display-4{
    font-family: Montserrat, cursive;
    color: rgba(0, 0, 0, .8)
  }
</style>