import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'

// use() 의 플러그인 글로벌 기능추가를 하고싶을때
Vue.use(Vuex)

const storage = {
  fetch(){
    const arr = [];
    if(localStorage.length > 0){
      for(let i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server' && localStorage.key(i) !== ""){
          // this.todoItems.push(localStorage.key(i));

          // localStorage.getItem(localStorage.key(i)); string로 나옴
          // 이것을 parse 사용해서 오브젝트로 만들어서 todoItems 배열에 데이터를 넣어줌 
          const objItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
          arr.push(objItem);
        }
      }
    }
    return arr;
  },
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters,
  mutations,
});