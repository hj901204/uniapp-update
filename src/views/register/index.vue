<template>
  <div class="register-page">
    <div v-if="$route.path == '/register'">
      <PageTitle />
      <h3 class="process-title">注册流程说明</h3>
      <ul class="process-list">
        <li>
          <h4>1. 填写基本信息</h4>
          <p>填写您企业的基本信息；</p>
        </li>
        <li>
          <h4>2. 提交您的信息并等待确认</h4>
          <p>您的信息将会提交到系统，系统将对您的信息进行必要的审核</p>
        </li>
        <li>
          <h4>3. 获得企业ID以及管理账号</h4>
          <p>
            审核通过之后将发送一封邮件到您的邮箱，您将获得：<br />
            1. 您企业的唯一ID<br />
            2. 平台管理员账号
          </p>
        </li>
        <li>
          <h4>4. 登陆访问系统</h4>
          <p>登陆系统，开始您的业务！</p>
        </li>
      </ul>
      <!-- 勾选用户协议 -->
      <div class="check-protocol">
        <el-checkbox v-model="checked">我同意用户协议</el-checkbox>
      </div>
      <div class="register-btn">
        <div class="confirm-register" @click="handleStartResgister">
          确定开始注册
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle"
export default {
  name: "register-page",
  components: { PageTitle },
  data() {
    return {
      checked: false //勾选用户查协议
    }
  },
  methods: {
    handleStartResgister() {
      if (this.checked) {
        this.$router.push({ path: "/register/firstStep" })
      } else {
        this.$message({
          message: "请勾选用户协议",
          type: "warning"
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register-page {
  .process-title {
    line-height: 40px;
    text-align: left;
  }
  .process-list {
    overflow: hidden;
    li {
      box-sizing: border-box;
      float: left;
      width: 25%;
      h4 {
        border: 1px solid black;
        line-height: 40px;
        background-color: rgb(255, 153, 51);
      }
      p {
        border: 1px solid black;
        height: 100px;
        text-align: left;
        padding: 10px;
        box-sizing: border-box;
      }
    }
  }
  // 用户协议样式
  .check-protocol {
    margin: 50px 0 20px;
  }
  // 确定开始注册按钮

  .confirm-register {
    background-color: rgb(0, 153, 102);
    width: 300px;
    color: #fff;
    line-height: 40px;
    border: none;
    margin: 0 auto;
    cursor: pointer;
  }
}
</style>
