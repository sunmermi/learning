<template>
  <div>
    <h4>{{ this.$route.name }} : HOC 하이 오더 컴포넌트 사용</h4>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';

export default {
  components: {
    ListItem,
  },
}
</script>

<style>

</style>