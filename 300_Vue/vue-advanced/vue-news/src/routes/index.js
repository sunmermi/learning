import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import CreateListView from '@/views/CreateListView.js'; // 하이 오더 컴포넌트 

// router 기능 확장 선언
Vue.use(VueRouter);

// router 객체생성
export const router = new VueRouter({
  mode: 'history', // # 해시값 제거
  routes:[
    // {
    //   path : url 주소,
    //   component: url 주소로 갔을 때 표시될 컴포넌트,
    //   redirect : re(다시) + 지시하다(direct) 다시 지시할 유알엘
    // },
    {
      path : '/',
      redirect: '/news',
    },
    {
      path : '/news',
      name:  'news',
      component: NewsView,
      // component: CreateListView('NewsView'), // 하이 오더 컴포넌트 
    },
    {
      path : '/jobs',
      name: 'jobs',
      // component: JobsView,
      component: CreateListView('JobsView'), // 하이 오더 컴포넌트
    },
    {
      path : '/ask',
      name: 'ask',
      // component: AskView,
      component: CreateListView('AskView'), // 하이 오더 컴포넌트
    },
    {
      path : '/user/:id',
      component: UserView,
    },
    {
      path : '/item/:id',
      // path : '/item?id=23427516',
      component: ItemView,
    },
  ],
});