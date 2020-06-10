export default{
  // 첫번째 인자는 state
  SET_NEWS(state, data) {
    state.news = data;
  },
  SET_JABS(state, data){
    state.jobs = data;
  },
  SET_ASK(state, data) {
    state.ask = data;
  },
  SET_LIST(state, data) { // 하이 오더 컴포넌트 
    state.list = data;
  },
  SET_USER(state, data) {
    state.user = data;
  },
  SET_ITEM(state, data) {
    state.item = data;
  },
};