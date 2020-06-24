import { 
  fetchNewsList, 
  fetchJobsList, 
  fetchAskList, 
  fetchList,
  fetchUser, 
  fetchItem, 
} from '@/api/api.js';

export default {
  // 사용자의 입력에 따라 데이터를 변경하는 aysnc methods (기다렸다가 값을 받아서 뿌려줘야 하는 경우 사용)
  FETCH_NEWS({ commit }) {
    // api 호출 파일 분리
    fetchNewsList()
      .then( ({ data }) => {
        commit('SET_NEWS', data);
      })
      .catch( error => {
        console.log('error : ', error);
      });
  },
  FETCH_ASK({ commit }) {
    // api 호출 파일 분리
    fetchAskList()
      .then( ({ data }) => {
        commit('SET_ASK', data);
      })
      .catch( error => {
        console.log('error : ', error);
      });
  },
  FETCH_JOBS({ commit }) {
    // api 호출 파일 분리
    fetchJobsList()
      .then( ({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch( error => {
        console.log('error : ', error);
      });
  },
  FETCH_USER({ commit }, username) {
    // api 호출 파일 분리
    fetchUser(username)
      .then( ({ data }) => {
        commit('SET_USER', data);
      })
      .catch( error => {
        console.log('error : ', error);
      });
  },
  FETCH_ITEM({ commit }, itemid) {
    // api 호출 파일 분리
    fetchItem(itemid)
      .then( ({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch( error => {
        console.log('error : ', error);
      });
  },
  FETCH_LIST({ commit }, pagename) {
    // api 호출 파일 분리
    fetchList(pagename)
      .then( ({ data }) => {
        commit('SET_LIST', data);
      })
      .catch( error => {
        console.log('error : ', error);
      });
  },
}