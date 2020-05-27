<template>
  <div class="clearAllContainer">
    <button class="clearAllBtn" v-on:click="clearTodo">
      Clear All
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      clearTodo: 'clearAllItems',
    }),

    // clearTodo: function() {
    //   // this.$emit('clearAll');
    //   this.$store.commit('clearAllItems');
    // }
  },
}
</script>

<style scoped>
.clearAllBtn {
  display: block;
  width: 8.5rem;
  height: 50px;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  margin: 0 auto;
  line-height: 50px;
  background-color: white;
  color: #e20303;
}
</style>