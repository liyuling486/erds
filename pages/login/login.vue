<template>
  <view class="login">
    <view class="login-background-img">
      <img src="~@/static/image/login-backgriund.png" />
    </view>
    <view class="login-wrapper ja-c-d">
      <view class="left-title">{{ areas[areasIndex] }}</view>
      <er-title :projectCity="areas[areasIndex]"></er-title>
      <view class="login-button">
        <view class="login-button-img"><img src="~@/static/image/login-button-wraimg.png" /></view>
        <view class="login-button-form">
          <view class="sel-login j-sb-a-c">
            <view class="sel-pro-login">用户登录</view>

            <view class="uni-list">
              <view class="uni-list-cell">
                <view class="uni-list-cell-db">
                  <picker @change="bindPickerChange" :value="areasIndex" :range="areas">
                    <view class="uni-input"><view class="sel-checket">切换地区</view></view>
                  </picker>
                </view>
              </view>
            </view>
          </view>
          <uni-forms :modelValue="formData" ref="form" :rules="rules" class="form-wra">
            <view class="form-list">
              <uni-forms-item label="用户名" name="name" :border="true">
                <uni-easyinput :inputBorder="false" type="text" v-model="formData.name" trim="all" placeholder="请输入用户名" :clearable="false" :styles="styles" />
              </uni-forms-item>
              <uni-forms-item label="密码" name="password" :border="true">
                <uni-easyinput :inputBorder="false" type="password" v-model="formData.password" trim="all" placeholder="请输入密码" :clearable="false" :styles="styles" />
                <view class="no-pws ac"><a href="javascript:">忘记密码？</a></view>
              </uni-forms-item>
              <uni-forms-item label="验证码" name="validate" :border="true">
                <uni-easyinput :inputBorder="false" type="text" v-model="formData.validate" trim="all" placeholder="请输入验证码" :clearable="false" :styles="styles" />
                <view class="identifyingCode"><img :src="IdentifyingCode" /></view>
              </uni-forms-item>
            </view>
            <view class="form-item j-c">
              <button @click="submit" class="form-item-button j-a-c">登&nbsp&nbsp&nbsp&nbsp录</button>
            </view>
          </uni-forms>
        </view>
      </view>
      <view class="hostUnit">主办单位：{{ areas[areasIndex] }}生态环境厅</view>
      <view class="login-wechat">
        <view class="wechat-img"><img src="~@/static/image/weChat-login.png" /></view>
        <view class="wechat-login">微信登录</view>
      </view>
      <view class="login-bottom"><img src="~@/static/image/login-bottom.png" /></view>
    </view>
  </view>
</template>

<script>
import { mapActions } from 'vuex';
import { getLoginData } from '@/service/login.js';
import { getIdentifyingCode } from '@/service/login.js';

export default {
  computed: {
    ...mapActions('login', 'setAreas') // 使用 mapActions 辅助函数映射 setAreas action
  },
  data() {
    return {
      isShowPicker: false,
      title: 'picker',
      areas: [],
      areasIndex: 0,
      styles: {},
      IdentifyingCode: '',
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
  mounted() {
    // 调用网络请求
    getLoginData()
      .then((data) => {
        // const cityData = data.result;

        // const cityDataObj = []

        // cityData.forEach((obj) => {
        //   if (obj.city && obj.platformCode) {
        //     cityDataObj.push(obj.city);
        //   }

        //   if (obj.platformCode) {
        //     cityDataObj.push(obj.platformCode);
        //   }
        // });
        // console.log(cityDataObj)
        this.setAreas(data.result.map((i) => i.city)); // 调用 setArray action 将数据存储到 Vuex
        // this.areas = data.result.map((i) => i.city);
        // console.log(this.areas);
      })
      .catch((error) => {
        console.error(error);
      });
    getIdentifyingCode().then((data) => {
      console.log(data);
      this.IdentifyingCode = this.turnToTheBase64(data.result.img);
    });
  },
  methods: {
    // goToHome() {
    //   uni.switchTab({
    //     url: '/pages/home/home'
    //   });
    // },
    submit() {
      this.$refs.form
        .validate()
        .then((res) => {
          // uni.showLoading({
          //   title: '登录中',
          //   mask: true
          // });
          getLoginData().then((res) => {
            console.log('res', res);
          });
          // this.doLogin();
        })
        .catch((err) => {
          console.log('表单错误信息：', err);
        });
    },
    doLogin(res) {
      const { name, password } = this.formData;
      const params = {
        name,
        password
      };
      // console.log(name, password);

      this.$api
        .post(url, params, undefined, undefined, undefined, true)
        .then(async (res) => {
          if (res.errCode == -1) {
            // uni.setStorage({
            // 	key: 'userInfo',
            // 	data: {
            // 		token: res.result
            // 	}
            // })
            this.login({
              token: res.result
            });
            const userRes = await this.$api.get(
              '/platform/platformUser/getLoginUserInfo',
              {
                platformCode: this.area.platformCode,
                username
              },
              undefined,
              undefined,
              true
            );

            const flag = this.$api.hasPermissions(userRes);

            if (!flag) {
              return;
            }
            // 存储用户信息
            this.login(userRes.result);
            uni.setStorage({
              key: 'platformCode',
              data: this.area.platformCode
            });
            uni.setStorage({
              key: 'province',
              data: this.area.province
            });
            uni.setStorage({
              key: 'city',
              data: this.area.city
            });
            this.setPlatformCode(this.area.platformCode);
            this.setProvinceName(this.area.province);
            this.setCityName(this.area.city);
            setTimeout(() => {
              // if (this.area.platformCode == '630000') {
              // 	this.getLoginInfo(params)
              // }
              this.getUser();
            }, 800);
          } else {
            uni.hideLoading();
            this.getCaptcha();
            setTimeout(() => {
              this.$api.msg(res.errMsg || '登录失败');
            }, 200);
          }
        })
        .catch(() => {
          this.getCaptcha();
          setTimeout(() => {
            uni.hideLoading();
          }, 1000);
        });
    },
    showPicker() {
      return (this.isShowPicker = !this.isShowPicker);
    },
    bindPickerChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value);
      this.areasIndex = e.detail.value;
    },
    turnToTheBase64(imgPath) {
      return `data:image/png;base64,${imgPath}`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import 'login.scss';
</style>
