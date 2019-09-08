<script>
export default {
  onLaunch: function() {
    console.log('App Launch')
  },
  onShow: function() {
    console.log('App Show')
  },
  onHide: function() {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
/*每个页面公共css */
/* vant 样式覆盖 */
.van-button--primary {
  background-image: linear-gradient(45deg, #00a796 0%, #0ac66c 100%) !important;
  height: 80rpx !important;
  line-height: 80rpx !important;
  border-radius: 8rpx !important;
  border: none !important;
}

/* hack 屏幕样式 */
$xHeight: 68rpx;
.f-fixed-btn-area {
  //固定底部按钮
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  &.z-iphoneX {
    bottom: $xHeight;
    &::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: -$xHeight;
      height: $xHeight;
      width: 100%;
      background-color: #fff;
    }
  }
}

.f-bg-fff {
  background-color: #fff;
}
.f-bg-grey {
  background-color: $bg-color-grey;
}

/* 字体颜色 */
.f-fc {
  color: $text-color;
}
.f-fc-grey {
  color: $text-color-grey;
}
.f-fc-tip {
  color: $text-color-placeholder;
}

.f-word-break {
  @extend %wordbreak;
}

.f-blod {
  font-weight: 700;
}

.f-text-center {
  text-align: center;
}

.f-text-right {
  text-align: right;
}

.f-text-left {
  text-align: left;
}

/* 布局留白 */
.f-clearfix,
.clearfix {
  @extend %clearfix;
}

.f-fl {
  float: left;
}

.f-fr {
  float: right;
}

.f-center-block {
  @extend %centerblock;
}
.f-wing-blank {
  padding-left: 28rpx;
  padding-right: 28rpx;
}

.f-wing-space {
  padding-top: 26rpx;
  padding-bottom: 26rpx;
}

/* .f-iphonex-button {
  bottom: 68rpx !important;
}
.f-iphonex-button::after {
  content: ' ';
  position: fixed;
  bottom: 0 !important;
  height: 68rpx !important;
  width: 100%;
  background: #fff;
} */

.f-width-all {
  width: 100%;
  flex-basis: 100%;
}

.f-height-all {
  height: 100%;
}

/* width */
$valArr: 170 164 135 124 100 96 92 90 60 58 36 30 28;
@each $val in $valArr {
  .f-width-#{$val} {
    width: $val + rpx;
  }
}

/* height */
$valArr: 164 120 100 92 90 80 60 58 56 52 36 30 28;
@each $val in $valArr {
  .f-height-#{$val} {
    height: $val + rpx;
  }
}

/* padding */

$valArr: 5 10 20 36 50;
@each $val in $valArr {
  .f-pd-#{$val} {
    padding: $val + rpx;
  }
}

$valArr: 10 16 19 20 24 28 30 40 70;
@each $val in $valArr {
  .f-pt-#{$val} {
    padding-top: $val + rpx;
  }
}

$valArr: 10 24 40 60 70 80 90 100 200;
@each $val in $valArr {
  .f-pr-#{$val} {
    padding-right: $val + rpx;
  }
}

$valArr: 10 16 20 24 28 30 40 50 70;
@each $val in $valArr {
  .f-pb-#{$val} {
    padding-bottom: $val + rpx;
  }
}

$valArr: 10 18 19 24 40 60 70 80 90 100 200;
@each $val in $valArr {
  .f-pl-#{$val} {
    padding-left: $val + rpx;
  }
}

/* margin */

$mrArr: 5 10 12 20 24 30 40;
@each $val in $mrArr {
  .f-mr-#{$val} {
    margin-right: $val + rpx;
  }
}

$mbArr: 10 12 20 24 28 40 50 80 100;
@each $val in $mbArr {
  .f-mb-#{$val} {
    margin-bottom: $val + rpx;
  }
}

$mtArr: 4 10 16 18 19 20 28 30 32 40 46 48 50 60 80 100;
@each $val in $mtArr {
  .f-mt-#{$val} {
    margin-top: $val + rpx;
  }
}

/* font */

$fzArr: 18 20 22 24 26 28 30 32 36 40 42 44 48 60 64;
@each $val in $fzArr {
  .f-fz-#{$val} {
    font-size: $val + rpx;
  }
}
</style>