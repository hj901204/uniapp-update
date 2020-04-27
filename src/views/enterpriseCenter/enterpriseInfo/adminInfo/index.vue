<template>
  <div class="admin-info">
    <!-- <EditBtns @handleEdit="handleEdit" @handleSave="handleSave" /> -->
    <div class="warn-info">
      <i class="el-icon-warning"></i>
      <span>
        企业的管理员账号相关信息可以在这里进行修改，修改密码必须使用登记的管理员的手机号码验证；</span>
    </div>
    <template v-if="isShowMainPage">
      <div class="admin-num">管理员账号:<span>{{ admindata.username }}</span></div>
      <div class="btns">
        <el-button type="primary" icon="el-icon-edit"
                   size="small" 
                   @click="handleEdit">编辑管理员基本信息</el-button>
        <el-button type="primary"  icon="el-icon-edit"
                   size="small"
                   @click="handlePassword">修改管理员密码</el-button>
      </div>
    </template>
    <template v-if="isShowBasicInfo">
      <el-form :model="adminForm"
               ref="ruleForm"
               hide-required-asterisk
               label-width="100px"
               class="admin-form"
               size="small"
               :rules="rules1"
               inline-message>
        <el-form-item label="管理员账号"
                      prop="username">
          <el-input v-model="admindata.username"
                    style="width:50%"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="管理员邮箱"
                      prop="email">
          <el-input v-model="admindata.email"
                    style="width:50%">
          </el-input>
        </el-form-item>
        <!-- <el-form-item label="登陆密码"
                      prop="password">
          <el-input type="password"
                    v-model="adminForm.password"
                    style="width:50%"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="checkPass">
          <el-input type="password"
                    v-model="adminForm.checkPass"
                    style="width:50%"></el-input>
        </el-form-item> -->
      </el-form>
      <div class="edit-btn"
           style="padding-left:40px;margin-top:30px;">
        <el-button size="small"
                   @click="handleBack">返回 </el-button>
        <el-button size="small"
                   type="primary"
                   @click="handleSave">保存
        </el-button>
      </div>
    </template>
    <template v-if="isShowPasswordInfo">
      <el-form :model="adminPasswordForm"
               ref="ruleForm"
               hide-required-asterisk
               label-width="100px"
               class="admin-form"
               size="small"
               :rules="rules2"
               inline-message>
        <el-form-item label="管理员手机"
                      prop="mobilePhone">
          <el-input v-model="admindata.mobilePhone"
                    style="width:30%"></el-input>
        </el-form-item>
        <el-form-item label="验证码"
                      prop="code">
          <el-input v-model="code" style="width:30%">
            <template slot="append" style="color:white;background-color: #4A90E2;border-color: #4A90E2;">
              <el-button size="small" type="primary" @click="validCode">获取验证码</el-button>
            </template>
          </el-input>
        </el-form-item>
        </el-form-item>
        <el-form-item label="登陆密码"
                      prop="password">
          <el-input type="password"
                    v-model="admindata.password"
                    style="width:30%"></el-input>
        </el-form-item>
        <el-form-item label="确认密码"
                      prop="checkPass">
          <el-input type="password"
                    v-model="admindata.checkPass"
                    style="width:30%"></el-input>
        </el-form-item>
      </el-form>
      <div class="edit-btn"
           style="padding-left:40px;margin-top:30px;">
        <el-button size="small"
                   @click="handlePBack">返回 </el-button>
        <el-button size="small"
                   type="primary"
                   @click="handlePSave">保存
        </el-button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "admin-info",
  components: {
    EditBtns: resolve => require(["../components/EditBtns"], resolve)
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.adminForm.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      rules1: {
        username: [{ required: true, message: '请输入管理员账号', trigger: 'blur' }],
        email: [{ required: true, message: '请输入管理员邮箱', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }]
      },
      rules2: {
        mobilePhone: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
        password: [{ required: true, message: '请输入登录密码', trigger: 'blur' }],
        checkPass: [{ validator: validatePass, trigger: 'blur' }]
      },
      isShowMainPage: true,
      isShowBasicInfo: false,
      isShowPasswordInfo: false,
      adminPasswordForm: { checkPass: '' },
      admindata: {}
    }
    
  },
  created () {
    this.getAdminInfo()
  },
  methods: {
    // 获取管理员信息
    getAdminInfo (obj = {}) {
      this.$api.post(this.$lesUiPath.adminInfo, obj).then(result => {
        if (result.code == 0) {
          this.admindata = result.data
          this.adminForm = Object.assign({ checkPass: '' }, result.data)
          this.adminPasswordForm = Object.assign({ checkPass: '' }, result.data)
          this.adminPasswordForm['checkPass'] = result.data.password
        } else {
          if (result.msg) {
            return this.$message.error(result.msg)
          }
        }
      })
    },
    // 点击修改按钮
    handleEdit () {
      this.adminForm
      this.isShowMainPage = false
      this.isShowPasswordInfo = false
      this.isShowBasicInfo = true
    },
    // 点击修改密码按钮
    handlePassword () {
      this.adminPasswordForm
      this.isShowMainPage = false
      this.isShowPasswordInfo = true
      this.isShowBasicInfo = false
    },
    //返回
    handleBack () {
      this.getAdminInfo()
      this.isShowMainPage = true
      this.isShowPasswordInfo = false
      this.isShowBasicInfo = false
    },
    //返回
    handlePBack () {
      this.getAdminInfo()
      this.isShowMainPage = true
      this.isShowPasswordInfo = false
      this.isShowBasicInfo = false
    },
    //点击保存按钮
    handleSave () {
      let valid = this.validateFunc('ruleForm')
      if (valid) {
        let obj = {}
        //obj = Object.assign(this.adminForm)
        //this.adminForm.checkPass = this.checkPass
        obj.email = this.adminForm.email
        obj.id = this.adminForm.id
        console.log(obj)
        console.log("this.adminForm.id = " + this.adminForm.id)
        console.log("this.adminForm.email = " + this.adminForm.email)
        //return;
        this.$api.post(this.$lesUiPath.editAdminInfo, obj).then(result => {
          if (result.code == 0) {
            this.isShowMainPage = true
          } else {
            return this.$message.error(result.msg)
          }
        })
      }
    },

    handlePSave () {
      let valid = this.validateFunc('ruleForm')
      if (valid) {
        let obj = {}
        obj = Object.assign(this.adminPasswordForm)
        
        this.adminPasswordForm.checkPass = this.checkPass
        console.log(obj)
        return;
        this.$api.post(this.$lesUiPath.editAdminInfo, obj).then(result => {
          if (result.code == 0) {
            this.isShowMainPage = true
          } else {
            return this.$message.error(result.msg)
          }
        })
      }
    },
    // 验证表单
    validateFunc (ref) {
      let flag;
      this.$refs[ref].validate((valid) => {
        if (valid) {
          flag = true
          return flag
        }
        flag = false
        return flag
      })
      return flag
    },
  }
}
</script>

<style lang="scss" scoped>
.admin-info {
  overflow: hidden;
  padding: 10px;
  text-align: left;
  height: calc(100vh - 312px);
  .warn-info {
    margin-top: 10px;
    font-size: 12px;
    .el-icon-warning {
      font-size: 24px;
      margin-right: 20px;
      margin-left: 30px;
      color: #409eff;
      vertical-align: middle;
    }
    & > span {
      vertical-align: middle;
    }
  }
  .admin-num {
    margin-left: 20px;
    margin-top: 30px;
    // font-size: 14px;
    font-weight: bold;
    & > span {
      margin-left: 16px;
      font-weight: bold;
    }
  }
  .btns {
    margin-top: 50px;
    margin-left: 20px;
  }
  .admin-form {
    margin-top: 20px;
  }
}
</style>
