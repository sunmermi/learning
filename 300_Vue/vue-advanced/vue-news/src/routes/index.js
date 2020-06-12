import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import CreateListView from '@/views/CreateListView.js'; // 하이 오더 컴포넌트 
import bus from '@/utils/bus.js';
import { store } from '@/store/index.js'; 

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
      beforeEnter: (to, from, next) => {
        // console.log('이동할 유알엘 정보 to : ', to);
        // console.log('현재 유알엘 정보 from : ', from);
        // console.log('next : ', next);

        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then( () => {
            // # 시점 5
            console.log('시점 5');
            console.log('roter beforeEnter fatched');
            bus.$emit('end:spinner');
            next();
          })
          .catch( (error) => {
            console.log(error);
          });
      }
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