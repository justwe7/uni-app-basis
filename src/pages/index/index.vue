<template>
  <view class="content">
    <image class="logo"
           src="/static/logo.png"></image>
    <van-button type="info"
                @click="handleLogin">登录</van-button>
    <view class="f-pt-20">
      登录状态{{isLogin}}
      <text class="title">{{title}}</text>
    </view>
  </view>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      title: 'Hello'
    }
  },
  computed: {
    ...mapGetters(['isLogin'])
  },
  methods: {},
  onLoad() {
    console.log(this.$get)
  },
  methods: {
    ...mapActions(['UPDATE_LOGIN']),
    handleLogin() {
			this.UPDATE_LOGIN(1111)
			this.$get({
				url: "/sss",
				params: {}
			}).then(res => {
				console.log(res);
			}).catch(err => {
				console.log(err);
				
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
