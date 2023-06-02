<template>
  <view class="home">
    <view class="title-bg">
      <img src="~@/static/image/home-title-bg.png" />
      <view class="title-content">
        <view class="title-city">鄂尔多斯市</view>
        <er-title type="title-head j-d"></er-title>
      </view>
    </view>
    <view class="todo-wrapper">
      <view class="todo-list">
        <view class="todo-list-total ja-c-d">
          <view class="num">{{ todoTotal }}</view>
          <view class="title">待办总数</view>
        </view>
        <view class="todo-line"></view>
        <view class="todo-list-preliminary ja-c-d">
          <view class="num">{{ todoPreliminary }}</view>
          <view class="title">初审待办</view>
        </view>
        <view class="todo-line"></view>
        <view class="todo-list-review ja-c-d">
          <view class="num">{{ todoReview }}</view>
          <view class="title">评审待办</view>
        </view>
      </view>

      <view class="home-content ja-c-d">
        <view class="line"></view>
        <view class="project-overview">
          <view class="project-overview-title j-sb-a-c">
            <home-title>项目总览</home-title>
            <uni-data-select v-model="value" :localdata="range" @change="change" :clear="false"></uni-data-select>
          </view>
          <view class="project-overview-content">
            <view class="img">
              <img src="~@/static/image/home-project-overview.png" />
              <view class="xmzs-total">
                <view class="xmzs-num">834</view>
                <view class="xmzs-text">项目总数</view>
              </view>
            </view>
            <view class="project-overview-content-total">
              <view class="j-sb-a-c total-bg">
                <view class="f">
                  <img src="~@/static/image/xmzl1.png" />
                  <view class="total-state">总投资</view>
                </view>
                <view class="ai-fe">
                  <view class="total-par">580</view>
                  <view class="">亿</view>
                </view>
              </view>
              <view class="j-sb-a-c total-bg">
                <view class="f">
                  <img src="~@/static/image/xmzl2.png" />
                  <view class="total-state">完成投资</view>
                </view>
                <view class="ai-fe">
                  <view class="total-par">420</view>
                  <view class="">亿</view>
                </view>
              </view>
              <view class="j-sb-a-c total-bg">
                <view class="f">
                  <img src="~@/static/image/xmzl3.png" />
                  <view class="total-state">完成率</view>
                </view>
                <view class="ai-fe">
                  <view class="total-par">72.4</view>
                  <view class="">%</view>
                </view>
              </view>
            </view>
          </view>
        </view>
        <home-title type="pro-top">政府投资</home-title>
        <view class="government-investment j-sb-a-c-w">
          <view class="government-investment-left">
            <my-echars :option="chartOption" :className="'government-investment-echarts'"></my-echars>
            <view class="alltzouzi ja-c-d">
              <view class="alltzouzi-num">30</view>
              <view class="alltzouzi-text">总投资(亿)</view>
            </view>
          </view>
          <view class="government-investment-right">
            <view class="government-investment-right-dataTop government-investment-bgc ja-c-d">
              <view class="money">12亿</view>
              <view class="loding">完成投资</view>
            </view>
            <view class="government-investment-right-dataBtm government-investment-bgc ja-c-d">
              <view class="money">7%</view>
              <view class="loding">预算执行率</view>
            </view>
          </view>
          <view class="government-investment-data j-sb-a-c-w">
            <view class="ac data-btm">
              <view class="circle1"></view>
              <view class="">中央投资</view>
              <view class="total">45亿</view>
              <view class="total1">(58.5%)</view>
            </view>
            <view class="ac data-btm">
              <view class="circle2"></view>
              <view class="">市级投资</view>
              <view class="total">45亿</view>
              <view class="total2">(58.5%)</view>
            </view>
            <view class="ac data-btm">
              <view class="circle3"></view>
              <view class="">省级投资</view>
              <view class="total">45亿</view>
              <view class="total3">(58.5%)</view>
            </view>
            <view class="ac data-btm">
              <view class="circle4"></view>
              <view class="">县级投资</view>
              <view class="total">45亿</view>
              <view class="total4">(58.5%)</view>
            </view>
          </view>
        </view>
        <view class="analytic-statistics">
          <view class="j-sb distance-r">
            <home-title type="pro-top">分析统计</home-title>
            <view class="statistics-checkout">
              <view v-for="tab in tabs" :key="tab.id" :class="{ tab: true, active: activeTab === tab.id }" @click="changeTab(tab.id)">
                {{ tab.name }}
              </view>
            </view>
          </view>
          <view class="analytic-statistics-content">
            <view>
              <view class="tab-content">
                <view v-if="activeTab === 'a'">
                  <table>
                    <thead>
                      <tr>
                        <th>地区</th>
                        <th>项目数</th>
                        <th>总投资(亿)</th>
                        <th>预算执行率</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in visibleData" :key="index" :class="index % 2 === 0 ? 'even' : 'odd'">
                        <td class="region">{{ item.region }}</td>
                        <td>{{ item.projectCount }}</td>
                        <td>{{ item.totalInvestment }}</td>
                        <td>{{ item.budgetExecutionRate }}</td>
                      </tr>
                      <tr v-if="showMore" class="more" @click="toggleMore">
                        <td colspan="4">更多</td>
                      </tr>
                      <tr v-else class="more-close" @click="toggleMore">
                        <td colspan="4">收起</td>
                      </tr>
                    </tbody>
                  </table>
                </view>
                <view v-else-if="activeTab === 'b'">
                  <table>
                    <thead>
                      <tr>
                        <th>地区</th>
                        <th>项目数</th>
                        <th>总投资(亿)</th>
                        <th>预算执行率</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in visibleData" :key="index" :class="index % 2 === 0 ? 'even' : 'odd'">
                        <td class="region">{{ item.region.slice(0, 2) }}</td>
                        <td>{{ Math.floor(Math.random() * 100) }}</td>
                        <td>{{ Math.floor(Math.random() * 110) }}</td>
                        <td>{{ Math.floor(Math.random() * 100) + '%' }}</td>
                      </tr>
                      <tr v-if="showMore" class="more" @click="toggleMore">
                        <td colspan="4">更多</td>
                      </tr>
                      <tr v-else class="more-close" @click="toggleMore">
                        <td colspan="4">收起</td>
                      </tr>
                    </tbody>
                  </table>
                </view>
              </view>
            </view>
          </view>
        </view>
        <view class="construction-state">
          <home-title type="pro-top">建设状态</home-title>
          <view class="construction-state-content j-d">
            <view class="construction-state-content-1 j-sb-ai-s">
              <view class="">
                <view class="title">项目总数</view>
                <view class="t-num">295</view>
              </view>
              <view class="">
                <view class="title">已落实</view>
                <view class="t-num t-num-j">166</view>
              </view>
              <view class="">
                <img src="~@/static/image/construction-state-right.png" />
              </view>
            </view>
            <view class="construction-state-content-2 j-sb">
              <view class="shuju ja-c-d">
                <view class=""><img src="~@/static/image/jszt1.png" /></view>
                <view class="shuju1">未建项目</view>
                <view class="shuju2">21</view>
                <view class="shuju3">落实 13</view>
              </view>
              <view class="shuju ja-c-d">
                <view class=""><img src="~@/static/image/jszt2.png" /></view>
                <view class="shuju1">在建项目</view>
                <view class="shuju2">232</view>
                <view class="shuju3">落实 124</view>
              </view>
              <view class="shuju ja-c-d">
                <view class=""><img src="~@/static/image/jszt3.png" /></view>
                <view class="shuju1">完工项目</view>
                <view class="shuju2">42</view>
                <view class="shuju3">落实 24</view>
              </view>
            </view>
            <view class="construction-state-content-3">
              <view class="uzxu">
                <view class="uzxu-t">项目手续</view>
                <view class="uzxu-img"><img src="~@/static/image/project-procedures.png" /></view>
              </view>
              <view class="uzxu-data">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>总数</th>
                      <th>未建项目</th>
                      <th>在建项目</th>
                      <th>完工项目</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in uzxuData" :key="index" :class="index % 2 === 0 ? 'even' : 'odd'">
                      <td class="region">{{ item }}</td>
                      <td>{{ Math.floor(Math.random() * 100) }}</td>
                      <td>{{ Math.floor(Math.random() * 100) }}</td>
                      <td>{{ Math.floor(Math.random() * 100) }}</td>
                      <td>{{ Math.floor(Math.random() * 100) }}</td>
                    </tr>
                  </tbody>
                </table>
              </view>
            </view>
            <view class="construction-state-content-4"></view>
          </view>
        </view>
        <view class="years-investment">
          <home-title type="pro-top">历年投资</home-title>
          <view class="years-investment-content">
            <view class="echarts-content">
              <my-echars :option="investmentData" :className="'years-investment-echarts'"></my-echars>
            </view>
            <view class="">1111</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      todoTotal: 13,
      todoPreliminary: 9,
      todoReview: 4,
      value: 0,
      tabs: [
        { id: 'a', name: '地区' },
        { id: 'b', name: '部门' }
      ],
      activeTab: 'a', // 默认选中的选项卡
      range: [
        { value: 0, text: '2023年' },
        { value: 1, text: '2022年' },
        { value: 2, text: '2021年' }
      ],
      tableData: [
        { region: '东胜区', projectCount: 96, totalInvestment: 65.3, budgetExecutionRate: '95.4%' },
        { region: '康巴什区', projectCount: 88, totalInvestment: 58.6, budgetExecutionRate: '93.5%' },
        { region: '达拉特旗', projectCount: 84, totalInvestment: 59.3, budgetExecutionRate: '65.3%' },
        { region: '准格尔旗', projectCount: 72, totalInvestment: 64.3, budgetExecutionRate: '65.2%' },
        { region: '乌省旗', projectCount: 70, totalInvestment: 48.5, budgetExecutionRate: '56.7%' }
      ],
      showMore: true,
      uzxuData: ['合计', '立项', '规划', '环评', '能评'],
      chartOption: {
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            type: 'pie',
            radius: ['55%', '85%'],
            label: {
              show: false
            },
            data: [{ value: 60 }, { value: 5 }, { value: 10 }, { value: 25 }],
            color: ['rgb(100, 161, 255)', 'rgb(38, 224, 176)', 'rgb(251, 117, 91)', 'rgb(255, 196, 38)']
          }
        ]
      },
      investmentData: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          left: 'left',
          icon: 'rect',
          textStyle: {
            fontSize: '24rpx',
            color: 'rgba(0,0,0,0.45)',
            padding: [0, 0, 0, 5]
          },
          itemWidth: 12,
          itemHeight: 12,
          padding: [30, 0, 0, 0],
          itemGap: 8
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01],
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          type: 'category',
          data: ['2023', '2022', '2021', '2020', '2019'],
          boundaryGap: [0, 0.1],
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: '24rpx',
            color: 'rgba(0,0,0,0.45)'
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0.1)',
              width: 2
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(0,0,0,0.45)',
              width: 2
            }
          }
        },
        series: [
          {
            name: '计划投资',
            type: 'bar',
            data: [470, 640, 475, 320, 380],
            label: {
              show: true,
              position: 'right', // 设置标签位置为柱状图内部
              color: '#595959',
              fontSize: '24rpx'
            },
            itemStyle: {
              color: '#7291F8'
            }
          },
          {
            name: '实际投资',
            type: 'bar',
            data: [430, 530, 470, 330, 290],
            label: {
              show: true,
              position: 'right',
              color: '#595959',
              fontSize: '24rpx'
            },
            itemStyle: {
              color: '#73DEB3'
            }
          }
        ]
      }
    };
  },
  computed: {
    visibleData() {
      return !this.showMore ? this.tableData.concat(this.generateDummyData()) : this.tableData.slice(0, 6);
    }
  },
  methods: {
    change(e) {
      console.log('e:', e);
    },
    changeTab(tabId) {
      this.activeTab = tabId; // 切换选项卡
    },
    toggleMore() {
      this.showMore = !this.showMore;
    },
    generateDummyData() {
      const dummyData = [];
      for (let i = 0; i < 6; i++) {
        dummyData.push({
          region: `地区${i + 1}`,
          projectCount: Math.floor(Math.random() * 100),
          totalInvestment: (Math.random() * 100).toFixed(1),
          budgetExecutionRate: `${Math.random().toFixed(1)}%`
        });
      }
      return dummyData;
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'home.scss';
.government-investment-echarts {
  width: 355rpx;
  height: 400rpx;
}
.years-investment-echarts {
  width: 100%;
  height: 500rpx;
}
.pro-top {
  margin-top: 48rpx;
  margin-bottom: 16rpx;
}
</style>
