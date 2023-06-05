<template>
  <view class="charts-box">
    <qiun-data-charts type="bar" :opts="opts" :chartData="chartData" @tap="handleChartTouch" />
  </view>
</template>

<script>
export default {
  data() {
    return {
      chartData: {},
      opts: {
        color: ['#7291F8', '#73DEB3', '#FAC858', '#EE6666', '#73C0DE', '#3CA272', '#FC8452', '#9A60B4', '#ea7ccc'],
        padding: [15, 30, 0, 5],
        enableScroll: false,
        legend: {
          position: 'top',
          float: 'left'
        },
        xAxis: {
          disableGrid: false,
          axisLine: false,
          splitNumber: 7,
          gridColor: '#D9D9D9',
          disabled: true
        },
        yAxis: {
          disabledGrid: false
        },
        title: { name: 'xxx' },
        extra: {
          bar: {
            type: 'group',
            width: 30,
            meterBorde: 1,
            meterFillColor: '#FFFFFF',
            activeBgColor: '#000000',
            activeBgOpacity: 0.08,
            linearType: 'none',
            seriesGap: 2,
            categoryGap: 8
          }
        }
      }
    };
  },
  mounted() {
    this.getServerData();
  },
  updated() {
    console.log(this.chartData.categories[0]);
    console.log(this);
  },
  methods: {
    getServerData() {
      //模拟从服务器获取数据时的延时
      setTimeout(() => {
        //模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
        let res = {
          categories: ['2019', '2020', '2021', '2022', '2023'],
          series: [
            {
              name: '计划投资',
              data: [380, 320, 475, 640, 470]
            },
            {
              name: '实际投资',
              data: [290, 330, 470, 530, 430]
            }
          ]
        };
        this.chartData = JSON.parse(JSON.stringify(res));
      }, 500);
    }
  },
  handleChartTouch(e) {
    const chartInstance = e.detail.chartInstance;
    const { data } = chartInstance.getChartData(e);

    if (data && data.length > 0) {
      const dataIndex = data[0].dataIndex;
      const year = this.chartData.categories[dataIndex];
      this.$emit('updateYear', year);
    }
  }
};
</script>

<style scoped>
/* 请根据实际需求修改父元素尺寸，组件自动识别宽高 */
.charts-box {
  width: 100%;
  height: 300px;
}
</style>
