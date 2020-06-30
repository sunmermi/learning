import axios from 'axios';

// 1. HTTP request & response 와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
}

// 2. API 함수 들을 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}

/* API 단에서 예외처리 : try, catch 처리
api 호출할때 할 것인지 actions 에서 처리할 지는 사용에 따라 에러 추적 구간을 정해서 사용하면 된다.
비지니스 로직을 많이 처리하는 액션이나 컴포넌트 단보다는 api단에서 한번 하고 들어오는게
코드가? 좀더 깔끔? 해진대 (강의자는 주로 api 호출할때 try chtch 처리한대 ) */
function fetchAskList() {
  try {
    return axios.get(`${config.baseUrl}ask/1.json`);
  } catch (error) {
    console.log('error : ', error);
  }
}
function fetchJobsList() {
  try {
    return axios.get(`${config.baseUrl}jobs/1.json`);
  } catch (error) {
    console.log('error : ', error);
  }
}
function fetchList(pagename) {
  try {
    return axios.get(`${config.baseUrl}${pagename}/1.json`);
  } catch (error) {
    console.log('error : ', error);
  }
}
function fetchUser(name) {
  try {
    return axios.get(`${config.baseUrl}user/${name}.json`);
  } catch (error) {
    console.log('error : ', error);
  }
}
function fetchItem(itemid) {
  try {
    return axios.get(`${config.baseUrl}item/${itemid}.json`);
  } catch (error) {
    console.log('error : ', error);
  }
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUser,
  fetchItem,
}