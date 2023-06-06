<template>
  <view class="view-grid-card">
    <view class="header-sel">
      <view class="header-sel-bgimg">
        <img src="~@/static/image/top.png" />
      </view>
      <view class="header-sel-content">
        <picker @change="bindPickerChange" :value="index" :range="array">
          <view class="uni-input">{{ array[index] }}</view>
        </picker>
      </view>
      <uni-search-bar placeholder="输入内容后点击搜索" bgColor="#fff" @confirm="search" class="header-sel-search" />
    </view>
    <view class=""></view>
    <view class="content-car">
      <view class="content-car-title j-sb-ai-s">
        <view class="content-car-title-left">乌海市第五污水处理厂水质提升项目</view>
        <view class="content-car-title-right">建设中</view>
      </view>
      <view class="content-car-content">
        <ul>
          <li>
            <span>总投资：</span>
            <span>4350.5万元</span>
          </li>
          <li>
            <span>项目单位：</span>
            <span>鄂尔多斯某某生态管理局</span>
          </li>
          <li>
            <span>主管部门：</span>
            <span>鄂尔多斯生态环境厅</span>
          </li>
          <li>
            <span>建设期限：</span>
            <span>2020-03-01至2022-12-3</span>
          </li>
        </ul>
      </view>
      <view class="j-sb content-car-content-btm">
        <view class="j-sb content-car-content-btm-l">
          <view class="">
            <img src="~@/static/image/transfer.png" />
            移动
          </view>
          <view class="shoucan">
            <img src="~@/static/image/collection0.png" />
            收藏
          </view>
        </view>
        <view class="content-car-content-btm-r">形象进度</view>
      </view>
    </view>

    <view class="content-car">
      <view class="content-car-title j-sb-ai-s">
        <view class="content-car-title-left">乌海市第五污水处理厂水质提升项目</view>
        <view class="content-car-title-right">建设中</view>
      </view>
      <view class="content-car-content">
        <ul>
          <li>
            <span>总投资：</span>
            <span>4350.5万元</span>
          </li>
          <li>
            <span>项目单位：</span>
            <span>鄂尔多斯某某生态管理局</span>
          </li>
          <li>
            <span>主管部门：</span>
            <span>鄂尔多斯生态环境厅</span>
          </li>
          <li>
            <span>建设期限：</span>
            <span>2020-03-01至2022-12-3</span>
          </li>
        </ul>
      </view>
      <view class="j-sb content-car-content-btm">
        <view class="j-sb content-car-content-btm-l">
          <view class="">
            <img src="~@/static/image/transfer.png" />
            移动
          </view>
          <view class="shoucan">
            <img src="~@/static/image/collection0.png" />
            收藏
          </view>
        </view>
        <view class="content-car-content-btm-r">形象进度</view>
      </view>
    </view>

    <view class="content-car">
      <view class="content-car-title j-sb-ai-s">
        <view class="content-car-title-left">乌海市第五污水处理厂水质提升项目</view>
        <view class="content-car-title-right">建设中</view>
      </view>
      <view class="content-car-content">
        <ul>
          <li>
            <span>总投资：</span>
            <span>4350.5万元</span>
          </li>
          <li>
            <span>项目单位：</span>
            <span>鄂尔多斯某某生态管理局</span>
          </li>
          <li>
            <span>主管部门：</span>
            <span>鄂尔多斯生态环境厅</span>
          </li>
          <li>
            <span>建设期限：</span>
            <span>2020-03-01至2022-12-3</span>
          </li>
        </ul>
      </view>
      <view class="j-sb content-car-content-btm">
        <view class="j-sb content-car-content-btm-l">
          <view class="">
            <img src="~@/static/image/transfer.png" />
            移动
          </view>
          <view class="shoucan">
            <img src="~@/static/image/collection0.png" />
            收藏
          </view>
        </view>
        <view class="content-car-content-btm-r">形象进度</view>
      </view>
    </view>

    <view class="content-car">
      <view class="content-car-title j-sb-ai-s">
        <view class="content-car-title-left">乌海市第五污水处理厂水质提升项目</view>
        <view class="content-car-title-right">建设中</view>
      </view>
      <view class="content-car-content">
        <ul>
          <li>
            <span>总投资：</span>
            <span>4350.5万元</span>
          </li>
          <li>
            <span>项目单位：</span>
            <span>鄂尔多斯某某生态管理局</span>
          </li>
          <li>
            <span>主管部门：</span>
            <span>鄂尔多斯生态环境厅</span>
          </li>
          <li>
            <span>建设期限：</span>
            <span>2020-03-01至2022-12-3</span>
          </li>
        </ul>
      </view>
      <view class="j-sb content-car-content-btm">
        <view class="j-sb content-car-content-btm-l">
          <view class="">
            <img src="~@/static/image/transfer.png" />
            移动
          </view>
          <view class="shoucan">
            <img src="~@/static/image/collection0.png" />
            收藏
          </view>
        </view>
        <view class="content-car-content-btm-r">形象进度</view>
      </view>
    </view>

    <view class="content-car">
      <view class="content-car-title j-sb-ai-s">
        <view class="content-car-title-left">乌海市第五污水处理厂水质提升项目</view>
        <view class="content-car-title-right">建设中</view>
      </view>
      <view class="content-car-content">
        <ul>
          <li>
            <span>总投资：</span>
            <span>4350.5万元</span>
          </li>
          <li>
            <span>项目单位：</span>
            <span>鄂尔多斯某某生态管理局</span>
          </li>
          <li>
            <span>主管部门：</span>
            <span>鄂尔多斯生态环境厅</span>
          </li>
          <li>
            <span>建设期限：</span>
            <span>2020-03-01至2022-12-3</span>
          </li>
        </ul>
      </view>
      <view class="j-sb content-car-content-btm">
        <view class="j-sb content-car-content-btm-l">
          <view class="">
            <img src="~@/static/image/transfer.png" />
            移动
          </view>
          <view class="shoucan">
            <img src="~@/static/image/collection0.png" />
            收藏
          </view>
        </view>
        <view class="content-car-content-btm-r">形象进度</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      array: ['孵化库', '储备库', '评审库', '管理库', '完成库'],
      index: 1,
    };
  },
  methods: {
    change(e) {
      console.log('e:', e);
    },
    bindPickerChange: function (e) {
      this.index = e.detail.value;
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'view-grid-card.scss';
</style>
