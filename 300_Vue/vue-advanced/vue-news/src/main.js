import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js'; // import로 라우터 참고 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, // router 추가
}).$mount('#app')
