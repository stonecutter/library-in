<template>
  <div class="advantage-list">
    <div v-for="(advantageItem, advantageIndex) in advantageItems" :key="advantageIndex"
         class="advantage-item">
      <div class="title">
        {{advantageItem.title}}
      </div>
      <div class="detail-list">
        <div v-for="(detailItem, detailIndex) in advantageItem.details" :key="detailIndex"
             class="detail-item">
          {{detailItem}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
  export default class AdvantageList extends Vue {
    @Prop() private advantageItems!: Array<buzhanzuo.IAdvantageItem>;
  }
</script>

<style scoped lang="scss">
  $dot-width: 16px;
  $dot-size: 4px;
  $title-line-height: 1.5;
  .advantage-list {
    padding: 60px 12px;
    background: url(/src/assets/images/background-bookshelf-filled-with-books.jpg) center center / cover no-repeat;

    .advantage-item {
      padding: 20px 0;

      .title {
        font-size: 24px;
        font-weight: 900;
        position: relative;
        padding-left: $dot-width;
        line-height: $title-line-height;

        &::before {
          content: '';
          display: block;
          width: $dot-size;
          height: $dot-size;
          position: absolute;
          background: #000;
          border-radius: 50%;
          left: calc((#{$dot-width} - #{$dot-size}) / 2);
          top: calc(#{$title-line-height / 2}em);
          transform: translateY(-50%);
        }
      }

      .detail-list {
        margin: 12px 0 0 $dot-width;
        font-size: 18px;
      }
    }
  }
</style>
