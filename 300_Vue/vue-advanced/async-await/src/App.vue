<template>
  <div id="app">
    <button @click="loginUserAnti">안티패턴 비동기처리 LOGIN</button>
    <button @click="loginUser">async & await 사용 비동기처리 LOGIN</button>
    <h3>LIST</h3>
    <ul>
      <li v-for="item in items" :key="item.index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      items: [],
    }
  },
  methods: {
    // #1 이런식으로 비동기 처리를 할수있음 하지만 안티패턴임!!
    // 요청 -> 받아오면 이걸 실행해 -> 또 요청.. -> then, catch 에 익숙해져야하고 코드의 인덴팅이 깊어짐
    loginUserAnti() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => {
          console.log('Anti 첫번째 비동기 요청 response : ', response);
          if( response.data.id === 1){
            axios.get('https://jsonplaceholder.typicode.com/todos')
              .then(response => {
                console.log('Anti 두번째 비동기 요청 response : ', response);
                this.items = response.data;
              })
              .catch((error) => {console.log('error : ', error);});
          }
        })
        .catch((error) => {console.log('error : ', error);});
    },
    // #2 async & await
    // 요청 -> 결과값 변수에 넣고(직관적!!) -> 비교하고 ..
    // then, catch 사용하지 않아도 됨
    async loginUser() {
      // 첫번째 비동기 요청
      let response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
      console.log('async & await response : ', response);

      if(response.data.id === 1) {
        // 두번째 비동기 요청
        let list = await axios.get('https://jsonplaceholder.typicode.com/todos');
        this.items = list.data;
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
  text-align: left;
}
button{
  margin: 10px;
}
</style>
