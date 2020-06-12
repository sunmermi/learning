
<template>
  <div>
    <!-- 3 List Component 분리 -->
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem';
// import ListMixin from '@/mixins/ListMixin.js';

export default {
  components: {
    ListItem,
  },
  // mixins: [
  //   ListMixin,
  // ],
};
</script>

<style lang="sass" scoped>
</style>