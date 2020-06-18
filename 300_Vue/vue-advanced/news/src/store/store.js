// Vuex는 상태관리 도구. 여러 컴포넌트간에 공유되는 데이터 속성
import Vue from 'vue';
import Vuex from 'vuex';

// ======= 스토어 mutations, actions 속성 모듈화 =======
import mutations from './mutations';
import actions from './actions';

// ======= 스토어 actions 속성 모듈화 하기전 import 코드 =======
// import { fetchNewsList, fetchJobsList, fetchAskList  } from '@/api/api.js';

// vuex 는 플러그인 형태로 제공되기 때문에 Vue.use() 사용
Vue.use(Vuex);

// 인스턴스 내보내기 
export const store = new Vuex.Store({
  state: { // 여러 컴포넌트 간에 공유되는 데이터 data
    news: [],
    ask: [],
    jobs: [],
    user: {},
    item: [],
  },
  getters: {
    fetchedNews(state) {
      return state.news;
    },
    fetchedAsk(state) {
      return state.ask;
    },
    fetchedJobs(state) {
      return state.jobs;
    },
    fetchedItem(state) {
      return state.item;
    },
  },
  mutations, // state 값을 변경하는 이벤트 로직 메서드 유일한 방법 methods
  actions, // 사용자의 입력에 따라 데이터를 변경하는 aysnc methods 
});

// 데이터 흐름 : api -> actions -> mutations -> state 값을 변환 -> NewsView 