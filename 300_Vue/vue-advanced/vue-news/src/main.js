import Vue from 'vue';
import App from './App.vue';
import { router } from './routes/index.js'; // import로 라우터 참고 
import { store } from './store/index.js'; 

Vue.config.productionTip = false; // ?? 뭐지

new Vue({
  render: h => h(App),
  router, // router 추가
  store,
}).$mount('#app')
