<template>
    <div class="login-container">
        <!-- <div class="logo-box">
          <img src="@/assets/img/login/login.png"
               alt="" />
          <div class="logo-container">
            <div class="login-logo">
              <img src="@/assets/img/login/login-logo.png"
                   alt="" />
              <img src="@/assets/img/logo-w.png"
                   alt="" />
            </div>
          </div>
        </div> -->
        <div class="appletQr">
            <div class="appletQr_box">
                <img src="../../assets/img/QR-code.jpg" alt="">
                <div class="appletQr_text">
                    <p>让供需关系易如反掌</p>
                    <p>推荐使用小程序操作，无需下载快速便捷</p>
                </div>
            </div>
        </div>
        <div class="login-box">
            <div class="login-background">
                <div class="login-main">
                    <div class="login-title">Supply X 供应链协同平台</div>
                    <el-form ref="loginForm"
                             :model="loginForm"
                             :rules="loginRules"
                             class="login-form"
                             label-position="left">
                        <el-form-item prop="username">
                            <p style="text-align: left;height:20px;line-height:20px;margin-bottom:10px;color:#7e7e7e;">
                                账户密码登录
                            </p>
                            <el-input v-model.trim="loginForm.username"
                                      type="text"
                                      autocomplete="new-password"
                                      class="username"
                                      placeholder="输入手机号或者管理员账号"
                                      maxlength="30"
                                      prefix-icon="el-icon-user">
                                <!-- <i slot="suffix" class="el-input__icon el-icon-question"></i> -->
                            </el-input>
                            <!-- prefix-icon="el-icon-user-solid" -->

                            <!-- 提示文字 -->
                            <el-tooltip class="tooltip"
                                        effect="dark"
                                        content="请使用手机号码或企业账号登陆"
                                        placement="top">
                                <i class="el-icon-question account-prompt"
                                   style="font-size:22px;vertical-align: middle"></i>
                            </el-tooltip>
                        </el-form-item>
                        <el-form-item prop="password">
                            <!-- <p style="height:20px;line-height:20px;margin-bottom:10px;color:#7e7e7e">
                              密码
                            </p> -->
                            <el-input type="password"
                                      v-model.trim="loginForm.password"
                                      autocomplete="new-password"
                                      placeholder="请输入密码"
                                      maxlength="30"
                                      @keyup.enter.native="handleLogin('loginForm')"
                                      prefix-icon="el-icon-lock"/>
                            <!-- prefix-icon="el-icon-lock" -->
                        </el-form-item>
                    </el-form>
                    <div class="forgetpsd">
                        <router-link to="/findPassword">管理员忘记密码</router-link>
                    </div>
                    <el-button type="primary"
                               class="login-button"
                               @click="handleLogin('loginForm')">登陆
                    </el-button>

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
        <div class="company-info-box">
            <div class="company-info">
                <span>谷器数据<span>@2020</span></span>
                <span style="display:inline-block;margin:0 10px">联系电话：400-0530-512</span>
                <span>Email：marketing@zkyda.com</span>
            </div>
        </div>
    </div>
</template>

<script>
  import { loginAndLogoutLogApi } from '@/api/login.js'

  export default {
    name: '',
    data() {
      return {
        loginForm: {},
        loginRules: {
          username: [
            // {
            //   required: true,
            //   message: "账户不能为空",
            //   trigger: "blur"
            // },
            // {
            //   min: 3,
            //   max: 50,
            //   message: "长度在 3 到 50 个字符",
            //   trigger: "blur"
            // }
          ],
          password: [
            {
              required: true,
              trigger: 'blur',
              message: '密码不能为空'
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
              .dispatch('user/LoginByUsername', this[form])
              .then(() => {
                let data = {
                  acpath: '/system/login'
                }
                localStorage.clear()
                this.$api.post(this.$lesUiPath.enterAppFindList, data).then(result => {
                  if (result.code == 0) {
                    localStorage.setItem('appNum', result.data.statisticList[0] ? result.data.statisticList[0].appNum : '')
                    localStorage.setItem('enterName', result.data.enterprise.enterName)
                    localStorage.setItem('xid', result.data.enterprise.xid)
                    localStorage.setItem('visitCount', result.data.statisticList[0] ? result.data.statisticList[0].visits : '')
                    localStorage.setItem('count', result.data.statisticList[0] ? result.data.statisticList[0].userNum : '')
                    this.$router.push({
                      path: '/'
                    })
                  }
                })
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

        .logo-box {
            width: 50%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.2);
            position: relative;
            float: left;

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

        .login-box {
            // float: left;
            // width: 50%;
            // height: 100%;
            border-radius: 5px;
            position: absolute;
            top: 15%;
            right: 15%;
            background-color: #ffffff;
            overflow: hidden;

            .login-background {

                width: 350px;

                a {
                    font-size: 12px;
                    color: #409eff;
                }

                .login-main {
                    padding: 20px;

                    .login-title {
                        text-align: center;
                        font-size: 16px;
                        font-weight: 500;
                        margin-bottom: 30px;
                    }
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

        .company-info-box {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 30px;
            line-height: 30px;
            font-size: 12px;
            opacity: .5;
            text-align: center;
            color: #ffffff;
            background-color: #000000;

            .company-info {
                & > div,
                & > p {
                    font-size: 12px;
                    line-height: 16px;
                }
            }
        }
    }

    .login-container::before {
        content: "";
        background: url(../../assets/img/login.jpg) no-repeat top center;
        background-size: cover;
        opacity: 0.65;
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .appletQr {
        left: 0;
        right: 0;
        margin-top: 66.5px;
        height: 245px;
        position: absolute;
        top: 15%;
        background-color: rgba(8, 31, 55, 0.7);
        overflow: hidden;

        .appletQr_box {
            color: white;
            display: flex;
            height: 100%;

            img {
                width: 140px;
                height: 140px;
                margin: auto 0 auto 65px;
            }

            .appletQr_text {
                display: flex;
                flex-direction: column;

                p {
                    margin: 0 auto 0 35px;

                    &:first-child {
                        font-size: 36px;
                        font-weight: bold;
                        margin-top: 74px;
                    }

                    &:last-child {
                        font-size: 16px;
                        margin-top: 5px;
                    }
                }
            }
        }
    }
</style>
