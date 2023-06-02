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
      myChart.on('click', this.handleClick);
      myChart.setOption(this.option);
    },
    handleClick(params) {
      // 处理点击事件的逻辑
      console.log('Clicked:', params);
    }
  }
};
</script>

<style scoped></style>
