<template>
  <div class="admin-info">
    <!-- <EditBtns @handleEdit="handleEdit" @handleSave="handleSave" /> -->
    <div class="warn-info">
      <i class="el-icon-warning"></i>
      <span>
        企业的管理员账号相关信息可以在这里进行修改，可以通过修改管理员联系邮件重新分配管理员企业账号到别的员工；</span>
    </div>
    <template v-if="isShowMainPage">
      <div class="admin-num">管理员账号:<span>{{ adminForm.enterAccount }}</span></div>
      <div class="btns">
        <el-button type="primary"
                   size="small"
                   @click="handleEdit">编辑管理员账号</el-button>
      </div>
    </template>
    <template v-else>
      <el-form :model="adminForm"
               ref="ruleForm"
               hide-required-asterisk
               label-width="100px"
               class="admin-form"
               size="small"
               :rules="rules"
               inline-message>
        <el-form-item label="管理员账号"
                      prop="enterAccount">
          <el-input v-model="adminForm.enterAccount"
                    style="width:50%"
                    disabled></el-input>
        </el-form-item>
        <el-form-item label="管理员邮箱"
                      prop="email">
          <el-input v-model="adminForm.email"
                    style="width:50%">
          </el-input>
        </el-form-item>
        <el-form-item label="登陆密码"
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
        </el-form-item>
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
      rules: {
        enterAccount: [{ required: true, message: '请输入管理员账号', trigger: 'blur' }],
        email: [{ required: true, message: '请输入管理员邮箱', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }],
        password: [{ required: true, message: '请输入登录密码', trigger: 'blur' }],
        checkPass: [{ validator: validatePass, trigger: 'blur' }]
      },
      isShowMainPage: true,
      adminForm: { checkPass: '' },
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
          this.adminForm = Object.assign({ checkPass: '' }, result.data[0])
          this.adminForm['checkPass'] = result.data[0].password

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
    },
    //返回
    handleBack () {
      this.getAdminInfo()
      this.isShowMainPage = true
    },
    //点击保存按钮
    handleSave () {
      let valid = this.validateFunc('ruleForm')
      if (valid) {
        let obj = {}
        obj = Object.assign(this.adminForm)
        this.adminForm.checkPass = this.checkPass
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
