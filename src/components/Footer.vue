<template>
    <v-footer
      padless
      class="font-weight-light primary"
    >
    <!-- Social media? -->
    <v-container class="d-none d-sm-flex text-center">
            <v-col class="text-left">
                <span class="text-white">Cambridge Energy Advisors</span>
                 <p class="grey-text text-lighten-4">
                    Principal: Eric Grunebaum 
                    <br>
                    M: 617-304-5824 
                </p>
                <a href="mailto:eric@cambridgeenergyadvisors.com"><v-icon>mdi-email</v-icon></a>
                <a href="tel:617-304-5824"><v-icon>mdi-phone</v-icon></a>
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
                    Tel: 617-209-2104                                       
                </p>
            </v-col>
    </v-container>
    <mobile-footer class="hidden-sm-and-up"></mobile-footer>
    <v-container class="d-flex text-center">
        <v-col>{{ new Date().getFullYear() }} — <strong>Cambridge Energy Advisors</strong></v-col>
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

</style>