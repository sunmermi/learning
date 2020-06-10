import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import JobsView from '../views/JobsView.vue';
import AskView from '../views/AskView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';

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
    },
    {
      path : '/jobs',
      name: 'jobs',
      component: JobsView,
    },
    {
      path : '/ask',
      name: 'ask',
      component: AskView,
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