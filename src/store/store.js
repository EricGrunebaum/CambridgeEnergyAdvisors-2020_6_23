import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {

    // ../views/Home.vue


        homeContents: [
            {              
                head: `fundraising & impact investment.`,
                body: `Our approach to investment focuses on providing genuine value to funds, companies and investors. Impact investment does not mean reducing financial returns to generate positive environmental and social benefits – in fact many studies indicate the reverse is true. Holding the FINRA Series 82 + 63 licenses and working with team of partners to source and vet deals, we connect investors to private market opportunities while sourcing capital for companies and funds focusing on resource efficiency and social benefit.`,
                source: require(`../../public/trees-blue-sky.jpg`),
                route: `/about`
                },
                {
                head: `project development – solar,  commercial energy efficiency & environmental justice.`,
                body: `Our project development work focuses on developing projects and bringing catalytic funding to commercial scale solar and energy efficiency retrofits. On a pro bono basis, we’ve also advanced a brownfield restoration project in an environmental justice community. Working with commercial and non-profit owners, we bring technical expertise, sources of funding when needed, visioning and stakeholder engagement to advance projects that increase sustainability and financial returns.`,
                source: require(`../../public/energy_circle.jpg`),
                route: `/about`
                },
                {
                head: `business development ~ clean energy & resource efficiency`,
                body: `Our approach to business development is grounded in a 20 year foundation of creating science communications via documentary films and for science and natural history museums. Communicating your company, fund or project’s purpose and narrative powerfully and with an economy of words is critical to engaging people, whether they be prospective investors, partners or customers.`,
                source: require(`../../public/office_window.jpg`),
                route: `/about`
            },
            
        ],

        cases: [
        {
          title: `project: solar tax equity and bond fund`,
          body: `For this startup commercial solar fund, we helped expand the investor base, bringing in our network of high net-worth, family office and foundation investors, raising a total of $2.25 million. The funds we raised helped build approximately 1 megawatt of rooftop solar for a broad spectrum of non-profits, schools, houses of worship, REITs and other businesses, while generating great returns and tax benefits for investors.`,
          route: `/projects`,
        },
        {
          title: `project: commercial solar in harvard square, cambridge`,
          body: `This commercial solar project on a significant block in Harvard Square has three unique phases – first are traditional flat roof solar arrays; second will be a solar array on a rooftop structure visible from the surrounding business district; and finally, translucent solar panels will be mounted above a dramatic atrium space, generating clean power while also providing shading to reduce heat gain making the space more functional year-round.`,
          route: `/projects`,
      
        },
        {
          title: `project: european pharma catalyst/green chemistry firm`,
          body: `For this EU-based company, entering the US market through the globally important Kendall Square, Cambridge, MA pharma and life-sciences cluster was the key to gaining market share for its world-leading catalysts which reduce the need for toxic solvents and energy inputs required to manufacture pharmaceuticals.`,
          route: `/projects`,
      
        },
        ],


    // ../views/Projects.vue && ../views/SingleProject.vue
        projects: [
            {
                
                 id: 1,
                 color: 'primary',              
                 category: 'fundraising & impact investment.',
                 title: `Solar Tax Equity and Bond Fund`,
                 photo: require('../../public/solar_array.jpg'),
                   paragraphs: [
                         `For this startup commercial solar fund, we helped expand the investor base, bringing in our network of high net-worth, family office and foundation investors, raising a total of $2.25 million. The funds we raised helped build approximately 1 megawatt of rooftop solar for a broad spectrum of non-profits, schools, houses of worship, REITs and other businesses, while generating great returns and tax benefits for investors`,
                         `The thesis for this evergreen solar development fund is an intentional focus on commercial-scale rooftops of all shapes and sizes where solar progress has been slowed by transaction costs, complexity and the uniqueness of each building’s roof and underwriting. While residential and utility scale solar have exploded with access to institutional investment, commercial scale rooftops have generally lagged due to these challenges and the broad range of building types and uses.`,
                         `Seeing this diversity as a virtue, the fund has worked to create strong and replicable underwriting standards and an efficient transactional platform to help democratize the development of solar on rooftops where the positive impacts are numerous including jobs created – typically at community-scale businesses, regional economic development and of course the reductions in carbon emissions and toxic air pollutants.`,
                         `For accredited investors, the fund has provided a pathway to participate in catalyzing clean energy development, while earning above-market, bond-like returns and exposure to infrastructure investments which are uncorrelated from swings in the public stock markets. For investors who are seeking to participate financially in the energy transformation which is now well underway, the fund provides access to a diversified investment opportunity in private markets at the forefront of this change.`,
                         `For profitable companies and individuals or family offices with significant taxes due from their IRS-defined “passive” investments, the fund provides access to strong risk-adjusted returns which are effectively backed by incentives in the federal tax code.`
                          ],
               
            },
            { 
                id: 2,
                color: 'primary',              
                category: 'fundraising & impact investment.',
                title: `Series C Raise for Clean Energy Hardware Company`,
                photo: require('../../public/jerrys-pond1948.jpg'),
                photo2: require('../../public/energy-us-2019.jpg'),
                paragraphs: [
                        `For a mature clean energy hardware startup based in Colorado, we helped build relationships with investors on the East Coast, gaining attention and access to capital markets, primarily focusing on venture capital firms and corporate strategic investors including major multinational companies. This effort has been critical for raising the company’s profile and generating new investor relationships.`,
                        `After 10+ years of engineering development and with three Small Business Innovation Research grants from EPA, DOE and NSF totaling $2.7M under their belt, this company is ready to commercialize their fifth-generation, modular, waste-heat-to-power advanced Stirling engine design. Full scale 25kW pilot engines have been tested by the Army Corps of Engineers: Cold Regions Research & Engineering Lab verifying efficiencies up to 30% for an engine generating zero-emissions electricity from excess heat, in effect, a free, wasted fuel source. Also tested by a global electrical equipment manufacturer and generating R&D investment from a multinational cement manufacturing company, the technology is ready for commercial piloting, strategic partnerships and/or IP licensing.`,
                        `Through our broker-dealer relationship with Bequia Securities, we were retained to attract investors and partners to invest in the commercial deployment of the technology. In beachhead markets ROIs of 3-6 years are achievable when coupled with base-load diesel and gas generators, thermal pollution control, manufacturing and industrial processes which vent their waste heat to the atmosphere and have on-site power demand. Through long-term deployment in addressable markets projected over the next 30 years, the technology can achieve profitable carbon dioxide emissions reductions of over 3 gigatons.`,
                        ],
            },
            { 
                id: 3,
                color: 'orange',              
                category: `project development.`,
                title: `Commercial Solar in Harvard Square, Cambridge `, 
                photo: require('../../public/solar_workers.jpg'),
                photo2: require('../../public/solar-array-schematic.jpg'),
                paragraphs: [
                        `This commercial solar project on a significant block in Harvard Square has three unique phases – first are traditional flat roof solar arrays; second will be a solar array on a rooftop structure visible from the surrounding business district; and finally, translucent solar panels will be mounted above a dramatic atrium space, generating clean power while also providing shading to reduce heat gain making the space more functional year-round.`,
                        `For an established commercial real estate firm in Cambridge, we’ve worked with the company president to envision and realize the economic benefits, sustainability and aesthetic potential of a complex series of connected solar arrays, while engaging top engineers and running a competitive RFP to select high quality installation partners.`,
                        `The three solar systems on this major commercial building will provide revenue from power generation, significant tax benefits and sustainability branding for the management company. The arrays on the flat roofs will generate clean power and financial benefits on this otherwise unused site while the solar array on the roof-top structure also carries forward its original intentions – the structure’s roof supported a cutting edge solar thermal array when it was completed in 1980 by the president’s father who developed the block. The solar thermal array was removed years ago to improve HVAC functioning, however the initiative to replace it with a state-of-the-art solar photovoltaic array will be visible throughout the historic Harvard Square business district and makes good on the original intentions.`,
                        `The dramatic atrium has its own unique story as the space generates excess heat gain in the summer months, making it less functional than it could potentially be. The new sculptural solar array mounted above the renovated atrium will incorporate translucent solar panels which allow filtered light to enter the space, while also providing shading properties as well as financial and tax benefits. The new solar array will be visible for events and daily usage of the dramatic space, generating both clean power and greater comfort. Completion of the flat roof and rooftop structure arrays is expected in summer 2020, and for the atrium, in summer 2021.`
                        ],
            },
            { 
              id: 4,
              color: 'orange',         
              category: `project development.`,
              title: `Brownfield to Accessible Natural Reservation`, 
              photo: require('../../public/swimming.jpg'),
              paragraphs: [
                      `Once an open-pit mine where rich clay deposits were extracted until the late 1800s, when depleted, “Jerry’s Pit” filled with water and became a popular swimming hole for the neighboring working-class community for almost 100 years. However in 1961 it was fenced-off and public access has been denied for 60 years while large portions of the adjacent land were polluted by the infamous W.R. Grace chemical company.`,
                      `Today, there are nearly 4,000 affordable housing residents living across the street so restoring the site for safe public access while enhancing the natural ecosystem provides a generational opportunity for a new reservation and pond within a significant environmental justice community. While fences have protected the community from asbestos left in the soil by W.R Grace, they have left a permanent blight in a neighborhood now settled by an extremely diverse population, many of whom do not have easy access to natural areas further afield.`,
                      `Over the last half-century, wildlife has flourished around the pond and surrounding land and a sensitive, well-considered re-opening of the site via boardwalks and with the addition of an expanded wetland, off-road bike-way and nature paths, could create an unusual opportunity for enhancing habitat and reconnecting the urban community with nature. As a cofounder of the friends group, I have led on a pro bono basis, the creation of a conceptual plan with support from donated landscape design visualizations. Our concept for the site has now gained the attention of city government, including the Mayor, as well as important environmental NGOs.`,
                      `The broader geography of what is now called "Jerry’s Pond" was once referred to as "The Great Swamp" – a place rich in wetlands and bird-life which supported a fishery that lent its name to an area known today as Alewife. With the growing impacts of climate change – heat island, air pollution, sea level rise and storm surge risk – the pond area can play an important role. Providing space for the planting of many trees and expanding a diverse wetland while maintaining flood water storage could help alleviate these problems while making the community feel welcome as well.`,
                      `In addition to its siting as the “backyard” for thousands of affordable housing residents, Jerry’s Pond and its environs is steps away from the Red Line, Boston’s main subway branch and adjacent to one of the nation’s most popular rails-to-rails. Thousands of commuters pass by via subway, bicycle and on the busy roads heading through or to the large new commercial buildings and thousands of apartments built in adjacent formerly industrial lands. There are increasingly rare opportunities to create new open space and natural areas and it is an absolutely unique opportunity to find an “extra pond”, even one as neglected as this, in the middle of the city, where even a great blue heron rookery has found a home for four summers running.`,
                      ],
            },
             {
                id: 5, 
                color: 'blue',                
                category: 'business development.',
                title: `European Pharma Catalyst/Green Chemistry Firm`, 
                photo: require('../../public/atoms.jpg'),
                paragraphs: [
                        `For this EU-based company, entering the US market through the globally important Kendall Square, Cambridge, MA pharma and life-sciences cluster was the key to gaining market share for its world-leading catalysts which reduce the need for toxic solvents and energy inputs required to manufacture pharmaceuticals.`,
                        `Entering foreign markets skillfully requires clear communications, access to primary beachhead markets, sales channels and a presence in the region. The raw materials of a great technology, the science undergirding it and the results to back it up are key, but not sufficient. Transforming dense, scientific information into a compelling narrative that grabs attention and then getting it in front of the right eyes – potential customers and partners – is critical.`,
                        `For this European company, in an iterative process and working with company principals, we completely revised their technology sales and marketing decks, wrote their first mission statement and tag-lines, and helped connect them with key players in the local pharma and specialty chemicals ecosystems, while highlighting their cost-efficient and green chemistry technology.`,
                        `Our work helped transform their business development strategy, introduced them to wholesalers and directly to pharma companies generating new international sales channels. We assisted in the curation and planning for their first annual conference showcasing their technology differentiation which was founded on science awarded the 2005 Nobel Prize in Chemistry. Result of our efforts were new business opportunities followed by sales of the company’s specialty catalysts to a global distributor and beachheads into the large US pharma marketplace.`
                        
                        ],
                },
        ],

    // ../views/About.vue
        about: {
            images: {
                a: require('../../public/eric.jpg'),    
            },
            lead1: {
                a: `Cambridge Energy Advisors and principal Eric Grunebaum provide a strategic consultancy focused on:`, 
            },
            lead2: {
                a: 
                    {   
                        1:`• developing clean energy, environmental and resource efficiency projects`,
                        2:`• raising investment capital for aligned companies and funds and helping investors source these impact investment opportunities;`,
                        3: `• and providing critical business development strategy for companies and funds working in this space.` 
                    },
                },
            contents: {
                a: `Our work helps move our energy and resource systems towards transformational clean energy, efficiency, environmental and community benefits.`,
                b: `Through Bequia Securities, we connect investors to opportunities allowing family offices, high net-worth individuals, foundations and endowments to catalyze markets and earn returns from systemic changes underway throughout our resource and energy systems.`,
                c: `Our project development work focuses on advancing clean energy, efficiency and environmental projects. When facility owners – whether non-profits, schools or commercial entities – do not have the upfront capital available for otherwise cost-effective projects, we can source impact funding while helping them access tax incentives.`,
                d: `Broad experience and visibility into these connected domains, from project and business development, to communications and fundraising – with both the investor and recipient’s perspectives in mind – provides us with valuable insight into catalyzing energy and environmental systems change as the trajectory for this generational transformation accelerates.`
          }
        },

    // ../views/Events.vue
        events:{
            upcomingEvents: [
                {
                date: 'Oct 6, 2020',
                role: `Curator & Moderator`,
                title: `Flipping the Switch: Are Oil & Gas Companies Evolving, or are they Holding Up Climate Progress? - Boston Area Sustainability Group: Oct. 2020`,
                body: `The spotlight is on oil & gas companies and their progress, or lack-thereof, on working towards decarbonization. Our lead speaker will be Dr. Peter Frumhoff, Director of Science & Policy and Chief Climate Scientist at the Union of Concerned Scientists and coauthor of the annual UCS “Climate Accountability Scorecard”, subtitled “Insufficient Progress from Major Fossil Fuel Companies.”`,
                link: `https://basgdotorg.wordpress.com/calendar/flipping-the-switch-are-energy-and-utility-companies-evolving`
                }
            ],
            priorEvents: [
                {
                date: `2020`,
                role: `Writer`,
                title: `Conservation Law Foundation, Why I Give`,
                body: `A brief essay on my long-standing interest in environmentalism and strong support for the Conservation Law Foundation.`,
                link: `https://www.clf.org/publication/conservation-matters-spring-2020/`
                },
                {
                date: `2019`,
                role: `Curator & Moderator`,
                title: `Owning It! Sustainability and Worker Cooperatives - Boston Area Sustainability Group`,
                body: `An evening featuring leaders in the growing field of worker-owned-cooperatives and employee stock ownership plan companies focused on sustainability.`,
                link: `https://basgdotorg.wordpress.com/archive/owning-it-sustainability-and-worker-cooperatives/`
                },
                {
                date: `2019`,
                role: `Curator & Moderator`,
                title: `Put Your Money Where It Matters: A Practical Intro to Impact Investment for Individuals - Boston Area Sustainability Group`,
                body: ``,
                link: `https://basgdotorg.wordpress.com/archive/put-your-money-where-it-matters/`
                },
                {
                date: `2018`,
                role: `Writer`,
                title: `Brownfields - Boston Area Sustainability Group`,
                body: ``,
                link: `https://basgdotorg.wordpress.com/archive/brownfields/`
                },
                {
                date: `2018`,
                role: `Curator & Speaker`,
                title: `Climate Change Action Panel, Emmanuel College`,
                body: ``,
                link: ``
                },
                {
                date: `2017`,
                role: `Curator & Moderator`,
                title: `Clearing the Air ~ Carbon and Health, Boston Area Sustainability Group`,
                body: ``,
                link: ``
                },
                {
                date: `2016`,
                role: `Curator & Moderator`,
                title: `Carbon Realities, Boston Area Sustainability Group`,
                body: ``,
                link: `https://basgdotorg.wordpress.com/archive/carbon_realities/`
                },
                {
                date: `2016`,
                role: `Curator & Moderator`,
                title: `The Clean Energy Transition, Boston Area Sustainability Group`,
                body: ``,
                link: ``
                },
                {
                date: `2014`,
                role: `Curator & Speaker`,
                title: `Screening “The Last Mountain” and discussion with professor Tina Grotzer, hosted by Harvard Graduate School of Education Green Team, the Office for Sustainability, and the Faculty of Arts and Sciences' Green Program`,
                body: ``,
                link: ` https://green.harvard.edu/events/last-mountain-screening-and-talk`
                },
                {
                date: `2012`,
                role: `Curator & Speaker`,
                title: `Screening “The Last Mountain” and panel on “The True Cost of Energy: Coal”, Hosted by Cambridge City Councilor Marjorie Decker `,
                body: ``,
                link: `www.clf.org/blog/join-clf-at-a-free-screening-of-the-last-mountain-on-wednesday-may-9-in-cambridge-ma/`
                },
                {
                date: `2012`,
                role: `Curator & Speaker`,
                title: `Screening “The Last Mountain”, Sustainability Film Series, Phillips Exeter Academy with Conservation Law Foundation`,
                body: `A brief essay on my long-standing interest in environmentalism and strong support for the Conservation Law Foundation.`,
                link: `www.clf.org/blog/join-clf-at-a-free-screening-of-the-last-mountain-in-exeter-nh-on-may-4th/`
                },
                {
                date: `2009`,
                role: `Writer`,
                title: `“The main reason to raise the gas tax”, OpEd, Boston Globe`,
                body: `OpEd making the environmental and climate case for raising the gas tax.`,
                link: `http://archive.boston.com/bostonglobe/editorial_opinion/oped/articles/2009/05/25/the_main_reason_to_raise_the_gas_tax/`
                },
            ]
        }
    }
})