<template>
  <div>
    <ul>
      <li v-for="item in fetchedAsk" :key="item.id">
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
    ...mapGetters(['fetchedAsk'])
		
		// mapGtters 객체표기법
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk',
    //   newsItem: 'fetchedAsk' // 이름이 다르다면
    // }),

    // #2 
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })

    // #1
    // fetchedAsk() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCT_ASK');
  },
}
</script>

<style>

</style>