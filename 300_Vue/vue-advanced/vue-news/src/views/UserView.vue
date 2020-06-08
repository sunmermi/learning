<template>
  <div>
    <UserProfile :userInfo="userInfo">
      <strong slot="username" class="name">
        {{ userInfo.id }}
      </strong>
      <span slot="time" class="time">
        Joined {{ userInfo.created }}
      </span>
      <span slot="karma" class="karma">
        {{ userInfo.karma }}
      </span>
      <!-- template을 사용할 경우엔 태그가 안생김
        <template slot="time">{{ userInfo.created }}</template> -->
    </UserProfile>
  </div>
</template>

<script>
// 방식 3 : 리팩토링 - 컴포넌트 문리후 데이터 전달
// (1) 생성되자마자 액션 함수 호출 
// (2) 액션함수가 실행이 되면서 api 호출
// (3) api 호출에 성공하면 뮤테이션을 호출해 스토어 유저에 데이터를 넣음
// (4) 컴포넌트에 프롭스로 내려줌
import UserProfile from '@/components/UserProfile';

export default {
  components: {
    UserProfile,
  },
  computed: { // 연산식 이용 화면의 표현되는 표현식이 깔끔해질수 있다
    userInfo(){
      // console.log(this.$store.state.user);
      return this.$store.state.user;
    }
  },
  created() { // 컴포넌트가 생성되자마자 실행되는 로직
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName); // 액션함수 호출
  }
}

// 방식 1
// import axios from 'axios';

// export default {
//   computed: { },
//   created() { // 컴포넌트가 생성되자마자 실행되는 로직
//     console.log(this);
//     console.log(this.$route);
//     console.log(this.$route.params.id);

//     // 할일 
//     // 1. id를 API에 태워서 호출 한다.
//     const userName = this.$route.params.id;
//     axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
//   }
// }

// 방식 2 : 리팩토링
// export default {
//   computed: { // 연산식 이용 화면의 표현되는 표현식이 깔끔해질수 있다
//     userInfo(){
//       // console.log(this.$store.state.user);
//       return this.$store.state.user;
//     }
//   },
//   created() { // 컴포넌트가 생성되자마자 실행되는 로직
//     const userName = this.$route.params.id;
//     this.$store.dispatch('FETCH_USER', userName);
//   }
// }
</script>

<style>

</style>