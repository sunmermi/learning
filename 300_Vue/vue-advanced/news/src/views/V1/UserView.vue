<template>
  <div>
    <h2 class="">{{ userInfo.id }}</h2>
    <div>
      <span slot="time" class="time">
        Joined {{ userInfo.created }}
      </span>
      <span slot="karma" class="karma">
        {{ userInfo.karma }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userInfo(){
      return this.$store.state.user;
    }
  },
  created() {
    const username = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', username);
  },
}
</script>

<style>

</style> ㅇ