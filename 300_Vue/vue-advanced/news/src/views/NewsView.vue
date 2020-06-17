<template>
  <div>
    <ul>
      <li v-for="item in fetchedNews" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
// #3
import { mapGetters } from 'vuex';

// #2
// import { mapState } from 'vuex';

export default {
  computed: {
    // #3
    // mapGtters 배열표기법 
    ...mapGetters(['fetchedNews']),
		
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
    this.$store.dispatch('FETCT_NEWS');
  },
}
</script>

<style>

</style>