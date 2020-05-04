<template>
  
  <div class="home">
    <h1 class="display-3 hidden-xs-only">Cambridge Energy Advisors</h1>
      <h4 class="display-1 hidden-sm-and-up">Cambridge Energy Advisors</h4>
    <v-container>
    <v-layout row class="my-4">
    
    <v-layout v-for="(card, index) in cards" :key="card" row class="my-4">
    <!-- <v-layout v-for="blurb in blurbs" :key="blurb" row class="my-4"> -->
    <!-- <v-layout v-for="card in cards" :key="card" row class="my-4"> -->
      <v-flex xs12 s12 md6 lg6 xl6>
        <card-template
        :title="card.head"
        :body="card.content"
        :route="card.route"
        :photo="card.photo"
        >
        </card-template>
      </v-flex>
      
      <v-flex xs12 s12 md4 lg4 xl4 align-self-center="">
        <home-blurb
        :title="blurbs[index].head"
        :body="blurbs[index].body"
        :route="blurbs[index].route"
        ></home-blurb>
      </v-flex>

    <!-- </v-layout> -->
    <!-- </v-layout> -->
    </v-layout>
    </v-layout>
    </v-container>
  </div>

</template>

<script>
// @ is an alias to /src
import CardTemplate from '@/components/CardTemplate'
import HomeBlurb from '@/components/HomeBlurb'
export default {
  name: 'Home',
  components: {
    'card-template': CardTemplate,
    'home-blurb': HomeBlurb

  },
  data(){
    return {
      blurbs: [
                {                
                  head: `Business Development ~ Clean Energy &  Resource Efficiency`,
                  body: `Our approach to business development is grounded in a 20 year foundation of science communications in the documentary and science museum disciplines. Effectively communicating with an economy of words is critical to engaging audiences, whether customers, investors or partners.`,
                  route: `/about`
                },
                {
                  head: `Fundraising and Impact Investment`,
                  body: `Our approach to investment focus on providing value for both the recipient and the investor. Impact investment opportunities no longer require reducing financial return to generate positive environmental or social value. With an FINRA Series 82 + 63 licenses, and team of partners sourcing deals, we connect investors to opportunities while sourcing capital for companies and funds focusing on Clean Energy and Resource Efficiency.`,
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
