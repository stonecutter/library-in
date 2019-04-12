import Vue from 'vue';
import App from './App.vue';
import router from './router';
// @ts-ignore
import Argon from './plugins/argon-kit';

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
