import { fetchNewsList, fetchJobsList, fetchAskList  } from '@/api/api.js';

export default {
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
}