<template>
  <div class="first-step">
    <!-- <PageTitle /> -->
    <ProcessTitle :activeNum="1" />
    <!-- 表单部分 -->
    <div class="form-part">
      <div class="detail-info-form">
        <h3>企业详细信息</h3>
        <el-form ref="formRef"
                 :model="form"
                 size="mini"
                 label-width="100px"
                 class="infor-form"
                 hide-required-asterisk
                 :rules="rules">
          <el-row>
            <el-col :span="11">
              <el-form-item label="企业名称"
                            style="width:90%"
                            prop="enterName">
                <el-input v-model.trim="form.enterName"
                          maxlength='100'></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="企业英文名称"
                            style="width:90%"
                            prop="enterNameEn"
                            maxlength='100'>
                <el-input v-model.trim="form.enterNameEn"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="企业简称"
                            style="width:90%"
                            prop="enterShortName">
                <el-input v-model.trim="form.enterShortName"
                          maxlength='100'></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="11">
              <el-form-item label="联系电话"
                            style="width:90%"
                            prop="enterTelNum">
                <el-input v-model.trim="form.enterTelNum"
                          type="tel"
                          maxlength='100'></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="企业地址"
                            style="width:90%"
                            prop="enterAddress">
                <el-input v-model.trim="form.enterAddress"
                          maxlength='100'></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="联系邮件"
                            style="width:90%"
                            type="email"
                            prop="enterMail">
                <el-input v-model.trim="form.enterMail"
                          maxlength='100'></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="detail-info-form">
        <h3>主要联系人信息</h3>
        <el-form ref="formRef2"
                 :model="form2"
                 size="mini"
                 :rules="rules2"
                 hide-required-asterisk
                 label-width="100px"
                 class="infor-form">
          <el-row>
            <el-col :span="11">
              <el-form-item label="姓名"
                            style="width:90%"
                            prop="liaisonMan">
                <el-input v-model.trim="form2.liaisonMan"
                          maxlength='100'></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-form-item label="职位"
                            style="width:90%"
                            prop="position">
                <el-input v-model.trim="form2.position"
                          maxlength='100'></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <div class="detail-info-form">
        <h3>企业账户信息</h3>
        <el-form ref="formRef3"
                 :model="enteradminForm"
                 size="mini"
                 :rules="rules3"
                 label-width="100px"
                 hide-required-asterisk
                 class="infor-form">
          <el-row>
            <el-col :span="11">
              <el-form-item label="管理员账号"
                            style="width:90%;position:relative"
                            prop="enterAccount">
                <el-input v-model.trim="enteradminForm.enterAccount"
                          maxlength='100'></el-input>
                <i class="el-icon-info"
                   style="position:absolute;right:-200px;top:6px;"><span>管理员账号设置后不允许修改!</span>
                </i>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-form-item label="管理员邮箱"
                            style="width:90%;position:relative"
                            type="email"
                            prop="email">
                <el-input v-model.trim="enteradminForm.email"
                          maxlength='100'></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-form-item label="登陆密码"
                            style="width:90%"
                            prop="password">
                <el-input v-model.trim="enteradminForm.password"
                          type="password"
                          maxlength='100'></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-form-item label="确认密码"
                            style="width:90%"
                            prop="checkPsd">
                <el-input v-model.trim="enteradminForm.checkPsd"
                          type="password"
                          maxlength='100'></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>

    <!-- TODO0001:
    这里注册之后会传回来当前企业的信息，点击下一步后跳转到下一个页面之后展示出来；，返回数据式样：
    { "code": "0", "recordCount": 1, "data": { "id":
    "7ED9F81AE88D4A4A8D92DBD16A89B236", "length": 20, "verson": 0, "xid":
    "KVDSUIXXZPAT", "enterName": "5555", "enterNameEn": "5555",
    "enterShortName": "5555", "enterAddress": "5555", "enterTelNum": "5555",
    "enterMail": "5555@dddd.com", "liaisonMan": "5555", "position": "5555" } } -->

    <div class="edit-btn">
      <el-button size="small"
                 @click="handleBack">返回</el-button>
      <el-button type="primary"
                 size="small"
                 @click="handleNextStep">下一步</el-button>
      <!-- <div @click="handleNextStep" class="next-btn"><span>下一步</span></div> -->
    </div>
  </div>
</template>

<script>
import { validateNumAndCh, validateEmail } from '@/utils/validate'
export default {
  name: "first-step",
  components: {
    ProcessTitle: reslove =>
      require(["@/components/ProcessTitle/index.vue"], reslove),
    PageTitle: reslove => require(["@/components/PageTitle.vue"], reslove)
  },
  data () {
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请再次输入密码"))
      } else if (value !== this.enteradminForm.password) {
        callback(new Error("两次输入密码不一致!"))
      } else {
        callback()
      }
    }
    return {
      rules: {
        enterTelNum: [
          { required: true, message: "请输入联系电话", trigger: "blur" },

        ],
        enterMail: [
          { required: true, message: "请输入联系邮件", trigger: "blur" },
          { type: "email", message: "请输入正确的邮箱地址", trigger: "blur" }
        ],
        enterName: [
          { required: true, message: "请输入企业名称", trigger: "blur" },
          { validator: validateNumAndCh.bind(this), trigger: "blur" }
        ],
        enterShortName: [
          { validator: validateNumAndCh.bind(this), trigger: "blur" }
        ],
        enterNameEn: [
          { required: true, message: "请输入企业英文名称", trigger: "blur" }
        ],
        enterAddress: [
          { required: true, message: "请输入企业地址", trigger: "blur" }
        ]
      },
      rules2: {
        liaisonMan: [
          { required: true, message: "请输入姓名", trigger: "blur" }
        ],
        position: [{ required: true, message: "请输入职位", trigger: "blur" }]
      },
      rules3: {
        enterAccount: [
          { required: true, message: "请输入管理员账号", trigger: "blur" },
          { validator: validateEmail.bind(this), message: "不允许邮箱注册", trigger: "blur" },

        ],
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入管理员邮箱", trigger: "blur" },
          { type: "email", message: "请输入正确的邮箱地址", trigger: "blur" }
        ],
        checkPsd: [{ validator: validatePass, trigger: "blur" }]
      },
      form: { adminName: "" }, //表单
      form2: {},
      enteradminForm: {}
    }
  },
  methods: {
    handleNextStep () {
      let valid1 = this.validateFunc("formRef")
      let valid2 = this.validateFunc("formRef2")
      let valid3 = this.validateFunc("formRef3")
      if (valid1 && valid2 && valid3) {
        let obj = {}
        obj.enterprise = Object.assign(this.form, this.form2)
        obj.enteradmin = this.enteradminForm
        console.log(obj)
        this.$api.post(this.$lesUiPath.enterpriseRegister, obj).then(result => {
          console.log("enterpriseRegister:" + result)
          if (result.code == 0) {
            this.$router.push({
              path: "/register/secondStep",
              query: { data: result.data }
            })
          } else {
            return this.$message.error(result.msg)
          }
        })
      }
      // this.validateFunc('formRef')
      // this.$refs.formRef.validate((valid) => {
      //   if (valid) {
      //     this.$router.push({ path: "/register/secondStep" })
      //   } else {
      //     return false;
      //   }
      // })
    },
    // 验证表单
    validateFunc (ref) {
      let flag
      this.$refs[ref].validate(valid => {
        if (valid) {
          flag = true
          return flag
        }
        flag = false
        return flag
      })
      return flag
    },
    //返回
    handleBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.first-step {
  .form-part {
    text-align: left;
    .detail-info-form {
      margin-top: 32px;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      overflow: hidden;
      padding: 16px;
      & > h3 {
        line-height: 40px;
        font-size: 18px;
        border-bottom: 2px solid #f1f2f5;
        // font-weight: bold;
      }
      .infor-form {
        margin-top: 16px;
        .el-icon-info {
          color: #4a90e2;
          span {
            color: #606266;
            padding-left: 8px;
            font-size: 12px;
          }
        }
      }
    }
  }
  .edit-btn {
    text-align: left;
    margin-top: 20px;
    span {
      padding: 10px 30px;
      color: #fff;
      display: inline-block;
      background-color: #009966;
      cursor: pointer;
    }
  }
}
</style>
