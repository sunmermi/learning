<template>
  <div>
    <canvas id="barChart" ref="barChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// import Chart from 'chart.js'; => 컴포넌트 마다 라이브러리를 로딩 않도록 chartPlugin 만들어봄.

export default {
  props: [
    'propsdata',
  ],
  mounted() { // mounted 훅에서는 컴포넌트, 템플릿, 렌더링된 돔에 접근할 수 있다 : 돔이 다 그려지고.. 인스턴스가 화면에 붙고..
    // var ctx = document.getElementById('barChart'); // getElementById 쿼리 접근자를 썼기 때문에

    var ctx = this.$refs.barChart; // ref 이점 : 각각의 컴포넌트에서만 접근할수있는 접근자
    // var barChart = new Chart(ctx, {
    var barChart = new this.$_Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
          datasets: this.propsdata,
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
        }
    });

    console.log('barChart : ', barChart);
  },
}
</script>

<style>

</style>