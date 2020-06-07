
<template>
  <div>
    <!-- map 헬퍼함수를 사용하기전 코드 -->
    <!-- 1. -->
    <!-- <p v-for="item in this.$store.state.jobs" :key="item.id">
      <a :href="item.url" target="_blank">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p> -->

    <!-- 2 : 
      computed 사용해서 
      this.$store.state.jobs 사용하던걸 
      jobs 로 간단하게 사용 -->
    <ul class="item_list">
      <li v-for="(item, index) in jobs" :key="item.id" class="post">
        <span class="item_points">{{ item.points || index + 1 }}</span>
        <div>
          <p class="item_title">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
          </p>
          <small class="itme_info">
            {{ item.time_ago }}
          </small>
        </div>
      </li> 
    </ul>
  </div>
</template>

<script>
export default {

  // map 헬퍼함수를 사용하기전 코드
  computed: {
    jobs() {
      return this.$store.state.jobs;
    }
  },

  created() { // 컴포넌트가 생성되자마자 실행되는 로직
    this.$store.dispatch('FETCH_JOBS');
  },
};

// vuex로 분리하기전 작업 코드
// import {fetchJobsList} from '@/api/api.js';

// export default {
//   data() {
//     return {
//       jobs: [],
//     }
//   },
//   created() {
//     fetchJobsList()
//       .then(response => {
//         console.log(response);
//         this.jobs = response.data;
//       })
//       .catch(error =>{
//         console.log(error);
//       })
//   }
// };
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