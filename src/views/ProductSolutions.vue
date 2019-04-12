<template>
  <div class="product-solutions container">
    <div class="row">
      <SolutionList class="col-md-6" :solution-items="solutionItems"></SolutionList>
      <AdvantageList class="col-md-6" :advantage-items="advantageItems"></AdvantageList>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import SolutionList from '@/components/SolutionList.vue';
  import AdvantageList from '@/components/AdvantageList.vue';

  const imageGrabSeat = require('@/assets/images/icon-grab-seat.svg');
  const imageAppointment = require('@/assets/images/icon-appointment.svg');
  const imageStimulation = require('@/assets/images/icon-stimulation.svg');

  @Component({
    components: {
      SolutionList,
      AdvantageList,
    },
  })
  export default class ProductSolutions extends Vue {
    solutionItems: Array<buzhanzuo.ISolutionItem> = [
      {
        iconSrc: imageGrabSeat,
        title: '一键抢座',
        subTitle: '解决长期占座问题',
        chineseIntro: '扫码抢座一键识别占座行为，让占座行为无处遁形，让想学习的学生可以安心落座。',
        englishIntro: 'Sweeping code and grabbing a key to identify the occupying behavior, so that the seated behavior is nowhere to be seen, so that students who want to learn can rest in peace.',
      },
      {
        iconSrc: imageAppointment,
        title: '提前选座',
        subTitle: '解决学生排队问题',
        chineseIntro: '结合周期性用座高峰，设置图书馆各楼层教室可预约区，让学生可以提前选定座位。',
        englishIntro: 'In combination with the periodic peak of the seat, the classroom can be reserved for each floor of the library, so that students can select seats in advance.',
      },
      {
        iconSrc: imageStimulation,
        title: '学习激励',
        subTitle: '解决上座率低问题',
        chineseIntro: '学生的每一天学习时光都值得被记录，让图书馆成为学生回忆母校时光的第一场景。',
        englishIntro: 'Every day of the student\'s study time is worth to be recorded, making the library the first scene of the students\' memories of their alma mater',
      },
    ];

    advantageItems: Array<buzhanzuo.IAdvantageItem> = [
      {
        title: '一定是产品服务于人，而不是人迁就于产品',
        details: [
          '简单高效，好的产品是不需要说明书的，学生用一次就可以理解。',
        ],
      },
      {
        title: '好的产品是为了解决问题而生，而不是为了制造问题而生',
        details: [
          '去中心化管理，无需下载绑定，手机极速操作，座位信息同步绑定；',
          '不改用户习惯，无信息不对等，用户体验为本，直击占座问题要点。',
        ],
      },
    ]
  }
</script>

<style scoped lang="scss">
  .product-solutions {
    padding: 40px 0;
  }
</style>
