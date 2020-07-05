<template>
    <div class="register-page">
        <img src="../../assets/img/mini_code.jpg" alt="">
        <p>请使用微信扫码进行注册，如需返回请点击返回登录</p>
        <el-button @click="handleback" type="primary" size="mini">返回登录</el-button>
        <!--    <div v-if="$route.path == '/register'">-->
        <!--      &lt;!&ndash; <PageTitle />-->
        <!--      <h3 class="process-title">注册流程说明</h3> &ndash;&gt;-->
        <!--      <ProcessTitle :activeNum="1" />-->
        <!--      &lt;!&ndash; <ul class="process-list">-->
        <!--        <li>-->
        <!--          <i>1</i>-->
        <!--          <span>确认协议</span>-->
        <!--        </li>-->
        <!--        <li class="line"></li>-->
        <!--        <li>-->
        <!--          <i>2</i>-->
        <!--          <span>注册信息</span>-->
        <!--        </li>-->
        <!--        <li class="line"></li>-->
        <!--        <li>-->
        <!--          <i>3</i>-->
        <!--          <span>完成</span>-->
        <!--        </li>-->
        <!--        <li class="line"></li>-->
        <!--        <li>-->
        <!--          <i>4</i>-->
        <!--          <span>访问系统</span>-->
        <!--        </li>-->
        <!--      </ul> &ndash;&gt;-->
        <!--      &lt;!&ndash; 协议内容 &ndash;&gt;-->
        <!--      <div class="protocol-content-box">-->
        <!--        <div class="protocol-content">-->
        <!--          <Agreement />-->
        <!--        </div>-->
        <!--        &lt;!&ndash; 勾选用户协议 &ndash;&gt;-->
        <!--        <div class="start-register">-->
        <!--          <div class="check-protocol">-->
        <!--            <el-checkbox v-model="checked">我同意用户协议</el-checkbox>-->
        <!--          </div>-->
        <!--          <div class="register-btn">-->
        <!--            &lt;!&ndash; <div class="confirm-register" @click="handleStartResgister">-->
        <!--              确定开始注册-->
        <!--            </div> &ndash;&gt;-->
        <!--            <el-button type="primary"-->
        <!--                       class="confirm-register"-->
        <!--                       @click="handleStartResgister">确定开始注册</el-button>-->
        <!--          </div>-->
        <!--          <div class="register-btn">-->
        <!--            <el-button type="text"-->
        <!--                       class="confirm-register"-->
        <!--                       @click="handleback">已有账户？点击返回登录</el-button>-->
        <!--          </div>-->
        <!--        </div>-->
        <!--      </div>-->
        <!--    </div>-->
        <router-view></router-view>
    </div>
</template>

<script>
  import PageTitle from '@/components/PageTitle'
  import Agreement from './Agreement'

  export default {
    name: 'register-page',
    components: {
      PageTitle, Agreement,
      ProcessTitle: reslove =>
        require(['@/components/ProcessTitle/index.vue'], reslove)
    },
    data() {
      return {
        checked: false //勾选用户查协议
      }
    },
    methods: {
      handleStartResgister() {
        if (this.checked) {
          this.$router.push({ path: '/register/firstStep' })
        } else {
          this.$message({
            message: '请阅读并同意用户协议',
            type: 'warning'
          })
        }
      },
      handleback() {
        this.$router.push({ path: '/login' })
      }
    }
  }
</script>

<style lang="scss" scoped>
    .register-page {
        height: 100vh;
        background: white;

        img {
            width: 345px;
            height: 345px;
            margin-top: 100px;
        }

        p {
            font-size: 16px;
            margin: 40px auto 20px;
        }

        // .process-title {
        //   line-height: 40px;
        //   text-align: left;
        // }
        /*.process-list {*/
        /*  overflow: hidden;*/
        /*  padding: 0;*/
        /*  margin: 0;*/
        /*  padding-top: 24px;*/
        /*  & > li {*/
        /*    font-size: 14px;*/
        /*    width: 14%;*/
        /*    display: inline-block;*/
        /*    vertical-align: middle;*/
        /*    & > i {*/
        /*      border-radius: 50%;*/
        /*      border: 1px solid #7e7e7e7e;*/
        /*      -moz-border-radius: 50%;*/
        /*      -webkit-border-radius: 50%;*/
        /*      width: 24px;*/
        /*      height: 24px;*/
        /*      display: inline-block;*/
        /*      font-style: normal;*/
        /*      background-color: #fff;*/
        /*      line-height: 25px;*/
        /*      margin-right: 12px;*/
        /*    }*/
        /*  }*/
        /*  .line {*/
        /*    width: 14%;*/
        /*    height: 2px;*/
        /*    background-color: #7e7e7e7e;*/
        /*  }*/
        /*}*/
        /*.protocol-content-box {*/
        /*  background-color: #fff;*/
        /*  margin-top: 24px;*/
        /*  position: relative;*/
        /*  width: 100%;*/
        /*  height: 450px;*/
        /*  padding: 32px 32px 120px 32px;*/

        /*  .protocol-content {*/
        /*    width: 100%;*/
        /*    height: 95%;*/
        /*    margin: 0 auto;*/
        /*    border: 2px solid rgba(0, 0, 0, 0.1);*/
        /*  }*/
        /*  .start-register {*/
        /*    // position: absolute;*/
        /*    .check-protocol {*/
        /*      margin: 20px 0 20px;*/
        /*    }*/
        /*    .confirm-register {*/
        /*      // background-color: rgb(0, 153, 102);*/
        /*      width: 300px;*/
        /*      // color: #fff;*/
        /*      // line-height: 40px;*/
        /*      // border: none;*/
        /*      // margin: 0 auto;*/
        /*      // cursor: pointer;*/
        /*      border-radius: 8px;*/
        /*    }*/
        /*  }*/
        /*}*/
    }
</style>
