import Vue from 'vue'; // vue loading
import VueRouter from 'vue-router'; 
import NewsView from "@/views/NewsView.vue";
import AskView from "@/views/AskView.vue";
import JobsView from "@/views/JobsView.vue";

// router 기능 확장 선언
Vue.use(VueRouter);

// 라우터 객체 : 라우터 정보를 관리
export const router = new VueRouter({
  mode: 'history', // # 해시값 제거
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      path: '/news',
      name:  'news',
      component: NewsView,
    },
    {
      path: '/ask',
      component: AskView,
    },
    {
      path: '/jobs',
      component: JobsView,
    },
  ],
});
