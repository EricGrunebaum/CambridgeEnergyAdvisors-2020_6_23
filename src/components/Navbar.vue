<template>
   <nav>
       <v-container>
            <v-toolbar flat app>
                <v-app-bar-nav-icon class="hidden-md-and-up primary--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-toolbar-title class="text-uppercase hidden-xs-only text-start">
                    <a href="/"><span class="primary--text title text-lowercase">cambridge energy advisors</span></a>
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
            </v-toolbar>
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
                {text: 'projects.', route: '/projects'},
                {text: 'events.', route: '/events'},
            ]
        }
    }   
}
</script>
<style scoped>
    a{
        text-decoration: none;
    }
</style>>
    
