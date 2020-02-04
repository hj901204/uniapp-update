<template>
  <div class="login-container">
    <div class="login-box">
      <h1>登陆</h1>
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
            <el-form-item>
              <el-input
                v-model="loginForm.username"
                name="username"
                type="text"
                prefix-icon="el-icon-user-solid"
                auto-complete="on"
                placeholder="请输入用户名"
              />
            </el-form-item>
            <el-form-item>
              <el-input
                type="password"
                v-model="loginForm.password"
                name="password"
                auto-complete="on"
                placeholder="请输入密码"
                prefix-icon="el-icon-lock"
              />
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                class="login-button"
                @click="handleLogin('loginForm')"
                >登陆</el-button
              >
            </el-form-item>
          </el-form>
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
  .login-box {
    width: 40%;
    margin: 0 auto;
    .login-button {
      width: 100%;
    }
  }
}
</style>
