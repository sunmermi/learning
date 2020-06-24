import ListView from "./ListView.vue";
import bus from "@/utils/bus.js";

export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name,
    created() { 
      bus.$emit('start:spinner'); // 이벤트를 보내 : 스피너 시작
      
      // 데이터 호출 
      setTimeout(() => { // setTimeout은 스피너 보기위해 임시로 만든것
        // FETCH_NEWS 함수를 데이터 객체를 반환하도록 만들었기 때문에
        // 체이닝을 해서 추가적인 처리를 할수 있음.
        this.$store.dispatch('FETCH_LIST', this.$route.name)
          .then( () => {
            console.log('LIST fatched');
            bus.$emit('end:spinner');
          })
          .catch( (error) => {
            console.log(error);
          }); 
      }, 3000);
    },
    render(createElement) {
      return createElement(ListView);
    },
  }
}