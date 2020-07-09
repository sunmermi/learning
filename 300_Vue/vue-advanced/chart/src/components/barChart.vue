<template>
  <div>
    <canvas id="barChart" ref="barChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js';

export default {
  mounted() { // mounted 훅에서는 컴포넌트, 템플릿, 렌더링된 돔에 접근할 수 있다 : 돔이 다 그려지고.. 인스턴스가 화면에 붙고..
    // var ctx = document.getElementById('barChart'); // getElementById 쿼리 접근자를 썼기 때문에

    var ctx = this.$refs.barChart; // ref 이점 : 각각의 컴포넌트에서만 접근할수있는 접근자
    var barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
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
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

    console.log('barChart : ', barChart);
  },
}
</script>

<style>

</style>