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
    // return 을 해줘야함 데이터 순서 보장
    // 리턴 : dispatch로 호출을 해서 체이닝작업을 하려면 넘어오는 데이터가 있어야함 그래야 비동기처리 가능
    // 컨텍스트에서 커밋 꺼내와서 fetchList 호출
    return fetchNewsList()
      .then( ({ data }) => {
        commit('SET_NEWS', data);
      })
      .catch( error => {
        console.log('error : ', error);
      });
  },
  FETCH_ASK({ commit }) {
    // api 호출 파일 분리
    return fetchAskList()
      .then( ({ data }) => {
        commit('SET_ASK', data);
      })
      .catch( error => {
        console.log('error : ', error);
      });
  },
  FETCH_JOBS({ commit }) {
    // api 호출 파일 분리
    return fetchJobsList()
      .then( ({ data }) => {
        commit('SET_JOBS', data);
      })
      .catch( error => {
        console.log('error : ', error);
      });
  },
  FETCH_USER({ commit }, username) {
    // api 호출 파일 분리
    return fetchUser(username)
      .then( ({ data }) => {
        commit('SET_USER', data);
      })
      .catch( error => {
        console.log('error : ', error);
      });
  },
  FETCH_ITEM({ commit }, itemid) {
    // api 호출 파일 분리
    return fetchItem(itemid)
      .then( ({ data }) => {
        commit('SET_ITEM', data);
      })
      .catch( error => {
        console.log('error : ', error);
      });
  },
  // # 라이프 사이클 훅을 이용한 데이터 호풀 시점 2
  FETCH_LIST({ commit }, pagename) {
    // api 호출 파일 분리

    // # 라이프 사이클 훅을 이용한 데이터 호풀 시점 3
    return fetchList(pagename)
      .then( ({ data }) => {
        // # 라이프 사이클 훅을 이용한 데이터 호풀 시점 4
        console.log('라이프 사이클 훅을 이용한 데이터 호풀 시점 4');
        commit('SET_LIST', data);
        return data;
      })
      .catch( error => {
        console.log('error : ', error);
      });
  },
}