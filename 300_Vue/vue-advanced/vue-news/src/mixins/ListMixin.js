import bus from '@/utils/bus.js';

// 믹스인: 파일 명은 최대한 자세하게 적으면 좋음
export default {
  // 재사용할 컴포넌트 옵션 & 로직
  created() { // created 라이프사이클 훅 // 데이터 요청
    bus.$emit('start:spinner');
    // # 시점 1
    // FETCH_NEWS 함수를 데이터 객체를 반환하도록 만들었기 때문에
    // 체이닝을 해서 추가적인 처리를 할수 있음.
    this.$store.dispatch('FETCH_LIST', this.$route.name)
      .then( () => {
        // # 시점 5
        console.log('시점 5');
        console.log('Mixin fatched');
        bus.$emit('end:spinner');
      })
      .catch( (error) => {
        console.log(error);
      });
  },
}

// // 하이오더 컴포넌트
// // export default function create(name) {
// //   // 재사용할 컴포넌트 옵션 & 로직
// // }