
<template>
  <div>
    <div v-for="user in users" :key="user.id">
      {{ user.title }}
    </div>
  </div>
</template>

<script>
import { fetchNewsList } from '@/api/index.js';

export default {
  data() {
    return {
      users: [],
    }
  },
  created() { // 컴포넌트가 생성되자마자 실행되는 로직
    fetchNewsList()
      .then(response => {
        // console.log(response);
        this.users = response.data;
      })
      .catch(error => {
        console.log(error);
      })
  },
}
</script>

<style>

</style>