<template>
  <div class="seat-label">
    <img src="../assets/images/seat-label.png" alt="座位二维码">
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class SeatLabel extends Vue {
  }
</script>

<style scoped>
  .seat-label > img {
    display: block;
    margin: 0 auto;
    height: 400px;
  }
</style>
