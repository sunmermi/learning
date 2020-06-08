
<template>
  <div>
    <!-- map 헬퍼함수를 사용하기전 코드 -->
    <!-- <p v-for="item in this.$store.state.ask" :key="item.id">
      <a :href="item.url" target="_blank">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p> -->

    <!-- map 헬퍼함수  : mapState 사용 코드 -->
    <ul class="item_list">
      <li v-for="item in fetchAsk" :key="item.id" class="post">
        <span class="item_points">{{ item.points }}</span>
        <div>
          <p class="item_title">
            <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
          </p>
          <small class="itme_info">
            {{ item.time_ago }} by
            <router-link :to="`/user/${item.user}`" class="link_user">
              {{ item.user }}
            </router-link>
          </small>
        </div>
      </li> 
    </ul>
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

<style lang="sass" scoped>
.item_list
  margin: 0
  padding: 0
.post
  list-style: none
  display: flex
  align-items: center
  border-bottom: 1px solid #eee
.item_points
  width: 80px
  height: 80px
  display: flex
  align-items: center
  justify-content: center
  color: #42b883
.item_title
  margin: 0
.itme_info
  color: #35495e
.link_user
  color: #35495e
</style>