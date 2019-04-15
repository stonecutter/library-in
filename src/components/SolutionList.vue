<template>
  <div class="solution-list">
    <div v-for="(item, index) in solutionItems" :key="index" class="solution-item">
      <div class="title-row">
        <img :src="item.iconSrc" :alt="item.title" class="icon">
        <div class="text-wrapper">
          <div class="title">{{item.title}}</div>
          <div class="sub-title">{{item.subTitle}}</div>
        </div>
      </div>
      <div class="intro-row text-wrapper">
        <div class="chinese">{{item.chineseIntro}}</div>
        <div class="english">{{item.englishIntro}}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class SolutionList extends Vue {
    @Prop() private solutionItems!: Array<buzhanzuo.ISolutionItem>;
  }
</script>

<style scoped lang="scss">
  $icon-width: 48px;
  $icon-height: 48px;
  .solution-item {
    padding: 20px 0;
    .text-wrapper {
      padding: 0 16px;
    }

    .title-row {
      display: flex;
      align-items: center;
      padding: 12px 0;
      .icon {
        display: block;
        width: $icon-width;
        height: $icon-height;
      }
      .title {
        font-weight: 900;
        font-size: 24px;
      }
      .sub-title {
        font-size: 16px;
      }
    }

    .intro-row {
      margin-left: $icon-width;
      .chinese {
        font-size: 18px;
        padding: 10px 0;
      }
      .english {
        font-size: 16px;
        padding: 12px 0;
      }
    }
  }
</style>
