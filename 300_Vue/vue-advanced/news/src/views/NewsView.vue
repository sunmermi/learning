<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
// import bus from "@/utils/bus.js";
import ListMixin from "@/mixins/ListMixin.js";

export default {
  components: {
    ListItem,
  },
  mixins: [
    ListMixin,
  ],

  // // ===== 뉴스 질문 직업 모두 중복되는 로직 =====
  // created() { 
  //   bus.$emit('start:spinner'); // 이벤트를 보내
    
  //   // FETCH_NEWS 함수를 데이터 객체를 반환하도록 만들었기 때문에
  //   // 체이닝을 해서 추가적인 처리를 할수 있음.
  //   this.$store.dispatch('FETCH_NEWS')
  //     .then( () => {
  //       console.log('NEWS fatched');
  //       bus.$emit('end:spinner');
  //     })
  //     .catch( (error) => {
  //       console.log(error);
  //     });
  // },
  // // ===== 뉴스 질문 직업 모두 중복되는 로직 =====
}
</script>

<style>

</style>