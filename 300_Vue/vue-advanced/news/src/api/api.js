import axios from 'axios';

// 1. HTTP request & response 와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
}

// 2. API 함수 들을 정리
function fetchNewsList() {
  return axios.get(`${config.baseUrl}news/1.json`);
}
function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}
function fetchJobsList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}
function fetchList(pagename) {
  return axios.get(`${config.baseUrl}${pagename}/1.json`);
}
function fetchUser(name) {
  return axios.get(`${config.baseUrl}user/${name}.json`);
}
function fetchItem(itemid) {
  return axios.get(`${config.baseUrl}item/${itemid}.json`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUser,
  fetchItem,
}