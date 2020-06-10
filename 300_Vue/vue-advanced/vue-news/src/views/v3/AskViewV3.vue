
<template>
  <div>
    <!-- 3 List Component 분리 -->
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem';

export default {
  components: {
    ListItem,
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style lang="sass" scoped>
</style>