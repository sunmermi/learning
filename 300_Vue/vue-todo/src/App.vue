<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- 이벤트를 발생하고 주는것을 store 랑 todoInput애서 직접적으로 하고있음 -->
    <TodoInput></TodoInput>
    <TodoList></TodoList>
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
    // 컴포넌트 등록
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
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
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
