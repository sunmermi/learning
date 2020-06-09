// 액션즈는 코드에서는 
// store.js에서 임폴트한 api들의 함수들을 내용을 참고하는것들이 있기때문에 
import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItem  } from '@/api/api.js';

export default {
  // actions에서는 context 인자 제공디 되는데 mutations로 넘기기위한것
  FETCH_NEWS(context) {
    fetchNewsList()
      .then(response => { // 데이터를 받아와서
        // mutations으로 data넘기기 
        // SET_NEWS에 response.dat 넘기기
        // console.log(response);
        context.commit('SET_NEWS', response.data); 
        return response; // 객체반환
      })
      .catch(error => {
        console.log(error);
      });
  },
  // 디스트럭처링 
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then( ({ data }) => {
        commit('SET_JABS', data);
      })
      .catch(error =>{
        console.log(error);
      });
  },
  FETCH_ASK({ commit }) {
    fetchAskList()
      .then( ({ data }) => {
        commit('SET_ASK', data);
      })
      .catch(error =>{
        console.log(error);
      });
  },
  FETCH_USER({ commit }, name) {
    fetchUserInfo(name)
      .then( ({ data }) => {
        commit('SET_USER', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  FETCH_ITEM({ commit }, id) {
    fetchItem(id)
      .then( ({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch(error => {
        console.log(error);
      });
  },
};