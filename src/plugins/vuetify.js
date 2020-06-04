import Vue from 'vue';
import Vuetify from 'vuetify/lib';


Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    
      },
    // this is the spot to modify
    
      theme: {
        themes: {
          light: {
            // primary: '#9ccc65', ORIGINAL
            primary: '#8dcc65',
            secondary: '#4fc3f7'
          }
        }
      }
});
