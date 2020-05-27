import Vue from 'vue'
import Vuex from 'vuex'

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
  mutations: {
    addOneItem(state, todoItem){
      // 투두아이템을 추가하는 기능
      const obj = {comlpeted: false, item: todoItem}; 
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem(state, payload){
      localStorage.removeItem(payload.todoItem.item); 
      state.todoItems.splice(payload.index, 1);
    },
    toogleOneItem(state, payload){
      // console.log(payload);
    
      state.todoItems[payload.index].comlpeted = !state.todoItems[payload.index].comlpeted;
      
      // 로컬스토리지 갱신
      localStorage.removeItem(payload.todoItem.item); // 해당아이템을 지우고
      localStorage.setItem(payload.todoItem.item, JSON.stringify(state.todoItems)); // 변경된값을 다시 string으로 넣어줌 
    },
    clearAllItems(state){
      localStorage.clear();
      state.todoItems = [];
    },
  },
});