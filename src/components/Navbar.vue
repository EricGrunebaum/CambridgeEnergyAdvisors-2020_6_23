<template>
   <nav>
       <v-container>
            <v-app-bar flat app prominent light absolute="" style="background-color: white; margin: 2rem"> 
                <v-app-bar-nav-icon class="hidden-md-and-up primary--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title class="text-uppercase hidden-xs-only text-start">
                    <div id="logo"><a href="/"><v-img class="" :src="logo" max-height="120"></v-img></a></div>
                    <!-- <a href="/"><div class="logo"><span class="primary--text text-lowercase">cambridge energy advisors.</span></div></a> -->
                </v-toolbar-title>
                <v-toolbar-title class="text-uppercase hidden-sm-and-up text-start">
                    <div><a href="/"><v-img class="" :src="logoMobile" max-height="120"></v-img></a></div>
                    <!-- <a href="/"><div class="logo"><span class="primary--text text-lowercase">cambridge energy advisors.</span></div></a> -->
                </v-toolbar-title>
                
                <v-spacer></v-spacer>
                <div class="hidden-sm-and-down">
                    <v-tabs 
                        light
                        right
                        class=""
                    >
                        <v-tab v-for="link in links" :key="link.text" router :to="link.route" class="text-lowercase">
                        {{ link.text }}
                        </v-tab>
                       
                    </v-tabs>
                </div>
            </v-app-bar>
        </v-container>
            <v-navigation-drawer app  v-model="drawer" nav>
                 <v-list-item>
                    <v-list-item-content>
                    <v-list-item-title class="text-lowercase">
                        Cambridge
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-lowercase">
                        Energy Advisors
                    </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>

      <v-divider></v-divider>

                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-content>
                            <v-list-item-title class="text-center primary--text">
                                {{ link.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="justify-center">
                        <a href="mailto:egrunebaum@aol.com"><v-icon class="primary--text">mdi-email-send-outline</v-icon></a>
                        <a href="tel:617-304-5824"><v-icon class="primary--text">mdi-phone</v-icon></a>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
   </nav>
</template>
<script>
export default {
    data(){
        return {
            drawer: false,
            links: [
                {text: 'home.', route: '/'},
                {text: 'about us.', route: '/about'},
                {text: 'case studies.', route: '/projects'},
                {text: 'events.', route: '/events'},
            ],
            logo: require('../../public/cea-logo.png'),
            logoMobile: require('../../public/cea-logo-mobile.png'),
            
            
        }
    }   
}
</script>
<style scoped>
    
    #logo{
        margin-left: 2rem;
    }
    .logo {
        background-image: url('../../public/CEA1-2.png');
        min-height: 120px;
        min-width: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }

    a{
        text-decoration: none;
        
    }

</style>>
    
