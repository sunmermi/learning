<template>
  <div>
    <!-- <p>{{ userInfo }}</p> -->
    <p>user name : {{ userInfo.id }}</p>
    <p>karma : {{ userInfo.karma }}</p>
    <p>created : {{ userInfo.created }}</p>
  </div>
</template>

<script>
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
export default {
  computed: { // 연산식 이용 화면의 표현되는 표현식이 깔끔해질수 있다
    userInfo(){
      // console.log(this.$store.state.user);
      return this.$store.state.user;
    }
  },
  created() { // 컴포넌트가 생성되자마자 실행되는 로직
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  }
}
</script>

<style>

</style>