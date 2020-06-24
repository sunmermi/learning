import Vue from 'vue'; // vue loading
import VueRouter from 'vue-router'; 
// import NewsView from "@/views/NewsView.vue";
// import AskView from "@/views/AskView.vue";
// import JobsView from "@/views/JobsView.vue";
import UserView from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";
import CreateListView from "@/views/CreateListView.js"; // 하이 오더 컴포넌트

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
      name: 'news',
      // component: NewsView,
      component: CreateListView('NewsView'),  // 하이 오더 컴포넌트
    },
    {
      path: '/ask',
      name: 'ask',
      // component: AskView,
      component: CreateListView('AskView'), // 하이 오더 컴포넌트
    },
    {
      path: '/jobs',
      name: 'jobs',
      // component: JobsView,
      component: CreateListView('JobsView'), // 하이 오더 컴포넌트
    },
    {
      //  Dynamic Route :id 변수와 마찬가지 params으로 받음
      path: '/user/:id',
      component: UserView,
    },
    {
      // Dynamic Route :id 변수와 마찬가지 params으로 받음
      path: '/item/:id',
      component: ItemView,
    },
  ],
});
