import Vue from 'vue'; // vue loading
import VueRouter from 'vue-router'; 
import NewsView from "@/views/NewsView.vue";
// import AskView from "@/views/AskView.vue";
import JobsView from "@/views/JobsView.vue";
import UserView from "@/views/UserView.vue";
import ItemView from "@/views/ItemView.vue";
import CreateListView from "@/views/CreateListView.js"; // 하이 오더 컴포넌트
import { store } from "@/store/store.js";
import bus from "@/utils/bus.js";

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
    { // 뉴스는 믹스인을 사용해서 데이터 호출
      path: '/news',
      name: 'news',
      component: NewsView,
      // component: CreateListView('NewsView'),  // 하이 오더 컴포넌트
    },
    { // 하이 오더 컴포넌트 사용
      path: '/ask',
      name: 'ask',
      // component: AskView,
      component: CreateListView('AskView'), // 하이 오더 컴포넌트
    },
    { // 네비게이션 가드 사용
      path: '/jobs',
      name: 'jobs',
      component: JobsView,
      // component: CreateListView('JobsView'), // 하이 오더 컴포넌트
      beforeEnter: (to, from, next) => {
        // console.log('이동할 유알엘 정보 to : ', to);
        // console.log('현재 유알엘 정보 from : ', from);
        // console.log('next : ', next);
        
        bus.$emit('start:spinner');
        store.dispatch('FETCH_LIST', to.name)
          .then( () => {
            console.log('네비게이션 가드 : 라우터가드 beforeEnter 사용 fatched');
            // bus.$emit('end:spinner'); -> 컴포넌트의 mounted 훅에서 처리
            next();
          })
          .catch( (error) => {
            console.log(error);
          }); 
      },
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
