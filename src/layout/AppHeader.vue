<template>
  <header class="header-global">
    <base-nav class="navbar-main" effect="light" expand bgColor="#fff">
      <router-link slot="brand" class="navbar-brand" to="/">
        <img src="../assets/images/header-logo.png" alt="不占座">
      </router-link>
      <div class="row" slot="content-header" slot-scope="{closeMenu}">
        <div class="col-6 collapse-brand">
          <router-link to="/">
            不占座
          </router-link>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>
      <ul class="navbar-nav ml-lg-auto" slot="menus" slot-scope="{closeMenu}" @click="closeMenu">
        <router-link tag="li" v-for="item in navs" :to="item.path" :key="item.path"
                     class="nav-item" exact>
          <a class="nav-link nav-link-icon">
            {{item.text}}
          </a>
        </router-link>
      </ul>
    </base-nav>
  </header>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import BaseNav from '../components/BaseNav.vue';
  import CloseButton from '../components/CloseButton.vue';

  interface INav {
    path: string;
    text: string
  }
  @Component({
    components: {
      BaseNav,
      CloseButton,
    },
  })
  export default class AppHeader extends Vue {
    navs: Array<INav> = [
      {
        path: '/',
        text: '首页',
      },
      {
        path: '/ProductSolutions',
        text: '产品方案',
      },
      {
        path: '/CoreFunctions',
        text: '核心功能',
      },
      {
        path: '/TechnicalSupport',
        text: '技术支持',
      },
      {
        path: '/CooperationCases',
        text: '合作案例',
      },
      {
        path: '/BrandRecognition',
        text: '品牌认可',
      },
      {
        path: '/CompanyVision',
        text: '公司愿景',
      },
      {
        path: '/AboutUs',
        text: '关于我们',
      },
    ]
  }
</script>
<style lang="scss">
  @import "../assets/scss/theme/variables";
  .nav-link {
    border-radius: 0!important;
  }
  .nav-item {
    &.router-link-active .nav-link {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .nav-item {
      &.router-link-active .nav-link {
        border-bottom: 3px $theme-color-yellow solid;
      }
      &:not(.router-link-active) .nav-link {
        border-bottom: 3px transparent solid;
      }
    }
  }
</style>
