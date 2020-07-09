import Chart from 'chart.js';

export default {
  install(Vue) {
    // console.log('s');
    Vue.prototype.$_Chart = Chart; 

    // 모든 컴포넌트에서 
    // this.$_Chart => 이렇게 공용으로 사용할수있다
  }
}