<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- 이벤트 $emit
      v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현 컴포넌트의 메서드 이름"
      input 에서 이벤트가 발생되면 자식 컴포넌트에서 이벤트가 올라와서 addOneItem를 실행
    -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- v-bind:내려보낼 프롭스 속성이름="현 위치의 컴포넌트 데이터 속성" -->
    <!-- todoItems를 넣은 propsdata를 내려보낸다  -->
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem"></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data(){
    return{
      todoItems: [],
    }
  },
  created(){ // 라이프 싸이클 created : 인스턴스가 생정되자마자 실행되는 로직
    if(localStorage.length > 0){
      for(var i = 0; i < localStorage.length; i++){
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server' && localStorage.key(i) !== ""){
          // this.todoItems.push(localStorage.key(i));

          // localStorage.getItem(localStorage.key(i)); string로 나옴
          // 이것을 parse 사용해서 오브젝트로 만들어서 todoItems 배열에 데이터를 넣어줌
          var objItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
          this.todoItems.push(objItem);
        }
        
      }
    }
  },
  methods: {
    addOneItem: function(todoItem){ // 투두아이템을 추가하는 기능
      var obj = {comlpeted: false, item: todoItem}; 
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem: function(todoItem, index){
      // console.log(todoItem); // object
      // removeItem(todoItem.item) 오브젝트의 키값을 접근해서 지움 -> 키와 아이템의값을 동일하게해서 가능한 부분
      localStorage.removeItem(todoItem.item); 
      this.todoItems.splice(index, 1);
      // splice(인덱스, 삭제갯수) 잘라내고 배열을 반환 + 원본배열을 수정
      // slice()는 잘라낸 배열을 반환 + 원본배열을 그대로
      // 참고 : https://im-developer.tistory.com/103
    },
  },
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  text-align: center;
  background-color: #f6f6f6;
}
#app{
  min-width: 320px;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
