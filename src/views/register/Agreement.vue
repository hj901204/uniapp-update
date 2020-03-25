<template>
  <div class="agreement">
    <div class="title-box">
      <h1 class="agreement-title">SupplyX用户服务协议</h1>
      <p class="time">版本生效日期：2020年3月1日</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'agreement',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.agreement {
  padding: 15px;
  overflow: auto;
  height: 100%;
  .title-box {
    .agreement-title {
      font-size: 20px;
      font-weight: bold;
    }
    .time {
      text-align: right;
    }
  }
}
</style>