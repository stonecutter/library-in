<template>
  <div id="app">
    <AppHeader></AppHeader>
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <router-view/>
      </fade-transition>
    </main>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  // @ts-ignore
  import { FadeTransition } from 'vue2-transitions';
  import AppHeader from './layout/AppHeader.vue';

  @Component({
    components: {
      AppHeader,
      FadeTransition,
    },
  })
  export default class App extends Vue {
  }
</script>

<style lang="scss">
  body {
    min-height: 100vh;
    color: #000 !important;
    font-size: 16px;
  }
</style>
