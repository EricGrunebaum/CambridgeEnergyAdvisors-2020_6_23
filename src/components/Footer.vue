<template>
    <v-footer
      padless
      class="font-weight-light primary justify-center"
    >
    <!-- Social media? -->
    <v-container class="d-none d-sm-flex text-center main-text">
            <v-col class="text-left">
                <span class="text-white">Cambridge Energy Advisors</span>
                 <p class="grey-text text-lighten-4">
                    Principal: Eric Grunebaum  
                </p>
                <a href="tel:617-304-5824"><v-icon>mdi-phone</v-icon></a>
                <a href="mailto:eric@cambridgeenergyadvisors.com"><v-icon>mdi-email</v-icon></a>
                <a target="_blank" href="https://www.linkedin.com/in/ericgrunebaum/"><v-icon>mdi-linkedin</v-icon></a>
            </v-col>
            <v-col class="text-left">
                 <p class="grey-text text-lighten-4">
                    Cambridge Innovation Center<br>
                    1 Broadway, 14th Floor<br>
                    Cambridge, MA 02142
                </p>
            </v-col>
            <v-col class="text-left">
                <p class="grey-text text-lighten-4">
                    Securities offered through:<br> 
                    Bequia Securities, LLC Member FINRA/SIPC<br>
                    22 Mill St, Suite 303, Arlington, MA 02476 <br>
                    
                    <a href="tel:617-209-2104"><v-icon>mdi-phone</v-icon></a>
                    <a href="mailto:eric.grunebaum@bequiasecurities.com"><v-icon>mdi-email</v-icon></a>
                </p>
                <a style="color: black;" target="_blank" href="https://brokercheck.finra.org/individual/summary/6593435">Broker Check</a>
            </v-col>
    </v-container>
    <mobile-footer  class="hidden-sm-and-up"></mobile-footer>
    <v-container class="d-flex text-center flex-column">
        <v-col> &copy; {{ new Date().getFullYear() }} — <strong>Cambridge Energy Advisors</strong></v-col>
        <p class="fine-print-m grey-text text-lighten-4 hidden-sm-and-up"><em>Cambridge Energy Advisors is not an investment advisor and does not provide investment advice. All securities-related activities are conducted by Eric Grunebaum, a registered representative of Bequia Securities LLC, Member FINRA/SIPC.</em></p>
        <p class="fine-print grey-text text-lighten-4 hidden-xs-only"><em>Cambridge Energy Advisors is not an investment advisor and does not provide investment advice. All securities-related activities are conducted by Eric Grunebaum, a registered representative of Bequia Securities LLC, Member FINRA/SIPC.</em></p>
    </v-container>
    
    </v-footer>
</template>
<script>
import MobileFooter from './MobileFooter'
export default {
    components:{
        'mobile-footer': MobileFooter
    }
}
</script>
<style scoped>
    .main-text {
        font-size: 1.15rem
    }

    .fine-print-m {
        font-size: .75rem;
    }
    .fine-print {
        font-size: .95rem;
    }
</style>