<template>
  <div>
    <UserProfile>
      <div slot="username" class="name">{{ userInfo.id }}</div>
      <span slot="time" class="time">joined {{ userInfo.created }}</span> 
      <span slot="karma" class="karma">, {{ userInfo.karma }}</span> 
    </UserProfile>
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
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

</style>