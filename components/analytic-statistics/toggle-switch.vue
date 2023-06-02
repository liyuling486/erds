<template>
  <view>
    <view class="tab-bar">
      <view v-for="tab in tabs" :key="tab.id" :class="{ tab: true, active: activeTab === tab.id }" @click="changeTab(tab.id)">
        {{ tab.name }}
      </view>
    </view>
    <view class="tab-content">
      <slot :activeTab="activeTab"></slot>
    </view>
  </view>
</template>

<script>
export default {
  name: 'ToggleSwitch',
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeTab: this.tabs[0].id // 默认选中的选项卡
    };
  },
  methods: {
    changeTab(tabId) {
      this.activeTab = tabId; // 切换选项卡
    }
  }
};
</script>

<style lang="scss">
.toggle-switch-items {
  border: 1px solid red;
  display: flex;
  .toggle-switch-item {
    height: 100px;
  }
}
.active {
  color: #eb4450;
}
</style>
