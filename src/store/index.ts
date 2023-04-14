/*
 * @Author: JeremyJone
 * @Date: 2021-12-24 16:36:33
 * @LastEditors: JeremyJone
 * @LastEditTime: 2023-04-12 17:50:18
 * @Description: 头部注释
 */

import { inject, provide, reactive, type Ref, ref } from 'vue';
import EventBus from '@/utils/bus';
import { AllData } from '@/models/data';
import { SlotsBox, StyleBox } from '@/models/param';

export const initStore = () => {
  const Bus = reactive(new EventBus());
  provide('$bus', Bus);

  const tableWidth = ref(0);
  provide('TABLE_WIDTH', tableWidth);

  const slotsBox = reactive(new SlotsBox());
  provide('$slotsBox', slotsBox);

  const data = reactive(new AllData());
  provide('$data', data);

  const styleBox = reactive(new StyleBox());
  provide('$styleBox', styleBox);
};

export const useStore = () => {
  return {
    /**
     * 事件总线
     */
    $bus: inject('$bus') as EventBus,

    /**
     * table 宽度
     */
    tableWidth: inject('TABLE_WIDTH') as Ref<number>,

    /**
     * 插槽盒子，所有插槽都保存在这里
     */
    $slotsBox: inject('$slotsBox') as SlotsBox,

    /**
     * 展示的数据
     */
    $data: inject('$data') as AllData,

    /**
     * 样式盒子，所有样式都保存在这里来管理样式
     */
    $styleBox: inject('$styleBox') as StyleBox
  };
};

export default useStore;
