<template>
  <view class="login">
    <view class="login-background-img">
      <img src="~@/static/image/login-backgriund.png" />
    </view>
    <view class="login-wrapper ja-c-d">
      <view class="left-title">{{ array[index] }}</view>
      <er-title :projectCity="array[index]"></er-title>
      <view class="login-button">
        <view class="login-button-img"><img src="~@/static/image/login-button-wraimg.png" /></view>
        <view class="login-button-form">
          <view class="sel-login j-sb-a-c">
            <view class="sel-pro-login">用户登录</view>

            <view class="uni-list">
              <view class="uni-list-cell">
                <view class="uni-list-cell-db">
                  <picker @change="bindPickerChange" :value="index" :range="array">
                    <view class="uni-input"><view class="sel-checket">切换地区</view></view>
                  </picker>
                </view>
              </view>
            </view>
          </view>
          <uni-forms :modelValue="formData" ref="form" :rules="rules" class="form-wra">
            <view class="form-list">
              <uni-forms-item label="用户名" name="name" :border="true">
                <uni-easyinput :inputBorder="false" type="text" v-model="formData.name" placeholder="请输入用户名" :styles="styles" />
              </uni-forms-item>
              <uni-forms-item label="密码" name="password" :border="true">
                <uni-easyinput :inputBorder="false" type="password" v-model="formData.password" placeholder="请输入密码" :styles="styles" />
                <view class="no-pws ac"><a href="javascript:">忘记密码？</a></view>
              </uni-forms-item>
              <uni-forms-item label="验证码" name="validate" :border="true">
                <uni-easyinput :inputBorder="false" type="text" v-model="formData.validate" placeholder="请输入验证码" :styles="styles" />
              </uni-forms-item>
            </view>
            <view class="form-item j-c">
              <button @click="goToHome()" class="form-item-button j-a-c">登&nbsp&nbsp&nbsp&nbsp录</button>
            </view>
          </uni-forms>
        </view>
      </view>
      <view class="hostUnit">主办单位：{{ array[index] }}生态环境厅</view>
      <view class="login-wechat">
        <view class="wechat-img"><img src="~@/static/image/weChat-login.png" /></view>
        <view class="wechat-login">微信登录</view>
      </view>
    </view>
    <view class="login-bottom"><img src="~@/static/image/login-bottom.png" /></view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      isShowPicker: false,
      title: 'picker',
      array: ['鄂尔多斯', '包头', '青海'],
      index: 0,
      styles: {
        // background: 'red',
      },
      // 表单数据
      formData: {
        name: '',
        password: '',
        validate: ''
      },
      rules: {
        name: {
          rules: [
            {
              required: true,
              errorMessage: '请输入用户名'
            },
            {
              minLength: 3,
              maxLength: 12,
              errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符'
            }
          ]
        },
        password: {
          rules: [
            {
              required: true,
              errorMessage: '请输入密码'
            }
          ]
        },
        validate: {
          rules: [
            {
              required: true,
              errorMessage: '请输入验证码'
            }
          ]
        }
      }
    };
  },
  methods: {
    goToHome() {
      uni.switchTab({
        url: '/pages/home/home'
      });
    },
    submit() {
      this.$refs.form
        .validate()
        .then((res) => {
          console.log('表单数据信息：', res);
        })
        .catch((err) => {
          console.log('表单错误信息：', err);
        });
    },
    showPicker() {
      return (this.isShowPicker = !this.isShowPicker);
    },
    bindPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value);
      this.index = e.detail.value;
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'login.scss';
</style>
