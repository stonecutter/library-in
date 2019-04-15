import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/ProductSolutions',
      name: 'ProductSolutions',
      component: () => import('./views/ProductSolutions.vue'),
    },
    {
      path: '/CoreFunctions',
      name: 'CoreFunctions',
      component: () => import('./views/CoreFunctions.vue'),
    },
    {
      path: '/TechnicalSupport',
      name: 'TechnicalSupport',
      component: () => import('./views/TechnicalSupport.vue'),
    },
    {
      path: '/CooperationCases',
      name: 'CooperationCases',
      component: () => import('./views/CooperationCases.vue'),
    },
    {
      path: '/BrandRecognition',
      name: 'BrandRecognition',
      component: () => import('./views/BrandRecognition.vue'),
    },
    {
      path: '/CompanyVision',
      name: 'CompanyVision',
      component: () => import('./views/CompanyVision.vue'),
    },
    {
      path: '/AboutUs',
      name: 'AboutUs',
      component: () => import('./views/AboutUs.vue'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});
