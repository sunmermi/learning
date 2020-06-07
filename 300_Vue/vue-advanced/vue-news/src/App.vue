<template>
  <div id="app">
    <ToolBar></ToolBar>
    <transition name="page">
      <router-view class="content_view"></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
  }
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
