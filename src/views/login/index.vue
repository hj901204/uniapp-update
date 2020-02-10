<template>
  <div class="login-container">
    <div class="logo-box">
      <img src="@/assets/img/login/login.png" alt="" />
      <div class="logo-container">
        <div class="login-logo">
          <img src="@/assets/img/login/login-logo.png" alt="" />
          <img src="@/assets/img/logo-w.png" alt="" />
        </div>
      </div>
    </div>
    <div class="login-box">
      <div class="login-background">
        <div class="login-main">
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            class="login-form"
            auto-complete="on"
            label-position="left"
          >
            <el-form-item prop="username">
              <p
                style="height:20px;line-height:20px;margin-bottom:10px;color:#7e7e7e"
              >
                登陆账号
              </p>
              <el-input
                v-model="loginForm.username"
                name="username"
                type="text"
                auto-complete="on"
                class="username"
                placeholder="请输入用户名"
              >
                <!-- <i slot="suffix" class="el-input__icon el-icon-question"></i> -->
              </el-input>
              <!-- prefix-icon="el-icon-user-solid" -->

              <!-- 提示文字 -->
              <el-tooltip
                class="tooltip"
                effect="dark"
                content="请使用邮箱或者企业账号登录"
                placement="top"
              >
                <i
                  class="el-icon-question account-prompt"
                  style="font-size:22px;vertical-align: middle"
                ></i>
              </el-tooltip>
            </el-form-item>
            <el-form-item prop="password">
              <p
                style="height:20px;line-height:20px;margin-bottom:10px;color:#7e7e7e"
              >
                密码
              </p>
              <el-input
                type="password"
                v-model="loginForm.password"
                name="password"
                auto-complete="on"
                placeholder="请输入密码"
              />
              <!-- prefix-icon="el-icon-lock" -->
            </el-form-item>
          </el-form>
          <div class="forgetpsd">
            <router-link to="">忘记密码?</router-link>
          </div>
          <el-button
            type="primary"
            class="login-button"
            @click="handleLogin('loginForm')"
            >登陆</el-button
          >

          <!-- 注册 -->
          <div class="register-forgetpsd">
            <div class="register">
              <router-link to="/register">我还没有账号，我要注册</router-link>
            </div>
            <!-- <div class="forgetpsd">
              <router-link to="">忘记密码</router-link>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { loginAndLogoutLogApi } from "@/api/login.js"
export default {
  name: "",
  data() {
    return {
      loginForm: {},
      loginRules: {
        username: [
          {
            required: true,
            message: "账户不能为空",
            trigger: "blur"
          },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            message: "密码不能为空"
          }
        ]
      }
    }
  },
  methods: {
    handleLogin(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch("user/LoginByUsername", this[form])
            .then(() => {
              loginAndLogoutLogApi({
                opt: "登录",
                menu: "登录"
              }).then(() => {
                this.$router.push({
                  path: "/"
                })
              })

              // this.showDialog = true;
            })
            .catch(e => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss">
.login-container {
  width: 100%;
  height: 100%;
  position: relative;
  // .logo-container {
  //   width: 50%;
  //   height: 100%;
  //   position: relative;
  .logo-box {
    width: 50%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: relative;
    & > img {
      width: 100%;
      height: 100%;
    }
    .logo-container {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      .login-logo {
        width: 60%;
        margin: 0 auto;
        margin-top: 45%;
        & > img {
          width: 100%;
        }
        & > img:first-child {
          width: 50%;
        }
      }
    }
  }

  // }

  .login-box {
    position: absolute;
    right: 0;
    width: 50%;
    // left: 50%;
    // margin-left: -225px;
    top: 50%;
    margin-top: -240px;
    height: 300px;
    width: 450px;
    vertical-align: middle;
    .login-background {
      width: 350px;
      margin: 0 auto;
      a {
        font-size: 12px;
        color: #409eff;
      }
      .forgetpsd {
        float: right;
        margin-bottom: 20px;
      }
      .tooltip {
        position: absolute;
        right: 5px;
        top: 50px;
      }
    }
    .login-button {
      width: 100%;
    }
    .username {
      position: relative;
    }
    .account-prompt {
      position: absolute;
      right: -30px;
      top: 50%;
      margin-top: -10px;
      color: #7e7e7e;
    }
    .register-forgetpsd {
      padding-top: 10px;
      a {
        font-size: 12px;
        color: #409eff;
      }
      .register {
        margin-top: 10px;
      }
    }
  }
}
</style>
