<template>
  <div class="projects">
    <h1 class="display-3 hidden-xs-only ma-6">Projects</h1>
      <h3 class="display-2 hidden-sm-and-up">Projects</h3>
      <v-divider></v-divider>
      
       
  <v-container>
    <v-row row wrap>
      
        
      
      <v-col cols="12" sm="6" md="6" lg="4" v-for="project in projects" :key="project">
        


          <v-card class="mx-auto elevation-{ hover ? 20 : 5 }"
                  max-width="800"
                  hover=""
                  >
          

            <router-link :to="{ name: 'SingleProject', params: {id:project.id} }">
              <v-parallax :src="project.photo" alt="" contain="" class="align-center justify-center white--text">
              <div class="chip">
              <v-chip
              label
              :color="project.color"
              class="text-center"
              
              >
              {{ project.category }}</v-chip>
              </div>
          
                
                <v-card-title class="hidden-xs-only text-break" style="max-width: 400px; word-break: normal;" :id="project.name">{{ project.title }}</v-card-title>
                <v-card-title style="max-width: 400px; word-break: normal;" class="hidden-sm-and-up" :id="project.name">{{ project.title }}</v-card-title>
              </v-parallax>
            </router-link>
        
          </v-card>
          

        
      </v-col> 
      
    </v-row>
    
      
    
  </v-container>
  </div>    
</template>
<script>

export default {
  
  data(){
    return {   
      
      // studies: [
      //             //Sector 1
      //             { 
      //               id: 1,
      //               color: 'primary',              
      //               category: 'fundraising & impact investment.',
      //               title: `Solar Tax Equity and Bond Fund`,
      //               photo: require('../../public/solar_array1.png'),
      //                 paragraphs: [
      //                       `For this startup solar fund, we helped broaden their investor base and bring in a broad network of high net-worth, family office and foundation investors, raising total of $2.25 million which allowed them to build approximately 1 megawatt of commercial scale solar for a broad spectrum of non-profits, REITs and other businesses.`,
      //                       `The thesis for this evergreen solar development fund is a strong focus on commercial rooftops of all kinds where solar progress has been stymied by complexity and uniqueness of each roof. While utility scale solar and residential solar have benefited from institutional investment, commercial scale rooftops have generally lagged due to challenges with underwriting and the broad diversity of building types. Seeing this as a virtue, the fund has worked to create strong underwriting standards and efficient transactional platforms to help democratize the development of solar on rooftops where the positive impacts are multiple – jobs created, economic development generated and of course climate emissions reduced.`,
      //                       `For investors, the fund has provided a way to participate, earning above-market, bond-like returns and exposure to infrastructure investments that are uncorrelated with the vicissitudes of swings in the public stock markets. For those who are accredited investors who are seeking to participate financially in the energy transformation which is now underway, the fund has provided an accessible, diversified investment opportunity.`,
      //                       `For individuals and institutions with significant taxes due from private “passive” investment, the fund has provided access to high returns, which are effectively backed by the federal tax code.`
      //                        ],
      //             },
      //             { 
      //               id: 2,
      //               color: 'primary',              
      //               category: 'fundraising & impact investment.',
      //               title: `Series C Raise for Clean Energy Hardware Company`,
      //               photo: require('../../public/windmills.png'),
      //                 paragraphs: [
      //                       `For a mature clean energy hardware startup based in Colorado, we’ve built relationships with investors on the East Coast, gaining them access to capital markets, primarily venture capital firms and potential corporate strategic partners/investors which has been critical for raising their profile and generating new investor relationships.`,
      //                       `After a dozen years of engineering and development and with three Small Business Innovation Research grants from EPA, DOE and NSF totaling $2.7M, this company is ready to commercialize their fifth generation, modular, 25kW waste-heat-to-power, advanced Stirling engine design. Full scale pilot engines have been tested by the Army Corps’ Cold Regions Research & Engineering Lab verifying efficiencies up to 30% for an engine generating zero-emissions power from excess heat, a free, wasted fuel source. Also tested by a multinational electrical equipment manufacturer and generating R&D investment from a global cement company, the technology is ready for commercial piloting, strategic partnerships and IP licensing.`,
      //                       `Through our broker-dealer relationship with Bequia Securities LLC, we have been retained to attract investors and partners to begin commercial deployment of the technology which generates ROIs in beachhead markets of 3-6 years ~ in particular when coupled with base-load oil and gas gensets, thermal pollution control, manufacturing and industrial processes which typically vent their waste heat to the atmosphere and have on-site power demand. Through long-term deployment in addressable markets, profitable CO2 emissions reductions of over 3 gigatons can be achieved.`,
      //                        ],
      //             },
      //             //Sector 2
      //             { 
      //               id: 3,
      //               color: 'orange',              
      //               category: `project development.`,
      //               title: `Commercial Solar in Harvard Square, Cambridge `, 
      //               photo: require('../../public/solar_workers.png'),
      //               paragraphs: [
      //                       `For an established commercial landlord in Harvard Square we’ve worked with the managing partner to envision the economic, sustainable and aesthetic potential of a complex series of connected solar phases, while engaging top engineers and running an RFP to select high quality installation partners.`,
      //                       `The three solar arrays for a set of solar arrays which will provide revenue, significant tax benefits and sustainability branding for the management company. The array on the roof-top structure will also carry forward the original intentions of the structure which supported a cutting edge solar thermal array when it was completed in 1980 by the managing partner’s father who developed and built the structure. The solar thermal array was ahead of its time and so was eventually removed, however we now have the opportunity to replace it with a state-of-the-art solar array which will be visible throughout Harvard Square. The atrium has its own story as the space has had too much heat gain in the summer months, making it less functional than it could otherwise be.`,
      //                       `The new sculptural solar array floating above the renovated solar array will incorporate translucent panels which will allow some light to come through, but will also provide shading properties, and will be visible for events and daily use of the dramatic space. Completion of phases 1 and 2 is expected in summer 2020 and for the atrium, the following summer.`
      //                       ],
      //             },
      //             { 
      //               id: 4,
      //               color: 'orange',         
      //               category: `project development.`,
      //               title: `Brownfield to Accessible Natural Reservation`, 
      //               photo: require('../../public/swimming1.png'),
      //               paragraphs: [
      //                       `Once an open pit mine where rich clay deposits were extracted until the late 1800s, “Jerry’s Pit” filled with water and was transformed into a popular local swimming hole for nearly 100 years. However in 1961 it was fenced-off and public access has now been prohibited for 60 years while some of the site was polluted by the infamous W.R. Grace chemical company. Restoring the site for safe public access, while enhancing the natural ecosystem provides an unusual opportunity for a new natural reservation adjacent to a large environmental justice community.`,
      //                       `Fences have protected the community from toxic waste, including asbestos left in the soil by W.R Grace, but they have left a permanent blight in a neighborhood now settled by a diverse population of ~4,000 affordable housing community members who likely do not have easy access to natural areas. Wildlife has flourished in the pond and its environs in the last half-century and a sensitive, safe re-opening of the site via boardwalks as well as the addition of a newly created wetland, an off-road bike-way and nature paths, could create a rare opportunity for enhancing habitat and reconnecting the local community with nature.`,
      //                       `The broader geography of what we now call Jerry’s Pond was once referred as The Great Swamp”… an area rich in bird-life and wetlands which supported a fishery which lent its name to the area known as Alewife. With climate change’s growing impacts from heat island, poor air quality, sea level rise and storm surge risk, the area can play an important role in alleviating these impacts. Bringing many more trees, a diverse wetland while maintaining flood water storage could help alleviate these problems while making people feel welcome as well.`,
      //                       `Besides being the “backyard” for thousands of affordable housing residents, Jerry’s Pond and its environs benefits from being steps away from the Red Line, Boston’s main subway branch and adjacent to one of the nation’s most popular rails-to-rails. Thousands of commuters pass by on the subway, the highway terminus nearby and on the busy roads, and large new developments of high-tech and thousands of apartments are being built in adjacent formerly industrial lands. There are increasingly rare opportunities to create new open space and naturally reservations, and almost never is an “extra pond” found, as neglected as this one, in the middle of the city, where even a heron rookery has taken up residence for four years running.`
      //                       ],
      //             },
      //             //Sector 3
      //             {
      //               id: 5, 
      //               color: 'blue',                
      //               category: 'business development.',
      //               title: `European Pharma Catalyst/Green Chemistry Firm`, 
      //               photo: require('../../public/atoms1.png'),
      //               paragraphs: [
      //                       `For this EU co., entering the US market through the unparalleled Kendall Square pharma cluster was critical to gaining market share for its world-leading catalysts that reduce toxic solvents and energy required to manufacture pharmaceuticals.`,
      //                       `Entering foreign markets skillfully requires clear communication, access to markets and sales channels and a genuine presence in the region. The raw materials of a great technology, the science undergirding it and the results to back it up is not sufficient. Transforming the dense, scientific knowledge into a compelling narrative that grabs people’s attention, and then getting in front of the right eyes is critical.`,
      //                       `For this company, in an iterative process with company principals, we completely revised and rewrote their technology sales and marketing decks, wrote their first mission statement and tag-lines and helped connect then with key players in the local pharma and “specialty chemicals” ecosystems with a green chemistry focus. Our work helped transform their business development strategy, introduced them to wholesalers and directly to pharma companies helping to generate international sales channels. We organized and helped them curate their first annual conference showcasing their technologies which were founded on the 2005 Nobel Prize in Chemistry. The result was direct new business opportunities followed by sales in the large US marketplace for the company’s specialty catalysts.`,
                            
      //                       ],
      //             },
      //           ]
      
    
    }
  },
  computed: {
    projects(){
    return this.$store.state.projects;
    }
  },
  components: {
    
  }
}
</script>
<style scoped>
  a {
    text-decoration: none;
  }
  .chip{
    position: absolute;
    transform: translateY(-220px);
  }
  .projects {
        animation: fadeInAnimation ease 1s;
        
    }
    @keyframes fadeInAnimation{
        0% {
            opacity: 0;
            transform: translateY(1rem);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

</style>