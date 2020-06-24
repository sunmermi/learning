import bus from "@/utils/bus.js";

// MIXIN
export default {
  // 재사용할 컴포넌트 옵션 & 로직
  created() { 
    bus.$emit('start:spinner'); // 이벤트를 보내
    
    // # 라이프 사이클 훅을 이용한 데이터 호풀 시점 1
    // FETCH_NEWS 함수를 데이터 객체를 반환하도록 만들었기 때문에
    // 체이닝을 해서 추가적인 처리를 할수 있음.
    this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then( () => {
        // # 라이프 사이클 훅을 이용한 데이터 호풀 시점 5
        console.log('라이프 사이클 훅을 이용한 데이터 호풀 시점 5');
        console.log('MIXINS fatched');
        // bus.$emit('end:spinner');
      })
      .catch( (error) => {
        console.log(error);
      });
  },
  mounted() { // 인스턴스가 다 불러져 왔을때 실행
    bus.$emit('end:spinner'); // 스피너 종료 
  },
}

// HOC
// export default function createListView(name) { // 재사용할 컴포넌트 옵션 & 로직 }