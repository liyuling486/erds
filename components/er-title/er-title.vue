<template>
  <view>
    <view :class="type">
      <view class="project-city">{{ projectCity }}财政一体化</view>
      <view class="project-type">项目前置综合管理平台</view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'er-title',
  props: {
    projectCity: {
      type: String,
      default: ''
    },
    type: {
      default() {
        return ['project-title', 'j-c-w'];
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.project {
  &-title {
    margin-top: 106rpx;
    margin-bottom: 70rpx;
    width: 480rpx;
  }

  &-city {
    color: #fff0a8;
    font-size: 24px;
  }

  &-type {
    font-size: 20px;
    color: #fff;
  }
}
</style>
