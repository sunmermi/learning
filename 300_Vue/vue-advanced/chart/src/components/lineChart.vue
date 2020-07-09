<template>
  <div>
    <canvas id="lineChart" ref="lineChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  mounted() {
    // var ctx = document.getElementById('lineChart');
    var ctx = this.$refs.lineChart;
    var lineChart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset 하하하',
            // backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
            fill: false,
        }]
      },

      // Configuration options go here
      options: {}
    });

    console.log('lineChart : ', lineChart);
  },
}
</script>

<style>

</style>