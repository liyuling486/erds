<template>
  <view :class="['text',type]"><slot></slot></view>
</template>

<script>
export default {
  name: 'home-title',
  props: {
    type: {
      type: String
    }
  },
};
</script>

<style lang="scss">
.text {
  margin-right: auto;
  padding-left: 26px;
  font-size: 36rpx;
}
</style>
