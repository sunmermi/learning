<template>
  <div>
    <ul class="item_list">
      <li v-for="(item, index) in listItems" :key="item.id" class="post">
        <span class="item_points">{{ item.points || index + 1 }}</span>
        <div class="itme_cont">
          <h2 class="item_title">
            <template v-if="item.domain">
              <a :href="item.url" target="_blank">{{ item.title }}</a>
            </template>
            <template v-else>
              <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
            </template>
            <!-- <a v-if="item.domain" :href="item.url" target="_blank">{{ item.title }}</a>
            <router-link v-else :to="`/item/${item.id}`">{{ item.title }}</router-link> -->
          </h2>

          <p class="itme_info">
            {{ item.time_ago }} by
            <router-link v-if="item.user" :to="`/user/${item.user}`" class="link_user">
              {{ item.user }}
            </router-link>
            <a v-else :href="item.url" class="link_user" target="_blank">
              {{ item.domain }}
            </a>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// #3
// import { mapGetters } from 'vuex';

// #2
// import { mapState } from 'vuex';

export default {
  computed: {
    // #5 : HOC
    listItems() {
      return this.$store.state.list;
    }

    // #4 : 뉴스 직업 질문 컴포넌트 하나로 분리
    // listItems() {
    //   const name = this.$route.name;
    //   return this.$store.state[name];
    // }

    // #3
    // mapGtters 배열표기법 
    // ...mapGetters(['fetchedNews']),
		
		// mapGtters 객체표기법
    // ...mapGetters({
    //   fetchedNews: 'fetchedNews',
    //   newsItem: 'fetchedNews' // 이름이 다르다면
    // }),

    // #2
    // ...mapState({
    //   fetchedNews: state => state.ask
    // })

    // #1
    // fetchedNews() {
    //   return this.$store.state.news;
    // }
  },
  created() { // 컴포넌트가 생성되자마자 실행되는 로직

    // // #4 : 뉴스 직업 질문 컴포넌트 하나로 분리
    // const name = this.$route.name;
    // if(name === "news") {
    //   this.$store.dispatch('FETCH_NEWS');
    // }else if(name === "ask") {  
    //   this.$store.dispatch('FETCH_ASK');
    // }else if(name === "jobs") {
    //   this.$store.dispatch('FETCH_JOBS');
    // }
  },
}
</script>


<style lang="sass" scoped>
.item_list
  margin: 0
  padding: 0
.post
  display: flex
  align-items: center
  padding: 20px 10px
  border-bottom: 1px solid #eee
  list-style: none
.item_points
  display: flex
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 60px;
  align-items: center
  justify-content: center
  color: #42b883
// .itme_cont
.item_title
  margin: 0
  font-size: 1rem
.itme_info
  margin: 0
  font-size: .8rem
  color: #8c8c8c
.link_user
  font-weight: bold
  color: #8c8c8c
</style>