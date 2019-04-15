import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ProductSolutions from '@/views/ProductSolutions.vue';

const imageYijianqiangzuo = require('@/assets/images/icon-grab-seat.svg');

describe('ProductSolutions.vue', () => {
  // 检查原始组件选项
  it('renders props.solutionConfigs when passed', () => {
    const solutionConfigs:Array<buzhanzuo.ISolutionItem> = [
      {
        iconSrc: imageYijianqiangzuo,
        title: '一键抢座',
        subTitle: '解决长期占座问题',
        chineseIntro: '扫码抢座一键识别占座行为，让占座行为无处遁形，让想学习的学生可以安心落座。',
        englishIntro: 'Sweeping code and grabbing a key to identify the occupying behavior, so that the seated behavior is nowhere to be seen, so that students who want to learn can rest in peace.',
      },
    ];
    const wrapper = shallowMount(ProductSolutions, {
      propsData: { solutionConfigs },
    });
    expect(wrapper.html()).to.include(solutionConfigs[0].title);
  });
});
