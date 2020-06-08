
<template>
  <div>
    <!-- 3 List Component 분리 -->
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem';
import bus from '@/utils/bus.js';

export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_NEWS');
    bus.$emit('end:spinner');
  },
};
</script>

<style lang="sass" scoped>
</style>