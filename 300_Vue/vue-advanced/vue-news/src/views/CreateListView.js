import ListView from '@/views/ListView';
import bus from '@/utils/bus.js';


// 하이 오더 컴포넌트
export default function createListView(name) { // 
  return {
    // 재사용할 컴포넌트 인스턴스 또는 컴포넌트 옵션들이 들어갈 자리
    // 뉴스 질문 직업의 이름을 받아서 렌더링을 할것임
    name: name,
    created() { // created 라이프사이클 훅 // 데이터 요청
      bus.$emit('start:spinner');
      // FETCH_NEWS 함수를 데이터 객체를 반환하도록 만들었기 때문에
      // 체이닝을 해서 추가적인 처리를 할수 있음.
      this.$store.dispatch('FETCH_LIST', this.$route.name)
        .then( () => {
          console.log('fatched');
          bus.$emit('end:spinner');
        })
        .catch( (error) => {
          console.log(error);
        }); 
      // setTimeout(() => { // setTimeout은 스피너 보기위해 임시로 만든것임
      //   this.$store.dispatch('FETCH_LIST', this.$route.name)
      //     .then( () => {
      //       console.log('fatched');
      //       bus.$emit('end:spinner');
      //     })
      //     .catch( (error) => {
      //       console.log(error);
      //     }); 
      // }, 3000);
    },
    render(createElement) { // 렌더함수를 사용해서 컴포넌트 로딩
      return createElement(ListView);
    },
  }
}

/* 하이 오더 컴포넌트 
  기존 컴포넌트보다 더 상위단계에 컴포넌트
 */