<template>
  <div id="app">
    <h2>Chart.js</h2>
    <barChart></barChart>
    <lineChart></lineChart>
  </div>
</template>

<script>
import barChart from '@/components/barChart';
import lineChart from '@/components/lineChart';

export default {
  // 컴포넌트 속성, 인스턴그 옵션
  name: 'App',
  components: {
    barChart,
    lineChart,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto 0;

  width: 60%;
}
</style>
