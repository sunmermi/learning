<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import bus from "@/utils/bus.js";

export default {
  components: {
    ListItem,
  },
  created() { 
    bus.$emit('start:spinner'); // 이벤트를 보내
    
    setTimeout(() => { // setTimeout은 스피너 보기위해 임시로 만든것
      // FETCH_NEWS 함수를 데이터 객체를 반환하도록 만들었기 때문에
      // 체이닝을 해서 추가적인 처리를 할수 있음.
      this.$store.dispatch('FETCH_ASK')
        .then( () => {
          console.log('ASK fatched');
          bus.$emit('end:spinner');
        })
        .catch( (error) => {
          console.log(error);
        }); 
    }, 3000);
  },
}
</script>

<style>

</style>