<template>
  <div class="function-title">{{title}}</div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class FunctionTitle extends Vue {
    @Prop() private title!: string;
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/theme/variables";
  .function-title {
    position: relative;
    padding: 10px 0;
    font-size: 24px;
    display: flex;
    align-items: center;
    &::before {
      content: '';
      display: block;
      width: 1em;
      height: 1em;
      background: $theme-color-yellow;
      margin-right: .5em;
      font-weight: 700;
    }
  }
</style>
