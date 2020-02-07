<template>
  <div class="renew">
    <div class="apply-title">
      <img src="@/assets/logo.png" alt="" />
      <span><i>·</i>{{ appInfo.title }}</span>
    </div>
    <div class="developer">
      <span>开发商:</span>
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div class="start-use-date">
      <span>开始使用日期:</span>
      <span>2020/01/21 12:32:34</span>
    </div>
    <div class="expiration-date">
      <span>有效期</span>
      <span>一年</span>
    </div>
    <div class="renewal-period">
      <span>续费期限:</span>
      <el-input-number
        size="mini"
        controls-position="right"
        v-model="period"
        :min="1"
        :max="100"
      ></el-input-number>
      年
    </div>
    <div class="cost">
      <span>费用</span>
      <span><i>10000</i>年</span>
    </div>
    <div class="discount-rate">
      <span>折扣率:</span>
      <span>90%</span>
    </div>
    <div class="total-price">
      <span>最终费用:</span>
      <span>9000</span>
    </div>
    <div class="pay">
      <el-button type="primary" plain>支付</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "renew",
  data() {
    return {
      period: "",
      appInfo: this.$route.query.appInfo
    }
  }
}
</script>

<style lang="scss" scoped>
.renew {
  text-align: left;
  & > div {
    line-height: 30px;
    & > span:first-child {
      margin-right: 20px;
    }
  }
  .apply-title {
    overflow: hidden;
    padding: 10px 0;
    & > img {
      width: 110px;
      vertical-align: middle;
    }
    & > span,
    i {
      font-weight: bold;
      font-size: 18px;
      font-style: italic;
      i {
        margin: 0 5px;
      }
    }
  }
  .developer {
    & > img {
      width: 130px;
    }
  }
}
</style>
