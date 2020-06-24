export default {
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
  SET_USER(state, data) {
    state.user = data;
  },
  SET_ITEM(state, data) {
    state.item = data;
  },
  SET_LIST(state, data) {
    state.list = data;
  },
}