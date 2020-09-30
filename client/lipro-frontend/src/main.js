import Vue from 'vue';
import App from './App.vue';
import VueMaterial from 'vue-material';
import router from './router';

import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import './assets/style.css';
import VueResource from "vue-resource";


Vue.config.productionTip = false;

Vue.use(VueResource)
Vue.use(VueMaterial);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
