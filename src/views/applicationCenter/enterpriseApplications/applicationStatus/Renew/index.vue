<template>
  <div class="renew">
    <div class="apply-title-box">
      <div class="apply-title">
        <img src="@/assets/img/application/biaoqian.png"
             alt="" />
        <span><i>SupplyX </i>{{ appInfo.title }}</span>
      </div>
      <img src="@/assets/img/application/goc-logo.png"
           alt="">
    </div>

    <div class="calculation-details">
      <div class="start-use-date">
        <span>开始日期: </span>
        <span>2020/01/21 12:32:34</span>
      </div>
      <div class="expiration-date">
        <span>剩余有效期: </span>
        <span><i>365</i>天</span>
      </div>
      <div class="renewal-period">
        <span>续费期限: </span>
        <el-input-number size="mini"
                         controls-position="right"
                         v-model="period"
                         :min="1"
                         :max="100"></el-input-number>
        年
      </div>
      <div class="cost">
        <span>费用: </span>
        <span>¥<i>100000</i></span>
      </div>
      <div class="discount-rate">
        <span>折扣: </span>
        <span>90%</span>
      </div>
    </div>
    <div class="total-price-box">
      <div class="total-price">
        <span>最终费用: </span>
        <span>¥<i>90000</i></span>
      </div>
      <div class="pay apply-btns">
        <el-button type="primary"
                   size="small">支付费用</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "renew",
  data () {
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
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  height: calc(100vh - 272px);
  i {
    font-style: normal;
    margin-left: 5px;
    display: inline-block;
  }
  .apply-title-box {
    overflow: hidden;
    padding-bottom: 10px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    .apply-title {
      float: left;
      & > img {
        width: 30px;
        vertical-align: middle;
        margin-right: 8px;
      }
      & > span {
        font-weight: bold;
        font-size: 18px;
        & > i {
          font-weight: bold;
          font-style: normal;
        }
      }
    }
    & > img {
      width: 110px;
      float: right;
    }
  }
  .calculation-details {
    padding: 16px;
    border-bottom: 2px dashed rgba(0, 0, 0, 0.1);
    & > div {
      line-height: 35px;
      & > span:first-child {
        display: inline-block;
        width: 100px;
        text-align: right;
        margin-right: 12px;
      }
      i {
        font-style: normal;
      }
    }
    .cost,
    .discount-rate {
      & > span:last-child {
        color: #d0021b;
      }
    }
  }
  .total-price-box {
    padding: 16px;
    .total-price {
      & > span:first-child {
        display: inline-block;
        width: 100px;
        text-align: right;
        margin-right: 12px;
      }
    }
    .pay {
      margin-top: 24px;
      margin-left: 30px;
    }
  }
  // & > div {
  //   line-height: 30px;
  //   & > span:first-child {
  //     margin-right: 20px;
  //   }
  // }
  // .apply-title {
  //   overflow: hidden;
  //   padding: 10px 0;
  //   & > img {
  //     width: 110px;
  //     vertical-align: middle;
  //   }
  //   & > span,
  //   i {
  //     font-weight: bold;
  //     font-size: 18px;
  //     font-style: italic;
  //     i {
  //       margin: 0 5px;
  //     }
  //   }
  // }
  // .developer {
  //   & > img {
  //     width: 130px;
  //   }
  // }
}
</style>
