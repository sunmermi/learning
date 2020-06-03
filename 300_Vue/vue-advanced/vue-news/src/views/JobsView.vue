
<template>
  <div>
    <div v-for="job in this.$store.state.jobs" :key="job.id">
      {{ job.title }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
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

<style>

</style>