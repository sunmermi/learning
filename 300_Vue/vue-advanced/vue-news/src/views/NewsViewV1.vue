
<template>
  <div>
    <!-- map 헬퍼함수를 사용하기전 코드 -->
    <!-- <p v-for="item in this.$store.state.news" :key="item.id">
      <a :href="item.url" target="_blank">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p> -->

    <!-- map 헬퍼함수 : mapGetters 사용 -->
    <ul class="item_list">
      <li v-for="item in fetchNews" :key="item.id" class="post">
        <span class="item_points">{{ item.points }}</span>
        <div>
          <p class="item_title">
            <a :href="item.url" target="_blank">{{ item.title }}</a>
          </p>
          <small class="itme_info">
            {{ item.time_ago }} by 
            <!-- <router-link :to="'/user/' + item.user">{{ item.user }}</router-link> -->
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
// map 헬퍼함수 : mapGetters 사용
import { mapGetters } from 'vuex';

export default {
  computed: {
    // map 헬퍼함수 : mapGtters 사용 코드

    // mapGtters 객체표기법
    // ...mapGetters({
    //   fetchNews: 'fetchNews',
    //   newsItem: 'fetchNews' // 이름이 다르다면
    // }),

    // mapGtters 배열표기법 
    ...mapGetters(['fetchNews'])
  },

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