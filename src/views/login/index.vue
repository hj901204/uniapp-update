<template>
  <div class="login-container">
    <div class="login-box">
      <h1>登陆</h1>
      <div class="login-background">
        <div class="login-main">
          <el-form ref="loginForm"
                   :model="loginForm"
                   :rules="loginRules"
                   class="login-form"
                   auto-complete="on"
                   label-position="left">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username"
                        name="username"
                        type="text"
                        prefix-icon="el-icon-user-solid"
                        auto-complete="on"
                        class="username"
                        placeholder="请输入用户名" />
              <!-- 提示文字 -->
              <el-tooltip class="item"
                          effect="dark"
                          content="请使用邮箱或者企业账号登录"
                          placement="right-start">
                <i class="el-icon-warning-outline account-prompt"
                   style="font-size:22px;vertical-align: middle"></i>
              </el-tooltip>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password"
                        v-model="loginForm.password"
                        name="password"
                        auto-complete="on"
                        placeholder="请输入密码"
                        prefix-icon="el-icon-lock" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         class="login-button"
                         @click="handleLogin('loginForm')">登陆</el-button>
            </el-form-item>
          </el-form>
          <!-- 注册 -->
          <div class="register-forgetpsd">
            <div class="register">
              <router-link to="/register">我还没有账号，我要注册</router-link>
            </div>
            <div class="forgetpsd">
              <router-link to="">忘记密码</router-link>
            </div>
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
  data () {
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
    handleLogin (form) {
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
  .login-box {
    position: absolute;
    left: 50%;
    margin-left: -225px;
    top: 50%;
    margin-top: -150px;
    height: 300px;
    width: 450px;
    vertical-align: middle;
    .login-background {
      width: 350px;
      margin: 0 auto;
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
    }
    .register-forgetpsd {
      padding-top: 10px;
      border-top: 3px solid black;
      a {
        font-size: 12px;
        color: #409eff;
      }
      .register {
        float: left;
      }
      .forgetpsd {
        float: right;
      }
    }
  }
}
</style>
