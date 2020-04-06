<template>
  <div class="clearAllContainer">
    <button class="clearAllBtn" v-on:click="clearTodo">
      Clear All
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo: function() {
      localStorage.clear();
    }
  },
}
</script>

<style scoped>
.clearAllBtn {
  display: block;
  width: 8.5rem;
  height: 50px;
  border-radius: 5px;
  margin: 0 auto;
  line-height: 50px;
  background-color: white;
  color: #e20303;
}
</style>