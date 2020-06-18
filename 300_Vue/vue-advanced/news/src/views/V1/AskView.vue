<template>
  <div>
    <ul class="item_list">
      <li v-for="item in fetchedAsk" :key="item.id" class="post">
        <span class="item_points">{{ item.points || index + 1 }}</span>
        <div class="itme_cont">
          <h2 class="item_title">
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
          </h2>
          <p class="itme_info">
            {{ item.time_ago }} by
            <router-link v-if="item.user" :to="`/user/${item.user}`" class="link_user">
              {{ item.user }}
            </router-link>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
// #3
import { mapGetters } from 'vuex';

// #2
// import { mapState } from 'vuex';

export default {
  computed: {
    // #3
    // mapGtters 배열표기법 
    ...mapGetters(['fetchedAsk'])
		
		// mapGtters 객체표기법
    // ...mapGetters({
    //   fetchedAsk: 'fetchedAsk',
    //   newsItem: 'fetchedAsk' // 이름이 다르다면
    // }),

    // #2 
    // ...mapState({
    //   fetchedAsk: state => state.ask
    // })

    // #1
    // fetchedAsk() {
    //   return this.$store.state.ask;
    // }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
}
</script>

<style>

</style>