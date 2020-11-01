import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {

    // ../views/Home.vue


        homeContents: [
            {   
                    id: 1,           
                    head: `fundraising & impact investment.`,
                    body: `Our approach to investment focuses on providing genuine value to funds, companies and investors. Impact investment does not mean reducing financial returns to generate positive environmental and social benefits – in fact many studies indicate the reverse is true. Holding the FINRA Series 82 + 63 licenses and working with team of partners to source and vet deals, we connect investors to private market opportunities while sourcing capital for companies and funds focusing on resource efficiency and social benefit.`,
                    source: require(`../../public/trees-blue-sky.jpg`),
                    route: `/about`,
                },
                {
                    id: 2,
                    head: `project development ~ solar,  commercial energy efficiency & environmental justice.`,
                    body: `Our project development work focuses on developing projects and bringing catalytic funding to commercial scale solar and energy efficiency retrofits. On a pro bono basis, we’ve also advanced a brownfield restoration project in an environmental justice community. Working with commercial and non-profit owners, we bring technical expertise, sources of funding when needed, visioning and stakeholder engagement to advance projects that increase sustainability and financial returns.`,
                    source: require(`../../public/energy_circle.jpg`),
                    route: `/about`
                },
                {
                    id: 3,
                    head: `business development ~ clean energy & resource efficiency.`,
                    body: `Our approach to business development is grounded in a 20 year foundation of creating science communications via documentary films and for science and natural history museums. Communicating your company, fund or project’s purpose and narrative powerfully and with an economy of words is critical to engaging people, whether they be prospective investors, partners or customers.`,
                    source: require(`../../public/office_window.jpg`),
                    route: `/about`
            },
            
        ],

        cases: [
        {
          title: `case study: commercial scale solar tax equity & bond fund.`,
          body: `For this startup commercial solar fund, we helped expand the investor base, bringing in our network of high net-worth, family office and foundation investors, raising a total of $2.25 million. The funds we raised helped build approximately 1 megawatt of rooftop solar for a broad spectrum of non-profits, schools, houses of worship, REITs and other businesses, while generating great returns and tax benefits for investors.`,
          route: `/projects`,
        },
        {
          title: `case study: commercial solar in harvard square, cambridge, ma`,
          body: `This commercial solar project on a significant block in Harvard Square has three unique phases – first are traditional flat roof solar arrays; second will be a solar array on a rooftop structure visible from the surrounding business district; and finally, translucent solar panels will be mounted above a dramatic atrium space, generating clean power while also providing shading to reduce heat gain making the space more functional year-round.`,
          route: `/projects`,
      
        },
        {
          title: `case study: european pharma catalyst/green chemistry firm`,
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
                 title: `Commercial Scale Solar Tax Equity & Bond Fund`,
                 photo: require('../../public/commercial-bldg-solar.jpg'),
                 photo2: require('../../public/solar-workers.jpg'),
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
                photo: require('../../public/engine-1.jpg'),
                photo2: require('../../public/series-c-engine.jpg'),
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
                title: `Commercial Solar in Harvard Square, Cambridge, MA `, 
                photo: require('../../public/solar-array.jpg'),
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
              photo: require('../../public/jerrys-1948-11.jpg'),
              photo2: require('../../public/mayor.jpg'),
              photo2caption: `Cambridge Mayor Sumbul Siddiqui speaks with volunteers at the annual Jerry’s Pond Earth Day clean-up`,
              headers: [ ``, ``, ``, ``, ``, `Jerry’s Pond Concept Plan`, ``],
              paragraphs: [
                      `Once an open-pit mine where rich clay deposits were extracted until the late 1800s, when depleted, “Jerry’s Pit” filled with water and became a popular swimming hole for the neighboring working-class community for almost 100 years. However in 1961 it was fenced-off and public access has been denied for 60 years while large portions of the adjacent land were polluted by the infamous W.R. Grace chemical company.`,
                      `Today, there are nearly 4,000 affordable housing residents living across the street so restoring the site for safe public access while enhancing the natural ecosystem provides a generational opportunity for a new reservation and pond within a significant environmental justice community. While fences have protected the community from asbestos left in the soil by W.R Grace, they have left a permanent blight in a neighborhood now settled by an extremely diverse population, many of whom do not have easy access to natural areas further afield.`,
                      `Over the last half-century, wildlife has flourished around the pond and surrounding land and a sensitive, well-considered re-opening of the site via boardwalks and with the addition of an expanded wetland, off-road bike-way and nature paths, could create an unusual opportunity for enhancing habitat and reconnecting the urban community with nature. As a cofounder of the friends group, I have led on a pro bono basis, the creation of a conceptual plan with support from donated landscape design visualizations. Our concept for the site has now gained the attention of city government, including the Mayor, as well as important environmental NGOs.`,
                      `The broader geography of what is now called “Jerry’s Pond” was once referred to as “The Great Swamp” – a place rich in wetlands and bird-life which supported a fishery that lent its name to an area known today as Alewife. With the growing impacts of climate change – heat island, air pollution, sea level rise and storm surge risk – the pond area can play an important role. Providing space for the planting of many trees and expanding a diverse wetland while maintaining flood water storage could help alleviate these problems while making the community feel welcome as well.`,
                      `In addition to its siting as the “backyard” for thousands of affordable housing residents, Jerry’s Pond and its environs are steps away from the Red Line, Boston’s main subway branch and adjacent to one of the nation’s most popular rails-to-trails. Thousands of commuters pass by via subway, bicycle and on the busy roads heading through or to the large new commercial buildings and thousands of apartments built in adjacent formerly industrial lands. There are increasingly rare opportunities to create new open space and natural areas and it is an absolutely unique opportunity to find an “extra pond”, even one as neglected as this, in the middle of the city, where even a great blue heron rookery has found a home for four summers running.`,
                      `<strong>Left:</strong> Conditions today along Rindge Ave. in North Cambridge. Concrete, chain link fencing and no-trespassing signs across the street from approximately 4,000 affordable housing residents in the three Rindge Towers, Jefferson Park and other affordable housing properties along Rindge Ave. A former mine pit which awaits transformation and re-naturalization.`,
                      `<strong>Right:</strong> Conceptual plan for the Rindge Ave. edge of Jerry’s Pond. Additional capping with clean soil to create a restored, re-naturalized and accessible linear park providing a more diverse wetland ecosystem with a curving, gradual pond bank, additional space for tree planting to mitigate heat-island impacts, improve air quality and add habitat, a meandering walking path to reconnect residents with nature, seating for observation of the annual heron rookery and other species around the pond, a sidewalk now separated from traffic, a two-way off-road bike path and swales for rainfall absorption into the water table.<br><small>3D visualization created by Anna Curtis-Heald [Drag arrow to scroll] for Friends of Jerry’s Pond</small>`
                      ],
            },
             {
                id: 5, 
                color: 'blue',                
                category: 'business development.',
                title: `European Pharma Catalyst/Green Chemistry Firm`, 
                photo: require('../../public/molecules.jpg'),
                photo2: require('../../public/apeiron.jpg'),
                paragraphs: [
                        `For this EU-based company, entering the US market through the globally important Kendall Square, Cambridge, MA pharma and life-sciences cluster was the key to gaining market share for its world-leading catalysts which reduce the need for toxic solvents and energy inputs required to manufacture pharmaceuticals.`,
                        `Entering foreign markets skillfully requires clear communications, access to primary beachhead markets, sales channels and a presence in the region. The raw materials of a great technology, the science undergirding it and the results to back it up are key, but not sufficient. Transforming dense, scientific information into a compelling narrative that grabs attention and then getting it in front of the right eyes – potential customers and partners – is critical.`,
                        `For this European company, in an iterative process and working with company principals, we completely revised their technology sales and marketing decks, wrote their first mission statement and tag-lines, and helped connect them with key players in the local pharma and specialty chemicals ecosystems, while highlighting their cost-efficient and green chemistry technology.`,
                        `Our work helped transform their business development strategy, introduced them to wholesalers and directly to pharma companies generating new international sales channels. We assisted in the curation and planning for their first annual conference showcasing their technology differentiation which was founded on science awarded the 2005 Nobel Prize in Chemistry. Result of our efforts were new business opportunities followed by sales of the company’s specialty catalysts to a global distributor and beachheads into the large US pharma marketplace.`
                        
                        ],
                },
                
             {
                id: 6, 
                color: 'blue',                
                category: 'business development.',
                title: `Clean Energy Incubator Expansion`, 
                photo: require('../../public/podium9.jpg'),
                photo2: require('../../public/crowd.jpg'),
                paragraphs: [
                        `North America’s largest business incubator 100% focused on piloting and commercializing hardware solutions addressing resource efficiency challenges (aka cleantech) began when four MIT grads found a garage to share. What started as a simple space-sharing enterprise organically grew over five years to a thriving community of over 30 startup companies sharing an industrial facility split between lab space and shared desk areas.`,
                        `Expanding into the incubator’s third facility, a 30,000 square foot factory floor, increasing interaction and curated collaboration, support, guidance and mentoring from strategic multinational partners, as well as state economic development agencies, clean energy thought-leaders and investors helped create a vibrant and successful community of startups in a challenging sector, one which requires long-timelines for iterative hardware piloting and market development.`,
                        `The demand from the cleantech startup community kept outpacing the available space and so the incubator began planning its fourth facility – a tripling in scale into a transformed factory building. To assist in this goal they sought our assistance in an effort to broaden their base of strategic partners and foundation supporters. Our work focused on helping refine the narrative to generate interest from prospective partners, both companies and foundations, and then bringing these prospects into the incubator to consider partnering and sponsorship opportunities. Prospective companies we brought in included: Akamai Technologies, SunPower Corporation, EMC, Prodrive Technologies, NRG, Anbaric Development Partners along with foundations including the Merck Family Fund and The Boston Foundation.`,
                        `Having now completed its expansion into a renovated 100,000 square feet facility – a dramatically transformed manufacturing building – the incubator has succeeded as a world-leading catalyst for transforming energy and resource systems by supporting and nurturing the entrepreneurs and companies spearheading this effort. Creating new technologies and new companies, new markets and expanded employment in this transformative sector, the incubator has become an important engine for driving worldwide technology and systems change.`
                        
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
                        1:`developing clean energy, environmental and resource efficiency projects`,
                        2:`raising investment capital for aligned companies and funds and helping investors source these impact investment opportunities;`,
                        3: `and providing critical business development strategy for companies and funds working in this space.` 
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
                color: `secondary`,
                date: 'Oct 6, 2020',
                role: `Curator & Moderator`,
                title: `A Burning Question: Are Oil & Gas Companies Really Evolving?`,
                host: `Boston Area Sustainability Group`,
                body: `The spotlight is on oil & gas companies and their progress, or lack-thereof, in transforming their businesses towards decarbonization. Our lead speaker will be Dr. Peter Frumhoff, Director of Science & Policy and Chief Climate Scientist at the Union of Concerned Scientists and coauthor of the annual UCS “Climate Accountability Scorecard”, subtitled “Insufficient Progress from Major Fossil Fuel Companies.”`,
                link: `https://basgdotorg.wordpress.com/calendar/a-burning-question/`
                }
            ],
            priorEvents: [
                {
                color: 'primary',
                date: `2020`,
                role: `Author`,
                title: `Why I Give`,
                host: `Conservation Law Foundation`,
                body: `A brief essay on my life-long environmentalism and appreciation for the Conservation Law Foundation’s critical work in New England to protect, preserve and improve our region’s natural areas along with the broader community’s access to them.`,
                link: `https://www.clf.org/how-you-can-help/why-we-give/eric-grunebaum/`
                },
                {
                color: 'primary',
                date: `2019`,
                role: `Speaker`,
                title: `Clean Energy Climate Solutions Panel`,
                host: `Solidarity for Climate Justice`,
                body: `Gathering of physicians and health professionals asking: What would it look like to make change and get closer to a sustainable and just world focusing on energy, food, building decarbonization and environmental justice.`,
                link: `https://basgdotorg.wordpress.com/archive/owning-it-sustainability-and-worker-cooperatives/`
                },
                {
                color: 'primary',
                date: `2019`,
                role: `Curator & Moderator`,
                title: `Owning It! Sustainability and Worker Cooperatives`,
                host: `Boston Area Sustainability Group, Cosponsored by Conscious Capitalism Boston`,
                body: `An evening featuring thought leaders and leading enterprises in the growing field of worker-owned-cooperatives and employee stock ownership plan companies focused on sustainability.`,
                link: `https://basgdotorg.wordpress.com/archive/owning-it-sustainability-and-worker-cooperatives/`
                },
                {
                color: 'primary',
                date: `2019`,
                role: `Respondent & Rapporteur`,
                title: `Blue-Green Infrastructure Colloquium`,
                host: `Lincoln Institute of Land Policy`,
                body: `Two day conference with practitioners and academics presenting and discussing nine early stage case assessments of leading, national, blue-green infrastructure efforts. Conference served as a “proof of concept” for a larger symposium on infrastructure, land and water in the age of climate change.`,
                link: `Link> https://www.lincolninst.edu/`
                },
                {
                color: 'primary',
                date: `2019`,
                role: `Curator & Moderator`,
                title: `Put Your Money Where It Matters: A Practical Intro to Impact Investment for Individuals `,
                host: `Boston Area Sustainability Group`,
                body: `How can we as individuals or startups seeking funding participate in the rapidly growing impact investment ecosystem? This event featured first-hand, boots-on-the-ground stories of impact investment successes along with short pitches by principals of active offerings for aspiring impact investors.`,
                link: `https://basgdotorg.wordpress.com/archive/put-your-money-where-it-matters/`
                },
                {
                color: 'primary',
                date: `2018`,
                role: `Speaker`,
                title: `Brownfields: Rewriting Industrial Legacy from Brown to Green`,
                host: `Boston Area Sustainability Group`,
                body: `New England has an important industrial legacy, but one that has left behind a burden of contaminated land and water. These brownfields impede the ability of communities to grow and prosper, however successful clean-up and reinvestment in a site increases local tax base, spurs economic growth, reactivates existing infrastructure and removes pressure from open land, while improving and protecting the environment.`,
                link: `https://basgdotorg.wordpress.com/archive/brownfields/`
                },
                {
                color: 'primary',
                date: `2018`,
                role: `Speaker`,
                title: `Climate Change Action Panel`,
                host: `Emmanuel College`,
                body: `A documentary film screening followed by a panel focused on how students and faculty at this small liberal arts college in Boston can translate their concerns about climate change into action.`,
                link: ``
                },
                {
                color: 'primary',
                date: `2018`,
                role: `Speaker`,
                title: `Solar for Houses of Worship`,
                host: `Jewish Climate Action Network`,
                body: `Presentation on how houses of worship can move forward with solar projects in sync with their moral position in communities and how sourcing impact investment funds can help provide the upfront capital when needed.`,
                link: `https://basgdotorg.wordpress.com/archive/carbon_realities/`
                },
                {
                color: 'primary',
                date: `2017`,
                role: `Curator & Catalyst`,
                title: `“Climate, air quality, and health benefits of a carbon fee-and-rebate bill in Massachusetts”`,
                host: `Harvard Chan School of Public Health, Environmental Research Letters`,
                body: `Study linking a proposed carbon pricing policy in Massachusetts with corollary health benefits. I initiated the study working with Harvard T. H. Chan School of Public Health scientists, collaborating with state legislators proposing the new policy, raising the initial funding and organizing the study’s public release at an event at The Boston Foundation.`,
                link: `https://www.wwlp.com/news/study-adds-fuel-to-debate-over-carbon-fees/`
                },
                {
                color: 'primary',
                date: `2017`,
                role: `Curator & Moderator`,
                title: `Clearing the Air: Carbon and Health`,
                host: `Boston Area Sustainability Group`,
                body: `Exploring the connections between health, climate change and fossil fuel burning providing participants with the tools to speak to and educate the public, employers, customers, friends, families… and especially elected officials on the topic.`,
                link: `https://basgdotorg.wordpress.com/archive/clearing-the-air-carbon-and-health/`
                },
                {
                color: 'primary',
                date: `2017`,
                role: `Speaker`,
                title: `Screening “The Last Mountain” and discussion with WVa native and mountaintop removal activist Bo Webb.`,
                host: `Green Cambridge, Somerville Climate Action, Mothers Out Front, Groundwork Somerville, 350MA and Fossil Free Somerville.`,
                body: `Screening hosted by the leading place-based environmental organization in Cambridge which took place in neighboring Somerville and in support of both cities’ transitions towards greening their electricity supplies.`,
                link: `https://www.facebook.com/events/the-rockwell/the-last-mountain-film-screening/130293991027053/`
                },
                {
                color: 'primary',
                date: `2017`,
                role: `Curator`,
                title: `Financial Innovation as the Key to Clean Energy & Efficiency Transformation`,
                host: `Cambridge Innovation Center, Green Innovation Industry Night`,
                body: `Clean energy and efficiency practices are often viewed as dependent on technological innovation, yet in an era of established technologies, the real catalyst is financial and business model innovation: using financing mechanisms and impact capital to turn stalled initiatives and “nice­to­haves” into actionable projects.`,
                link: `https://environment.harvard.edu/events/2017-10-11-201500/cic-green-innovation-industry-night`
                },
                {
                color: 'primary',
                date: `2017`,
                role: `Curator & Moderator`,
                title: `Let’s Get Local: Attracting Capital to Local Energy Projects`,
                host: `Climate Action Business Association`,
                body: `Encouraging and empowering people to act locally binds together the fabric of a community. People build thriving communities when they invest locally and whole communities benefit when small businesses and investors recirculate their dollars in the local economy. A panel discussion on moving capital to local energy projects and building value in local economies.`,
                link: `https://www.greentownlabs.com/event/lets-get-local-attracting-capital-local-energy-projects/`
                },
                {
                color: 'primary',
                date: `2016`,
                role: `Curator & Moderator`,
                title: `Carbon Realities`,
                host: `Boston Area Sustainability Group, co-hosted by Boston College Center for Corporate Citizenship and Sustainable Roundtable, Inc.`,
                body: `Carbon emissions play a major role in causing climate change yet the costs of burning fossil fuels are externalized by emitters. A more effective accounting for the impact of greenhouse gas emissions on our world would realign incentives towards solving the challenge of climate change.`,
                link: `https://basgdotorg.wordpress.com/archive/carbon_realities/`
                },
                {
                color: 'primary',
                date: `2016`,
                role: `Curator & Moderator`,
                title: `Let’s Get Local: Attracting Capital to Local Energy Projects`,
                host: `Climate Action Business Association`,
                body: `Encouraging and empowering people to act locally binds together the fabric of a community. People build thriving communities when they invest locally and whole communities benefit when small businesses and investors recirculate their dollars in the local economy. A panel discussion on moving capital to local energy projects and building value in local economies.`,
                link: `https://www.greentownlabs.com/event/lets-get-local-attracting-capital-local-energy-projects/`
                },
                {
                color: 'primary',
                date: `2016`,
                role: `Curator & Speaker`,
                title: `The Clean Energy Transition`,
                host: `Boston Area Sustainability Group, co-hosted by the U.Mass. Boston Sustainable Solutions Lab and the Conservation Law Foundation`,
                body: `Screening of the 2011 Sundance Film Festival pick, “The Last Mountain” followed by presentations on the realities of the fossil fuel economy and how we as citizens and communities can help accelerate the transition to a clean energy economy; the challenges triggered by the transition; and how communities, organizations and each of us can participate.`,
                link: `https://basgdotorg.wordpress.com/archive/the-clean-energy-transition/`
                },
                {
                color: 'primary',
                date: `2015`,
                role: `Speaker`,
                title: `Screening “The Last Mountain”`,
                host: `Old Oak Dojo`,
                body: `Boston’s Old Oak Dojo is a unique space “where neighbors gather to rediscover how to create healthy and resilient communities – an experiment in dissolving the boundary between public and private providing a space for community to meet, learn, eat, celebrate, and play – and thereby restore our wholeness as citizens.” The Dojo was one of the first dozen buildings in the world to be certified by the Living Building Challenge.`,
                link: `https://oldoakdojo.com/event/documentary-the-last-mountain/`
                },
                {
                color: 'primary',
                date: `2015`,
                role: `Speaker`,
                title: `Screening “The Last Mountain"`,
                host: `Synapse Energy Economics`,
                body: `Screening at Synapse Energy Economics, a research and consulting firm specializing in energy, economic and environmental topics and a leader in providing rigorous analysis of the electric power and natural gas sectors for public interest and governmental clients.`,
                link: `www.synapse-energy.com`
                },
                {
                color: 'primary',
                date: `2014`,
                role: `Curator & Speaker`,
                title: `Screening “The Last Mountain” and discussion with professor Tina Grotzer`,
                host: `Harvard Graduate School of Education Green Team, the Office for Sustainability, and the Faculty of Arts and Sciences' Green Program`,
                body: `Screening and Q+A with Professor Grotzer a cognitive and learning scientist who’s work at Harvard Education School’s Project Zero focuses on learning in formal and informal contexts, in particular on science education, sustainability and climate.`,
                link: `https://green.harvard.edu/events/last-mountain-screening-and-talk`
                },
                {
                color: 'primary',
                date: `2012`,
                role: `Curator & Speaker`,
                title: `Screening “The Last Mountain” and panel on “The True Cost of Energy: Coal”`,
                host: `Hosted by Cambridge City Councilor Marjorie Decker`,
                body: `Along with Cambridge City Councilor Marjorie Decker (now a State Representative) I co-organized this screening and discussion to share knowledge on the true costs of energy from coal. The discussion focused on health, human rights and environmental impacts while also touching on clean energy alternatives.`,
                link: `http://environment.harvard.edu/events/2012-05-09/true-cost-energy-coal`
                },
                {
                color: 'primary',
                date: `2012`,
                role: `Curator & Speaker`,
                title: `Screening “The Last Mountain”`,
                host: `Sustainability Film Series, Phillips Exeter Academy with Conservation Law Foundation`,
                body: `Screening in support of Conservation Law Foundation’s work to secure a clean energy future by completing the transition to a coal-free New England. With cleaner, cheaper alternatives driving coal out of the market and old coal plants closing their doors, New Hampshire was a critical battleground for CLF’s work, with (at the time of the event) two costly old coal power plants being kept alive by state policies and ratepayer subsidies.`,
                link: `www.clf.org/blog/join-clf-at-a-free-screening-of-the-last-mountain-in-exeter-nh-on-may-4th/`
                },
                {
                color: 'primary',
                date: `2009`,
                role: `Author`,
                title: `“The main reason to raise the gas tax”`,
                host: `Boston Globe OpEd`,
                body: `OpEd making the powerful environmental and climate case for raising the gas tax to fund transportation infrastructure while encouraging the gradual transition to more efficient vehicles and lower carbon transportation.`,
                link: `http://archive.boston.com/bostonglobe/editorial_opinion/oped/articles/2009/05/25/the_main_reason_to_raise_the_gas_tax/`
                },
            ]
        }
    }
})