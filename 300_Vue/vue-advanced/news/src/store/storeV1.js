// Vuex는 상태관리 도구. 여러 컴포넌트간에 공유되는 데이터 속성
import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from "@/api/api.js";

// vuex 는 플러그인 형태로 제공되기 때문에 Vue.use() 사용
Vue.use(Vuex);

// 인스턴스 내보내기 
export const store = new Vuex.Store({
  state: { // 여러 컴포넌트 간에 공유되는 데이터 data
    news: [],
    ask: [],
    jobs: [],
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
  },
  mutations: {
    // state 값을 변경하는 이벤트 로직 메서드 유일한 방법 methods, 
		// 뮤테이션은 commit()으로 동작시킨다
    // 첫번째 인자: state , 두번째 인자: 데이터
    SET_NEWS(state, data) {
      state.news = data;
    },
    SET_ASK(state, data) {
      state.ask = data;
    },
    SET_JOBS(state, data) {
      state.jobs = data;
    },
  },
  actions: {
    // 사용자의 입력에 따라 데이터를 변경하는 aysnc methods (기다렸다가 값을 받아서 뿌려줘야 하는 경우 사용)
    FETCT_NEWS({ commit }) {
      // api 호출 파일 분리
      fetchNewsList()
        .then( response => {
          commit('SET_NEWS', response.data);
        })
        .catch( error => {
          console.log('error : ', error);
        });
    },
    FETCT_ASK({ commit }) {
      // api 호출 파일 분리
      fetchAskList()
        .then( response => {
          commit('SET_ASK', response.data);
        })
        .catch( error => {
          console.log('error : ', error);
        });
    },
    FETCT_JOBS({ commit }) {
      // api 호출 파일 분리
      fetchJobsList()
        .then( response => {
          commit('SET_JOBS', response.data);
        })
        .catch( error => {
          console.log('error : ', error);
        });
    },
  },
});

// 데이터 흐름 : api -> actions -> mutations -> state 값을 변환 -> NewsView 