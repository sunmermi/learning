import bus from "@/utils/bus.js";

// MIXIN
export default {
  // 재사용할 컴포넌트 옵션 & 로직
  created() { 
    bus.$emit('start:spinner'); // 이벤트를 보내
    
    // FETCH_NEWS 함수를 데이터 객체를 반환하도록 만들었기 때문에
    // 체이닝을 해서 추가적인 처리를 할수 있음.
    this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then( () => {
        console.log('MIXINS fatched');
        bus.$emit('end:spinner');
      })
      .catch( (error) => {
        console.log(error);
      });
  },
}

// HOC
// export default function createListView(name) { // 재사용할 컴포넌트 옵션 & 로직 }