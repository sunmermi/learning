<template>
  <div>
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import bus from "@/utils/bus.js";

export default {
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner'); // 이벤트를 보내
    this.$store.dispatch('FETCH_NEWS'); // 임시 : 이벤트 버스 실습을 위한
    bus.$emit('end:spinner'); // 이벤트를 보내
  },
}
</script>

<style>

</style>