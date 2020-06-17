<template>
  <div>
    <ul>
      <li v-for="item in fetchedJobs" :key="item.id">
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
    ...mapGetters(['fetchedJobs'])
    
    // mapGtters 객체표기법
    // ...mapGetters({
    //   fetchedJobs: 'fetchedJobs'
    // })

    // #2
    // ...mapState({
    //   fetchedJobs: state => state.jobs
    // })

    // #1
    // fetchedJobs() {
    //   return this.$store.state.jobs;
    // }
  },
  created() { // 컴포넌트가 생성되자마자 실행되는 로직
    this.$store.dispatch('FETCT_JOBS');
  },
}
</script>

<style>

</style>