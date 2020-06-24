<template>
  <div>
    <h4>JOBS : 네비게이션 라우터가드 beforeEnter 사용해 데이터 호출</h4>
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

  // 뉴스 질문 직업 모두 중복되는 로직
  // created() { 
  //   bus.$emit('start:spinner'); // 이벤트를 보내
    
  //   setTimeout(() => { // setTimeout은 스피너 보기위해 임시로 만든것
  //     // FETCH_NEWS 함수를 데이터 객체를 반환하도록 만들었기 때문에
  //     // 체이닝을 해서 추가적인 처리를 할수 있음.
  //     this.$store.dispatch('FETCH_JOBS')
  //       .then( () => {
  //         console.log('JOBS fatched');
  //         bus.$emit('end:spinner');
  //       })
  //       .catch( (error) => {
  //         console.log(error);
  //       }); 
  //   }, 3000);
  // },

  mounted() { // 인스턴스가 다 불러져 왔을때 실행
    bus.$emit('end:spinner'); // 스피너 종료 
  },
}
</script>

<style>

</style>