<template>
  <div class="header">
    <router-link to="/news">News</router-link>
    <router-link to="/ask">Ask</router-link>
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.header
  display: flex
  justify-content: center
  align-items: center
  padding: 8px
  background-color: #FFCF1A
  a
    padding: 0 20px
    margin: 0 4px
    font-weight: bold
    color: #fff
    text-decoration: none
    &.router-link-exact-active
      color: #333
</style>