<template>
    <div class="text-center">
        <div class="d-flex flex-column"
        @click="sheet = !sheet">
            <span class="mt-4 mb-2"> 
                <strong> 
                <v-icon>
                    mdi-chevron-up
                </v-icon>
                </strong>
            </span>
            <span>
                <strong>Contact</strong>
            </span>
        </div>
    <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="">
        <v-icon
          class="mt-6"
          text
          color="red"
          @click="sheet = !sheet"
        >mdi-chevron-down</v-icon>
        <v-container class="px-8 d-flex flex-column text-center">
            <v-row class="text-left">
                <span class="text-white">Cambridge Energy Advisors</span>
                 <p class="grey-text text-lighten-4">
                    Principal: Eric Grunebaum <a href="mailto:eric@cambridgeenergyadvisors.com"><v-icon>mdi-email</v-icon></a><br>
                    M: 617-304-5824 <a href="tel:617-304-5824"><v-icon>mdi-phone</v-icon></a><br>                                        
                </p>
            </v-row>
            <v-divider></v-divider>
            <v-row class="py-4 text-left">
                 <p class="grey-text text-lighten-4">
                    Cambridge Innovation Center<br>
                    1 Broadway, 14th Floor<br>
                    Cambridge, MA 02142
                </p>
            </v-row>
            <v-divider></v-divider>
            <v-row class="py-4 text-left">
                <p class="grey-text text-lighten-4">
                    Securities offered through:<br> 
                    Bequia Securities, LLC Member FINRA/SIPC<br>
                    22 Mill St, Suite 303, Arlington, MA 02476 <br>
                    Tel: 617-209-2104                                       
                </p>
            </v-row>
    </v-container>
      </v-sheet>
    </v-bottom-sheet>
    </div>
</template>
<script>
export default {
    data: () => ({
        sheet: false
    })
    
}
</script>
<style scoped>
    a{
        text-decoration: none;
    }
</style>