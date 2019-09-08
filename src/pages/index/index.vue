<template>
  <view class="content">
    <image class="logo"
           src="/static/logo.png"></image>
    <van-button type="info"
                @click="handleLogin1">先点我没登陆</van-button>
    <van-button type="info"
                @click="handleLogin">登录</van-button>
    <view class="f-pt-20">
      登录状态{{isLogin}}
      <div>token {{Authorization}}</div>
      <text class="title">{{title}}</text>
    </view>
    <my-test />
  </view>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import myTest from '@/components/testTpl';
export default {
  components: {myTest},
  data() {
    return {
      title: 'Hello'
    }
  },
  onShow() {
    console.log(this.$get)
  },
  onLoad() {
    console.log(this.$get)
  },
  computed: {
    ...mapGetters(['isLogin', 'Authorization'])
  },
  methods: {
    ...mapActions(['LOGIN']),
    ...mapMutations(['UPDATE_LOGIN']),
    async handleLogin() {
      console.log('登陆开始')
      await this.LOGIN()
      console.log('登陆成功')
    },
    handleLogin1() {
      this.UPDATE_LOGIN(1111)
      this.$post({
        url: '/xycheck/page.do',
        // url: '/appFoodType/foodTypeAndVariety.do',
        data: { pageSize: '20', currentPage: '1', order: 'desc' }
      })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss">
// <style>
.content {
  text-align: center;
  height: 400upx;
  @extend %textspace;
}

.logo {
  height: 200upx;
  width: 200upx;
  margin-top: 200upx;
}

.title {
  font-size: 36upx;
  color: $uni-color-error;
}
</style>
