<template>
  <div class="projects">
    <h1 class="display-3 hidden-xs-only ma-6">Projects</h1>
      <h3 class="display-2 hidden-sm-and-up">Projects</h3>
      
       

    <v-container v-for="study in studies" :key="study">
      <h2 class="display-1 hidden-sm-and-down" :id="study.name">{{ study.title }}</h2>
      <span class="display-1 hidden-md-and-up" :id="study.name">{{ study.title }}</span>
      <v-img :src="study.photo" alt="" contain="" max-height="400px"></v-img>
      <div v-for="paragraph in study.paragraphs" :key="paragraph">
      <blockquote class="blockquote text-left">{{ paragraph }}</blockquote>
      </div>
      <v-divider class="primary my-8"></v-divider>
    </v-container>
  </div>    
</template>
<script>

export default {
  
  data: () => {
    return {    

      studies: [
                  {                  
                    title: `Case Study: European Pharma Catalyst/Green Chemistry Firm`,
                    photo: ``,
                    paragraphs: [
                            `For this EU co., entering the US market through the unparalleled Kendall Square pharma cluster was critical to gaining market share for its world-leading catalysts that reduce toxic solvents and energy required to manufacture pharmaceuticals.`,
                            `Entering foreign markets skillfully requires clear communication, convenient access and a genuine presence in a that market. Beginning with the raw materials of a great technology and the science and results to back it up is not sufficient. Transforming the dense, scientific knowledge into a compelling narrative that grabs people’s attention, and then getting in front of the right eyes is cricitical.`,
                            `For this company, in an iterative process with company principals, we completely rewrote their technology and investment decks, wrote their first mission statement and tag-lines, and helped them connect with key players in the local pharma and “specialty chemicals” ecosystems with a green chemistry focus. Our work helped transform their business development strategy, introduced them to wholesalers and,
                            directly to pharma companies helping to generate international sales channels. We organized and helped them curate their first annual conference showcasing their technologies which were founded on the 200x 
                            Nobel Prize in Chemistry.`
                            ]
                  },
                  {                  
                    title: `Case Study: Solar Tax Equity and Bond fund`,
                    photo: ``,
                    paragraphs: [
                          `For this startup solar fund, we helped broaden their investor base and bring in a broad network of high net-worth, family office and foundation investors, raising total of $2.25 million which allowed them to build approximately 1 megawatt of commercial scale solar for a broad spectrum of non-profits, REITs and other businesses.
                           The thesis for this evergreen solar development fund is a strong focus on commercial rooftops of all kinds where solar progress has been stymied by complexity and uniqueness of each roof. While utility scale solar and residential solar have benefited from institutional investment, commercial scale rooftops have generally lagged 
                           due to challenges with underwriting and the broad diversity of building types. Seeing this as a virtue, the fund has worked to create strong underwriting standards and efficient transactional platforms to help democratize the development of solar on rooftops where the positive impacts are multiple – jobs created, economic development
                           generated and of course climate emissions reduced.`,
                          `For investors, the fund has provided a way to participate, earning above-market, bond-like returns and exposure to infrastructure investments that are uncorrelated with the vicissitudes of swings in the public stock markets. For those who are accredited investors who are seeking to participate
                           financially in the energy transformation which is now underway, the fund has provided an accessible, diversified investment opportunity. For individuals and institutions with significant taxes due from private “passive” investment, the fund has provided access to high returns, which are effectively backed by the federal tax code.`
                           ]
                  },
                ]
      
    }
  },
  components: {
    
  }
}
</script>
<style scoped>

</style>