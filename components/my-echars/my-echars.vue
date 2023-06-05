<template>
  <div ref="chartRef" :class="className"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'my-echars',
  data() {
    return {
      clickedData: null
    };
  },
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
    console.log('1', this);
  },
  methods: {
    initChart() {
      const chartDom = this.$refs.chartRef;
      const myChart = echarts.init(chartDom);
      myChart.setOption(this.option);
      myChart.on('click', this.handleClick);
      myChart.on('globalout', this.handleGlobalOut);
    },
    handleClick(params) {
      const { dataIndex, seriesIndex } = params;
      const yAxisData = this.option.yAxis.data;
      this.clickedData = yAxisData[dataIndex];
      this.$emit('click', this.clickedData);
    },
    handleGlobalOut() {
      this.clickedData = null;
    }
  }
};
</script>

<style scoped></style>
