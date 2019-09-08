<template>
  <section class="wrapper f-bg-grey">
    <van-cell-group>
      <van-field value=""
                 label="检查单位"
                 :is-link="true"
                 :readonly="true"
                 input-align="right"
                 @change="onChange" />
      <van-field value=""
                 label="检查日期"
                 :is-link="true"
                 :readonly="true"
                 input-align="right"
                 @change="onChange" />
      <van-field value=""
                 label="检查方式"
                 :is-link="true"
                 :readonly="true"
                 input-align="right"
                 @change="onChange" />
      <van-field value=""
                 label="轮次选择"
                 :is-link="true"
                 :readonly="true"
                 input-align="right"
                 @change="onChange" />
      <van-field value=""
                 label="餐厅经理"
                 input-align="right"
                 placeholder="请输入"
                 @change="onChange" />
    </van-cell-group>
    <div class="g-item-box">
      <ul class="m-item-content f-bg-fff">
        <li>
          <h4>视频安全</h4>
          <div>
            <div>1. 入职满30天的质检人员经过集团统一培训</div>
            <dl>
              <dt>问题描述</dt>
              <dd>
                
              </dd>
            </dl>
          </div>
        </li>
      </ul>
      <div class="m-add-btn f-pd-36 f-bg-fff f-fz-28 f-text-center f-fc-grey">添加新问题</div>
    </div>
    <div class="f-fixed-btn-area g-fixed-area f-wing-space f-wing-blank"
         :class="{'z-iphoneX': iPX}">
         <div class="m-check-info">
           <div class="f-fz-28 f-fc-grey f-pb-10">共计<span class="f-blod f-fz-36 f-pl-10">100分</span></div>
           <div class="f-fz-24 f-fc-tip">问题：0项/0次</div>
         </div>
      <van-button type="primary"
                  class="m-btn">主要按钮</van-button>
      <!-- <van-button type="primary" size="large">主要按钮</van-button> -->
    </div>
  </section>
</template>
<script type="text/ecmascript-6">
export default {
  components: {},
  data() {
    const { iPX } = this.$global
    return {
      iPX
    }
  },
  onLoad() {
    console.log(this.$global)
  },
  mounted() {},
  computed: {},
  methods: {}
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.wrapper {
  min-height: 100vh;
  padding-bottom: 198rpx;
  box-sizing: border-box;
  position: relative;
  .g-fixed-area {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -1px 3px 0 rgba(0,0,0,0.10);
    .m-check-info {
      flex: 1;
    }
    .m-btn {
      /deep/ {
        .van-button--primary {
          width: 400rpx;
          // flex-basis: 400rpx;
        }
      }
    }
  }
}
</style>