<template>
  <div>
    <h4>{{ this.$route.name }} : HOC 하이 오더 컴포넌트 사용</h4>
    <p>
      => 이슈 : 탭전환을 했는데 이전페이지의 데이터가 보여진후에 데이터가 보여짐..
    </p>
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