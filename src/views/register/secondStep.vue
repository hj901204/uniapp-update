<template>
  <div class="second-step">
    <!-- <PageTitle /> -->
    <ProcessTitle :activeNum="1" />
    <div class="register-sucess-box">
      <!-- 注册成功提示 -->
      <div class="submit-success">
        <i class="el-icon-my-tijiao"></i>
        <span
          >尊敬的 <span>{{ data.enterName }}</span
          >，您的信息已经提交成功。</span
        >
      </div>
      <!-- 注册信息 -->
      <ul class="register-info">
        <li>
          <h4>我的企业</h4>
          <span>{{ data.enterName }}</span>
        </li>
        <li>
          <h4>我的SupplyXid</h4>
          <span>{{ data.xid }}</span>
        </li>
        <li>
          <h4>联系人</h4>
          <span>{{ data.liaisonMan }}</span>
        </li>
        <li>
          <h4>联系邮件</h4>
          <span>{{ data.enterMail }}</span>
        </li>
        <li>
          <h4>我的公司地址</h4>
          <span>{{ data.enterAddress }}</span>
        </li>
      </ul>
      <!-- 提示信息 -->
      <div class="prompt-info">
        <p>我们已经收到您的信息，我们会马上进行审核。</p>
        <p>一旦通过，平台将通过您提交的信箱发送给您结果信息。</p>
        <p>您也可以通过拨打电话400-0530-512联系我们，我们将很荣幸为您服务。</p>
      </div>

      <!-- 返回按钮 -->
      <div class="back-btn">
        <!-- <span @click="handleBackLogin">返回登录首页</span> -->
        <el-button @click="handleBackLogin">返回登录首页</el-button>
      </div>
      <!-- 第二部分提示信息 -->
      <!-- <div class="prompt-info-bottom prompt-info">
        <p>需要发送一封确认邮件给到注册企业；</p>
        <p>
          其中要包含一个用户的唯一企业登陆账号；也就是企业的管理账号，以及一个唯一的企业编码
        </p>
        <p>这个编码以后会用做和别的企业沟通的桥梁</p>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "second-step",
  components: {
    ProcessTitle: reslove =>
      require(["@/components/ProcessTitle/index.vue"], reslove),
    PageTitle: reslove => require(["@/components/PageTitle.vue"], reslove)
  },
  data() {
    return {
      regEntInfo: {},
      data: this.$route.query.data
    }
  },
  mounted() {
    this.getRegentInfo()
  },
  methods: {
    handleBackLogin() {
      this.$router.push({ path: "/login" })
    },
    //我的企业信息查询
    getRegentInfo() {
      this.$api.post(this.$lesUiPath.enterpriseFindEnt, {}).then(result => {
        if (result.code == 0) {
          console.log(result.data)
          this.regEntInfo = result.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.second-step {
  .register-sucess-box {
    background-color: #fff;
    height: 602px;
    padding: 32px;
    box-sizing: border-box;
    margin-top: 24px;
    font-size: 14px;
  }
  .submit-success {
    margin-top: 30px;
    .el-icon-my-tijiao {
      color: #009966;
      font-size: 34px;
      font-weight: bold;
      vertical-align: middle;
      // margin-right: 15px;
    }
    & > span {
      vertical-align: middle;
      & > span {
        color: #4a90e2;
      }
    }
  }
  .register-info {
    width: 60%;
    margin: 80px auto;
    li {
      text-align: left;
      border: 1px solid rgba(0, 0, 0, 0.1);
      height: 30px;
      margin-top: -1px;
      line-height: 30px;
      h4 {
        width: 200px;
        display: inline-block;
        text-align: center;
      }
      span {
        border-left: 1px solid rgb(215, 215, 215);
        line-height: 30px;
        display: inline-block;
        padding-left: 20px;
        box-sizing: border-box;
      }
    }
  }
  .prompt-info {
    margin-top: 20px;
    p {
      line-height: 26px;
    }
  }
  .prompt-info-bottom {
    margin-top: 60px;
    border: 1px solid rgb(215, 215, 215);
  }
  .back-btn {
    margin-top: 20px;
    .el-button {
    }
    // span {
    //   padding: 10px 30px;
    //   color: #fff;
    //   display: inline-block;
    //   background-color: #009966;
    //   cursor: pointer;
    // }
  }
}
</style>
