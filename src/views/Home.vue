<template>
  <div class="home">
    <div class="title-wrapper">
      <div class="chinese">关于不占座</div>
      <div class="english">About Library-in</div>
    </div>
    <div class="content-wrapper">
      <div class="chinese">
        <div class="question">
          当我们引进座位管理系统的时候，
          究竟是为了解决什么问题？
        </div>
        <div class="answer">
          座位管理系统是为了解决占座问题而生，
          而不是合理占座的保护伞。
        </div>
      </div>
      <div class="english">
        <div class="question">
          When we introduced the seat management system, what was the problem?
        </div>
        <div class="answer">
          The seat management system is designed to
          solve the problem of seating, rather than a
          reasonable seat.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class Home extends Vue {
  }
</script>

<style scoped lang="scss">
  @import "../assets/scss/theme/variables";
  .home {
    margin: 60px auto;
    padding: 60px 15px 100px 15px;
    text-align: center;
    max-width: 420px;
    background: $theme-color-yellow;
    .title-wrapper {
      margin-bottom: 60px;
      .chinese {
        font-weight: 900;
        font-size: 48px;
      }
      .english {
        font-size: 28px;
      }
    }
    .content-wrapper {
      .chinese {
        margin-bottom: 30px;
        line-height: 1;
        .question {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .answer {
          padding: 0 1em;
          font-size: 20px;
        }
      }
      .english {
        .question {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 16px;
        }
        .answer {
          padding: 0 1em;
          font-size: 18px;
        }
      }
    }
  }
</style>
