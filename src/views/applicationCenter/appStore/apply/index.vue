<template>
  <div class="apply">
    <div class="apply-title">
      <span><i>SupplyX</i>{{ params.appName }}</span>
    </div>
    <div class="submit-success">
      <span>尊敬的&nbsp<span>{{ params.enter.enterName }}</span>&nbsp，您的信息已经{{ params.result }}。</span>
    </div>
    <ul class="apply-info">
      <li>
        <h4>我的企业</h4>
        <span>{{ params.enter.enterName }}</span>
      </li>
      <li>
        <h4>应用名称</h4>
        <span>
          <span>SUPPLYX</span>-<span>{{ params.appName }}</span>
        </span>
      </li>
      <li>
        <h4>申请结果</h4>
        <span>{{ params.result }}</span>
      </li>
      <li>
        <h4>申请日期</h4>
        <span>{{ params.date }}</span>
      </li>
    </ul>
    <div class="apply-btns">
      <el-button 
        size="small" 
        @click="handleBack"
      >返回上一页
      </el-button>
      <el-button 
        size="small" 
        type="primary"  
        @click="handleJumpAppStore"
      >申请应用
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "apply",
  data() {
    return {
      params: this.$route.query.params
    }
  },
  methods: {
    // 返回上一页
    handleBack() {
      this.$router.go(-1)
    },
    // 申请应用
    handleJumpAppStore() {
      this.$router.push({ path: "/application/appStore" })
    }
  }
}
</script>

<style lang="scss" scoped>
.apply {
  height: calc(100vh - 240px);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(226, 226, 226);
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  overflow: hidden;
  .apply-title {
    height: 50px;
    border-bottom: 1px solid rgb(226, 226, 226);
    text-align: left;
    & > span,i {
      font-weight: bold;
      font-size: 18px;
      font-style: normal;
      line-height: 32px;
      i {
        margin: 0 5px;
      }
    }
  }
  .submit-success {
    padding: 25px 0;
    text-align: left;
    font-family:PingFangSC-Regular;
    font-size:16px;
    color:#1a1a1a;
    letter-spacing:0;
    text-align:left;
  }
  .apply-info {
    width: 70%;
    font-family:PingFangSC-Regular;
    font-size:14px;
    color:#1a1a1a;
    letter-spacing:0;
    text-align:left;
    li {
      text-align: left;
      border: 1px solid rgb(226, 226, 226);
      height: 35px;
      margin-top: -1px;
      line-height: 35px;
      h4 {
        width: 130px;
        display: inline-block;
        padding-left: 40px;
        box-sizing: border-box;
      }
      & > span {
        border-left: 1px solid rgb(226, 226, 226);
        line-height: 30px;
        display: inline-block;
        padding-left: 20px;
        box-sizing: border-box;
      }
    }
  }
  .apply-btns {
    margin-top: 30px;
    float: left;
  }
}
</style>
