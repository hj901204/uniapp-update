<template>
  <div class="apply">
    <div class="submit-success">
      <i class="el-icon-circle-check"></i>
      <span>尊敬的 木村文乃，您的信息已经提交成功。</span>
    </div>
    <ul class="apply-info">
      <li>
        <h4>我的企业</h4>
        <span>上海谷器数据科技有限公司</span>
      </li>
      <li>
        <h4>应用名称</h4>
        <span>
          <img src="../../../../assets/logo.png" alt="" />
          <span><i>·</i>SRM</span>
        </span>
      </li>
      <li>
        <h4>申请结果</h4>
        <span>申请通过</span>
      </li>
      <li>
        <h4>申请日期</h4>
        <span>2020/01/21 12:32:34</span>
      </li>
    </ul>

    <div class="apply-btns">
      <el-button type="primary" @click="handleBackAppStore">返回商城</el-button>
      <el-button type="primary" @click="handleToMyApplication"
        >查看我的企业应用</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "apply",
  data() {
    return {}
  },
  methods: {
    // 返回商城
    handleBackAppStore() {
      this.$router.push("/application/appStore")
    },
    //查看我的企业应用
    handleToMyApplication() {
      this.$router.push("/application/enterpriseApplications/myApplication")
    }
  }
}
</script>

<style lang="scss" scoped>
.apply {
  .submit-success {
    margin-top: 30px;
    .el-icon-circle-check {
      color: #009966;
      font-size: 30px;
      font-weight: bold;
      vertical-align: middle;
      margin-right: 15px;
    }
  }
  .apply-info {
    width: 90%;
    margin: 20px auto;
    li {
      text-align: left;
      border: 1px solid black;
      height: 30px;
      margin-top: -1px;
      line-height: 30px;
      h4 {
        width: 200px;
        display: inline-block;
        // text-align: center;
        padding-left: 40px;
        box-sizing: border-box;
        background-color: rgb(215, 215, 215);
      }
      & > span {
        border-left: 1px solid black;
        line-height: 30px;
        display: inline-block;
        padding-left: 20px;
        box-sizing: border-box;
        & > img {
          width: 100px;
          vertical-align: middle;
        }
        & > span,
        i {
          font-weight: bold;
          font-size: 18px;
          font-style: italic;
        }
        i {
          margin: 0 5px;
        }
      }
    }
  }
  .apply-btns {
    margin-top: 300px;
  }
}
</style>
