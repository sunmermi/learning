<template>
  <div>
    <section>
      <div class="user-container">
        <span><i class="fas fa-user"></i></span>
        
        <!-- <div class="user-desc">
          <strong class="name">{{ userInfo.id }}</strong>
          <span class="time">{{ userInfo.created }}</span> 
        </div> -->

        <!-- slot 사용 -->
        <div class="user-desc">
          <slot name="username">
            <!-- 상위 컴포넌트에서 정의 -->
          </slot>
          <slot name="time">
            <!-- 상위 컴포넌트에서 정의 -->
          </slot> 
          <slot name="karma">
            <!-- 상위 컴포넌트에서 정의 -->
          </slot>
        </div>
      </div>  
    </section>
  </div>
</template>

<script>
export default {
  props: { // UserView.vue 데이터를 프롭스로 받아서 사용
    userInfo: {
      type: Object,
    },
  }
} 
</script> 

<style lang="sass" scoped>
.user-container
  display: flex
  align-items: center
  padding: .5rem
.fa-user
  font-size: 2.5rem
.user-desc
  padding-left: 8px
  .name
    display: block
    font-weight: bold
    color: #333
  .time
    display: inline-block
    padding-right: 4px
    vertical-align: top
    font-size: .7rem
  .karma
    display: inline-block
    padding-right: 4px
    vertical-align: top
    font-size: .7rem
</style>