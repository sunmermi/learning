<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view class="content_view"></router-view>
    </transition>

    <Spinner :loading="loadingStatus"></Spinner>
  </div>
</template>

<script>
import ToolBar from '@/components/ToolBar.vue';
import Spinner from '@/components/Spinner.vue';
import bus from '@/utils/bus.js';

export default {
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    } 
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestory() {
    // 이벤트 버스의 경우 on을 한경우 off 를 꼭 해줘야한다
    // 이벤트 객체가 계속 쌓이기 때문에
    bus.$off('start:spinner', this.startSpinner);
    bus.$off('end:spinner', this.endSpinner);
  },
}
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
}
a{
  color: #35495e;
  text-decoration: none;
  &.router-link-exact-active{
    text-decoration: underline;
  }
  &:hover{
    color: #000;
    text-decoration: underline;
  }
}
.content_view{
  padding: 0 20px;
}

// router transition
// => 뷰 트랜지션태그의 속성 네임이 클래스명의 프리픽스가 됨
.page-enter-active, .page-leave-active {
  transition: opacity .5s;
}
.page-enter, .page-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
