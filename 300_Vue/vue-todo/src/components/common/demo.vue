<template>
  <!-- 1차
    <div id="root">
      <p>{{ this.$store.getters.originalPrice }}</p>
      <p>{{ this.$store.getters.doublrPrice }}</p>
      <p>{{ this.$store.getters.triplePrice }}</p>
    </div> 
  -->

  <div id="root">
    <!-- 2차, 3차 -->
    <p>{{ originalPrice }}</p>
    <p>{{ doublrPrice }}</p>
    <p>{{ triplePrice }}</p>
  </div>
</template>

<script>
// 2차
// export default {
//   computed: {
//     originalPrice(){
//       return this.$store.getters.originalPrice;
//     },
//     doublrPrice(){
//       return this.$store.getters.doublrPrice;
//     },
//     triplePrice(){
//       return this.$store.getters.triplePrice;
//     },
//   }
// }

// 3차 
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['originalPrice', 'doublrPrice', 'triplePrice'])
  }
}
</script>