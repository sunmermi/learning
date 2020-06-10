<template>
  <div>
    <!-- ListView는 데이터를 불러와서 뿌려주는 역활만 할것임 -->
    <!--  ListItem 으로 보내주기만 할것임 -->
    <ListItem></ListItem>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';

export default {
  components: {
    ListItem,
  }
}
</script>

<style>

</style>