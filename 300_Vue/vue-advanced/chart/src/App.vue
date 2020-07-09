<template>
  <div id="app">
    <h2>Chart.js</h2>
    <barChart :propsdata="barChartDataSet"></barChart>
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
  },
  data() {
    return {
      barChartDataSet: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }],
    }
  },
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
