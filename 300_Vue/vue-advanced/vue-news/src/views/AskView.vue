
<template>
  <div>
    <!-- map 헬퍼함수를 사용하기전 코드 -->
    <!-- <p v-for="item in this.$store.state.ask" :key="item.id">
      <a :href="item.url" target="_blank">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.domain }}</small>
    </p> -->

    <!-- map 헬퍼함수  : mapState 사용 코드 -->
    <p v-for="item in fetchAsk" :key="item.id">
      <a :href="item.url" target="_blank">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.domain }}</small>
    </p>
  </div>
</template>

<script>
// map 헬퍼함수  : mapState 사용
import { mapState } from 'vuex';

export default {
  // map 헬퍼함수 : mapState 사용
  computed: {
    ...mapState({
      fetchAsk: state => state.ask
    })
  },

  created() { // 컴포넌트가 생성되자마자 실행되는 로직
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