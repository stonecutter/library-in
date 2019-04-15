<template>
  <div class="core-function container-fluid">
    <div class="row">
      <div class="col-md-6">
        <FunctionTitle title="扫码上座流程"></FunctionTitle>
        <MiniProgramOperationStepList :mini-program-operation-step-items="stepItemsScanCode"
                                      data-role="content"></MiniProgramOperationStepList>
      </div>
      <div class="col-md-6">
        <FunctionTitle title="一键抢座流程"></FunctionTitle>
        <MiniProgramOperationStepList :mini-program-operation-step-items="stepItemsGrabSeat"
                                      data-role="content"></MiniProgramOperationStepList>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <FunctionTitle title="座位预约流程"></FunctionTitle>
        <MiniProgramOperationStepList :mini-program-operation-step-items="stepItemsAppointment"
                                      data-role="content"></MiniProgramOperationStepList>
      </div>
      <div class="col-md-4">
        <FunctionTitle title="座位二维码" data-role="content"></FunctionTitle>
        <SeatLabel></SeatLabel>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import FunctionTitle from '@/components/FunctionTitle.vue';
  import MiniProgramOperationStepList from '@/components/MiniProgramOperationStepList.vue';
  import SeatLabel from '@/components/SeatLabel.vue';

  const imageStepScanCode1 = require('@/assets/images/step-scan-code-1.png');
  const imageStepScanCode2 = require('@/assets/images/step-scan-code-2.png');
  const imageStepScanCode3 = require('@/assets/images/step-scan-code-3.png');
  const imageStepGrabSeat1 = require('@/assets/images/step-grab-seat-1.png');
  const imageStepGrabSeat2 = require('@/assets/images/step-grab-seat-2.png');
  const imageStepGrabSeat3 = require('@/assets/images/step-grab-seat-3.png');
  const imageStepAppointment1 = require('@/assets/images/step-appointment-1.png');
  const imageStepAppointment2 = require('@/assets/images/step-appointment-2.png');
  const imageStepAppointment3 = require('@/assets/images/step-appointment-3.png');
  const imageStepAppointment4 = require('@/assets/images/step-appointment-4.png');

  @Component({
    components: {
      FunctionTitle,
      MiniProgramOperationStepList,
      SeatLabel,
    },
  })
  export default class CoreFunctions extends Vue {
    stepItemsScanCode: Array<buzhanzuo.IMiniProgramOperationStepItem> = [
      {
        iconSrc: imageStepScanCode1,
        name: '扫码上座',
      },
      {
        iconSrc: imageStepScanCode2,
        name: '选择时长',
      },
      {
        iconSrc: imageStepScanCode3,
        name: '开始学习',
      },
    ];

    stepItemsGrabSeat: Array<buzhanzuo.IMiniProgramOperationStepItem> = [
      {
        iconSrc: imageStepGrabSeat1,
        name: '抢座界面',
      },
      {
        iconSrc: imageStepGrabSeat2,
        name: '抢座受理',
      },
      {
        iconSrc: imageStepGrabSeat3,
        name: '一键投诉',
      },
    ];

    stepItemsAppointment: Array<buzhanzuo.IMiniProgramOperationStepItem> = [
      {
        iconSrc: imageStepAppointment1,
        name: '查找座位',
      },
      {
        iconSrc: imageStepAppointment2,
        name: '座位确认',
      },
      {
        iconSrc: imageStepAppointment3,
        name: '预约确认',
      },
      {
        iconSrc: imageStepAppointment4,
        name: '预约成功',
      },
    ];
  }
</script>

<style scoped>
  [data-role="content"] {
    padding: 20px 0;
  }
</style>
