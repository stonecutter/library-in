<template>
  <div class="mini-program-operation-step-list">
    <div v-for="(item, index) in miniProgramOperationStepItems" :key="index"
         class="mini-program-operation-step-item">
      <img :src="item.iconSrc" :alt="item.name" class="screen-shot">
      <div class="name">{{item.name}}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class MiniProgramOperationStepList extends Vue {
    @Prop() private miniProgramOperationStepItems!: Array<buzhanzuo.IMiniProgramOperationStepItem>
  }
</script>

<style scoped lang="scss">
  .mini-program-operation-step-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .mini-program-operation-step-item {
      width: 240px;
      padding: 0 20px;
      .screen-shot {
        display: block;
        width: 100%;
      }
      .name {
        font-size: 20px;
        text-align: center;
        padding-top: .5em;
      }
    }
  }
</style>
