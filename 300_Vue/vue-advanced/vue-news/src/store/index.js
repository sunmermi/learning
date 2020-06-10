import Vue from 'vue'; // 별도의 파일이기 때문에 뷰를 임폴트
import Vuex from 'vuex';
// ======= 스토어 mutations, actions 속성 모듈화 =======
import mutations from './mutations';
import actions from './actions';

// ======= 스토어 actions 속성 모듈화 하기전 import 코드 =======
// import { fetchNewsList, fetchJobsList, fetchAskList  } from '@/api/api.js';

// Vuex는 상태 관리 도구 : 여러 컴포넌트에서 굥유되는 데이터속성
// 플러그인 형태로 제공되기 때문에 Vue.use() 사용
Vue.use(Vuex);

// 인스턴드 내보내기
export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
    user: {},
    item: {},
    list: [], // 하이 오더 컴포넌트 
  },
  getters: {
    fetchNews(state) {
      return state.news;
    },
    fetchItem(state) {
      return state.item;
    }
  },

  // ======= 스토어 mutations, actions 속성 모듈화 =======
  // state, getters는 코드가 복잡하지않고 짧기때문에 냅둠.
  mutations,
  actions,

  // ======= 스토어 속성 모듈화 하기전 코드 =======
  // mutations: {
  //   // 첫번째 인자는 state
  //   SET_NEWS(state, data) {
  //     state.news = data;
  //   },
  //   SET_JABS(state, data){
  //     state.jobs = data;
  //   },
  //   SET_ASK(state, data) {
  //     state.ask = data;
  //   }
  // }, 
  // actions: {
  //   // actions에서는 context 인자 제공디 되는데 mutations로 넘기기위한것
  //   FETCH_NEWS(context) {
  //     fetchNewsList()
  //       .then(response => {
  //         // mutations으로 data넘기기 
  //         // SET_NEWS에 response.dat 넘기기
  //         console.log(response);
  //         context.commit('SET_NEWS', response.data); 
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   },
  //   // 디스트럭처링 
  //   FETCH_JOBS({ commit }) {
  //     fetchJobsList()
  //       .then( ({ data }) => {
  //         commit('SET_JABS', data);
  //       })
  //       .catch(error =>{
  //         console.log(error);
  //       });
  //   },
  //   FETCH_ASK({ commit }) {
  //     fetchAskList()
  //       .then( ({ data }) => {
  //         commit('SET_ASK', data);
  //       })
  //       .catch(error =>{
  //         console.log(error);
  //       });
  //   },
  // }
}); 

/* 
API를 vuex에서 관리하려면 actions에서 해야함

Vuex구조상 API를 actions에서 불러왔으면 그 데이터를 꺼내서 
바로 state에서 넣을수 없다.
왜? 구조상 그렇다.
비동기호출은 전부 다 actions에서 호출해야하고 
거기서 받은 데이터는 mutations을 통해서 state에 넣어서 사용하게 되어있음
state에 담기위해선 뮤테이션을!!

actions에서는 
첫번째 인자는 context가 제공이 되는데 mutations으로 넘기기 위한 것

mutations
첫번째 인자는 state다.

 */