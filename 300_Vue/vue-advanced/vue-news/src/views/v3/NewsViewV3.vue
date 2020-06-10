
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
  created() { // 데이터를 불러오는 구간이 뉴스,직업,질문이 다 같아서 재활용!!!
    bus.$emit('start:spinner');
    setTimeout(() => { // setTimeout은 스피너 보기위해 임시로 만든것임
      // FETCH_NEWS 함수를 데이터 객체를 반환하도록 만들었기 때문에
      // 체이닝을 해서 추가적인 처리를 할수 있음.
      this.$store.dispatch('FETCH_NEWS')
        .then( () => {
          console.log('fatched');
          bus.$emit('end:spinner');
        })
        .catch( (error) => {
          console.log(error);
        }); 
    }, 3000);
  },
};
</script>

<style lang="sass" scoped>
</style>