<template>
  <div class="password-container">
    <div class="content">
     <div class="title">{{ active == 1 ? '找回密码' : '重置密码' }}<span class="border"></span></div>
     <div v-if="active == 1" class="form">
       <el-form   :model="mobileForm"
                  :rules="mobileRules"
                  ref="mobileForm"
                  size="small"
                  hide-required-asterisk>
          <el-form-item prop="mobile"
                        label="管理员手机"
                        label-width="90px">
            <el-input v-model="mobileForm.mobile"></el-input>
          </el-form-item>
          <el-form-item prop="code"
                        label="验证码"
                        label-width="90px">
            <el-input v-model="mobileForm.code" maxlength="6">
            <template slot="append" style="color:white;background-color: #4A90E2;border-color: #4A90E2;">
              <el-button size="small" :disabled="canClick" type="primary" @click="validCode">{{ btnContent }}</el-button>
            </template>
          </el-input>
          </el-form-item>
        </el-form>
      <div class="btns">
        <el-button 
                    size="small"
                    @click="handleBack">返 回</el-button>
        <el-button type="primary"
                    size="small"
                    @click="next">下一步</el-button>
      </div>
     </div>
     <div v-if="active == 2" class="form">
       <el-form   :model="passwordForm"
                  :rules="passwordRules"
                  ref="passwordForm"
                  size="small"
                  hide-required-asterisk>
          <el-form-item prop="password"
                        label="登录密码"
                        label-width="90px">
            <el-input v-model="passwordForm.password" type="password" maxlength="30"></el-input>
          </el-form-item>
          <el-form-item prop="confirmPassWord"
                        label="确认密码"
                        label-width="90px">
            <el-input v-model="passwordForm.confirmPassWord" type="password" maxlength="30"></el-input>
          </el-form-item>
        </el-form>
      <div class="btns">
        <el-button 
                    size="small"
                    @click="handleReturn">返 回</el-button>
        <el-button type="primary"
                    size="small"
                    :loading="loading"
                    @click="handleSure">提交并返回登录页</el-button>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
import { validatePhone, validateNumAndEN } from '@/utils/validate'

export default {
  name: "",
  data () {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.passwordForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
    };
    return {
      mobileForm:{},
      mobileRules:{
        mobile: [
          { required: true, message: "请输入管理员手机号码", trigger: "blur" },
          { validator: validatePhone.bind(this), message: "请输入正确联系电话", trigger: "blur" },
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
        ]
      },
      active:'1',
      passwordForm:{},
      passwordRules:{
        password:[
          { required: true, message: "30个长度以内的英文数字的组合", trigger: "blur" },
          { validator: validateNumAndEN.bind(this), message: "请输入30个长度以内的英文数字的组合", trigger: "blur" },
        ],
        confirmPassWord:[
          { required: true, message: "再次输入密码", trigger: "blur" },
          { validator: validatePass, message: "两次密码输入不一致", trigger: "blur" },
        ]
      },
      loading:false,
      btnContent:'获取验证码',
      canClick:false,
      time: 60,
      timer:'cloak',
    }
  },
  methods: {
    //返回
    handleBack(){
      this.$router.push({path:'/login'})
    },
    handleReturn(){
      this.active = 1
    },
    //下一步
    next(){
      this.passwordForm = {}
      this.loading = false
      this.$refs['mobileForm'].validate((valid) => {
        if(valid){
          this.$api.post(this.$lesUiPath.checkCode, this.mobileForm).then(result => {
            if (result.code == 0) {
              this.active = 2
            } else {
              return this.$message.error(result.msg)
            }
          })
        }
      })
    },
    //获取验证码
    validCode () {
      if(!this.mobileForm.mobile) return this.$message.warning("请先输入手机号码")
      let obj = {}
      obj.mobile = this.mobileForm.mobile
      this.canClick = true
      this.getTimeOut() 
      this.$api.post(this.$lesUiPath.forgetCode, obj).then(result => {
        if (result.code == 0) {
          
        } else {
          return this.$message.error(result.msg)
        }
      })
    },
    getTimeOut(){
      this.cloak = setInterval( () => {
        this.time--
        if(this.time > 0){
          this.btnContent = this.time + "s后重新发送"
        }else if(this.time <= 0){
          window.clearInterval(this.cloak)
          this.btnContent = "重新发送"
          this.time = 60
          this.canClick = false
        }
      },1000)
    },
    //确认提交
    handleSure(){
      this.$refs['passwordForm'].validate((valid) => {
        if(valid){
          this.loading = true
          let data = Object.assign(
            this.mobileForm,
            this.passwordForm
          )
          this.$api.post(this.$lesUiPath.password, data).then(result => {
            this.loading = false
            if (result.code == 0) {
              this.$message.success("操作成功")
              this.$router.push({
                path: "/login"
              })
            } else {
              return this.$message.error(result.data)
            }
            
        })
        }
      })
    }
  }
}
</script>
<style lang="scss">

.password-container {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  .content{
    margin:0 auto;
    padding: 10% 20% 28% 20%;
    .title{
      text-align: left;
      font-size: 16px;
      font-weight: 500;
      height: 20px;
      .border{
        width: 80%;
        vertical-align: super;
        display: inline-block;
        border-bottom: 1px solid #dcdfe6;
        margin-left: 30px;
      }
    }
    .form{
      width: 300px;
      margin-top: 30px;
    }
  }
  
}
</style>
