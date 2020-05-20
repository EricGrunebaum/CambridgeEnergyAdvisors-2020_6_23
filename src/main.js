import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import AOS from "aos";
import "aos/dist/aos.css";
import { store } from './store/store'

Vue.config.productionTip = false

new Vue({
  store: store,
  created() {
    AOS.init({  });
  },
  router,
  vuetify,
  render: h => h(App),
  
}).$mount('#app')
