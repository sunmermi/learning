<template>
  <div>
    <h2>질문 상세 페이지</h2>
    <UserProfile :userInfo="fetchItem">
      <router-link slot="username" :to="`/user/${fetchItem.user}`" class="name">
        {{ fetchItem.user }}
      </router-link>
      <span slot="time" class="time">
        Posted {{ fetchItem.time_ago }}
      </span>
    </UserProfile>
    <section>
      <h3 class="title">{{ fetchItem.title }}</h3>
    </section>
    <p v-html="`${fetchItem.content}`"></p>
  </div>
</template>

<script>
import UserProfile from '@/components/UserProfile';
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(['fetchItem']),
  },
  created() { // 컴포넌트가 생성되자마자 실행되는 로직
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style lang="sass" scoped>
</style>