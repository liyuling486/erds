<template>
  <div ref="chartRef" :class="className"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'my-echars',
  props: {
    option: {
      type: Object,
      required: true
    },
    className: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chartDom = this.$refs.chartRef;
      const myChart = echarts.init(chartDom);
      myChart.setOption(this.option);
    }
  }
};
</script>

<style scoped></style>
