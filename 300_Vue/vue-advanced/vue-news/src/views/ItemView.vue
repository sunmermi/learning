<template>
  <div>
    <h2>질문 상세 페이지</h2>
    <section>
      <div class="user-container">
        <span><i class="fas fa-user"></i></span>
        
        <div class="user-desc">
          <router-link :to="`/user/${fetchItem.user}`" class="link">
            {{ fetchItem.user }}
          </router-link>
          <span class="time">
            {{ fetchItem.time_ago }}
          </span>
        </div>
      </div>
      <h3 class="title">
        {{ fetchItem.title }}
      </h3>
    </section>

    <section>
      <!-- 질문 댓글 -->
    </section>
    <p v-html="`${fetchItem.content}`"></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // itemInfo() {
    //   return this.$store.state.item;
    // }
    ...mapGetters(['fetchItem']),
  },
  created() { // 컴포넌트가 생성되자마자 실행되는 로직
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
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
.time
  font-size: .7rem

</style>