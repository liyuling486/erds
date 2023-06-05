<template>
  <view class="notes">
    <view class="header-sel">
      <view class="header-sel-bgimg">
        <img src="~@/static/image/top.png" />
      </view>
      <view class="header-sel-title">任务中心</view>
    </view>
    <view class="notes-content">
      <view class="notes-content-title">
        <view v-for="tab in tabs" :key="tab.id" :class="{ tab: true, active: activeTab === tab.id }" @click="changeTab(tab.id)">
          {{ tab.name }}
        </view>
      </view>
      <view class="notes-content-content">
        <view v-if="activeTab === 'a'">
          <view class="notes-content-content-title">
            <view class="">项目公告</view>
            <view class="">最新通知</view>
            <view class="">国家政策</view>
            <view class="">法律信息</view>
            <view class="">省级政策</view>
            <view class="">信息动态</view>
            <view class="">地方政策</view>
          </view>
          <view class="notes-content-essay">
            <view class="notes-content-essay-title">组织召开学东弄通坐视重要讲话精神研讨会</view>
            <view class="notes-content-essay-content">组织召开学东弄通坐视重要讲话精神研讨会组织召开学东弄通坐视重要讲话精神研讨会</view>
            <view class="notes-content-essay-bottom j-sb-a-c">
              <view class="">新闻</view>
              <view class="j-sb-a-c">
                <view class="">2022-09-24</view>
                <view class="">浏览：208</view>
              </view>
            </view>
          </view>
        </view>
        <view v-else-if="activeTab === 'b'">b</view>
        <view v-else-if="activeTab === 'c'">c</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { id: 'a', name: '新闻政策' },
        { id: 'b', name: '通知公告' },
        { id: 'c', name: '重大项目周报' }
      ],
      activeTab: 'a'
    };
  },
  methods: {
    changeTab(tabId) {
      this.activeTab = tabId; // 切换选项卡
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'notes.scss';
</style>
