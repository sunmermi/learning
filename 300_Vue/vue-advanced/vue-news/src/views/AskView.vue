
<template>
  <div>
    <div v-for="item in this.$store.state.ask" :key="item.id">
    {{ item.title }}
  </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
};

// // vuex로 분리하기전 작업 코드
// import {fetchAskList} from '@/api/api.js';

// export default {
//   data() {
//     return {
//       ask: [],
//     }
//   },
//   created() {
//     fetchAskList()
//       .then(response => {
//         console.log(response);
//         this.asks = response.data;
//       })
//       .catch(error =>{
//         console.log(error);
//       })
//   }
// }
</script>

<style>

</style>