<template>
  <div>
    <h2>질문 상세 페이지</h2>
    <div class="itme_cont">
      <p class="itme_info">
        {{ fetchedItem.time_ago }} by
        <router-link v-if="fetchedItem.user" :to="`/user/${fetchedItem.user}`" class="link_user">
          {{ fetchedItem.user }}
        </router-link>
      </p>
      <h2 class="item_title">
        {{ fetchedItem.title }}
      </h2>
      <p v-html="`${fetchItem.content}`"></p>
    </div>
    
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(['fetchedItem'])
  },
  created() { // 컴포넌트가 생성되자마자 실행되는 로직
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style>

</style>