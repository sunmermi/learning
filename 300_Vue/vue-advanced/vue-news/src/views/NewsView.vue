
<template>
  <div>
    <div v-for="user in this.$store.state.news" :key="user.id">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() { // 컴포넌트가 생성되자마자 실행되는 로직
    this.$store.dispatch('FETCH_NEWS');
  },
};

// vuex로 분리하기전 작업 코드
// import { fetchNewsList } from '@/api/api.js';

// export default {
//   data() {
//     return {
//       users: [],
//     }
//   },
//   created() { // 컴포넌트가 생성되자마자 실행되는 로직
//     console.log('호출 전: ', this);

//     // 1. 데이터 호출
//     fetchNewsList()
//       .then(response => {
//         console.log('호출 후: ', this);

//         // 2. 데이터를 불러와서 담아줌
//         // console.log(response);
//         this.users = response.data;
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   },
// };
</script>


<style>

</style>