<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <!-- v-bind:내려보낼 프롭스 속성이름="현 위치의 컴포넌트 데이터 속성" -->
    <!-- todoItems를 넣은 propsdata를 내려보낸다  -->
    <TodoList v-bind:propsdata="todoItems"></TodoList>
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
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}
#app{
  min-width: 320px;
  max-width: 400px;
  margin: 0 auto;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
