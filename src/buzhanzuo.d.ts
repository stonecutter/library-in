declare namespace buzhanzuo {
  /**
   * 产品方案数据项
   */
  interface ISolutionItem {
    iconSrc: string;
    title: string;
    subTitle: string;
    chineseIntro: string;
    englishIntro: string;
  }

  /**
   * 产品优点数据项
   */
  interface IAdvantageItem {
    title: string;
    details?: Array<string>;
  }

  /**
   * 小程序操作步骤数据项
   */
  interface IMiniProgramOperationStepItem {
    iconSrc: string;
    name: string;
  }
}
