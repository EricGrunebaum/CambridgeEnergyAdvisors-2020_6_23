<template>
  
  <div class="home">
    <v-div>
    <h1 class="display-4 my-4 hidden-xs-only">Cambridge Energy Advisors</h1>
    <h1 class="display-1 my-4 hidden-s-and-above">Cambridge Energy Advisors</h1>
    </v-div>
    <v-divider class="my-4 primary"></v-divider>
      <div v-for="blurb in blurbs" :key="blurb">
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
      :title="blurb.head"
      :body='blurb.body'
      :route="blurb.route"></home-blurb>
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
                  title: `Cambridge Energy Advisors`,               
                  head: `Business Development ~ Clean Energy &  Resource Efficiency`,
                  body: `Our approach to business development is grounded in a 20 year foundation of science communications in the documentary and science museum disciplines. Effectively communicating with an economy of words is critical to engaging audiences, whether customers, investors or partners.`,
                  source: require(`../../public/trees.jpg`),
                  route: `/about`
                },
                {
                  head: `Fundraising and Impact Investment`,
                  body: `Our approach to investment focus on providing value for both the recipient and the investor. Impact investment opportunities no longer require reducing financial return to generate positive environmental or social value. With an FINRA Series 82 + 63 licenses, and team of partners sourcing deals, we connect investors to opportunities while sourcing capital for companies and funds focusing on Clean Energy and Resource Efficiency.`,
                  source: require(`../../public/energy_circle.jpg`),
                  route: `/about`
                },
              ],
      cards: [
              {
                photo: require('../../public/science.jpg'),
                head: `Case Study: European Pharma Catalyst/Green Chemistry Firm`,
                content: `For this EU co., entering the US market through the globally important Kendall Square pharma cluster was critical to gaining market share for its world-leading catalysts that reduce toxic solvents and energy required to manufacture pharmaceuticals.`,
                route: '/projects'
              },
              {
                photo: require('../../public/energy_circle.jpg'),
                head: `Case Study: Solar Tax Equity and Bond fund`,
                content: `For this startup solar fund, we helped broaden their investor base and bring in a broad network of high net-worth, family office and foundation investors, raising total of $2.25 million which allowed them to build approximately 1 megawatt of commercial scale solar for a broad spectrum of non-profits, REITs and other businesses.`,
                route: '/projects'
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