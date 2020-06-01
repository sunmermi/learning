
<template>
  <div>
    <div v-for="item in ask" :key="item.id">
    {{ item.title }}
  </div>
  </div>
</template>

<script>
import {fetchAskList} from '@/api/index';

export default {
  data() {
    return {
      ask: [],
    }
  },
  created() {
    fetchAskList()
      .then(response => {
        console.log(response);
        this.asks = response.data;
      })
      .catch(error =>{
        console.log(error);
        
      })
  }
}
</script>

<style>

</style>