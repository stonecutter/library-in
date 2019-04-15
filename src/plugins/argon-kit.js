import 'argon-design-system-free/assets/vendor/nucleo/css/nucleo.css';
import 'argon-design-system-free/assets/vendor/font-awesome/css/font-awesome.css';
import '@/assets/scss/argon.scss';
import VueLazyload from 'vue-lazyload';
import globalComponents from './globalComponents';
import globalDirectives from './globalDirectives';

export default {
  install(Vue) {
    Vue.use(globalComponents);
    Vue.use(globalDirectives);
    Vue.use(VueLazyload);
  },
};
