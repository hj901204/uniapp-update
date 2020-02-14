<template>
  <div class="basic-info">
    <!-- <EditBtns @handleEdit="handleEdit" @handleSave="handleSave" /> -->
    <!-- <div class="warn-info">
      <i class="el-icon-warning"></i>
      <span>企业的基本信息可以在这里查询，管理员可以对基本信息进行修改；</span>
    </div> -->
    <!-- 显示企业基本信息 -->
    <template v-if="isShowMainPage">
      <div class="main-page">
        <ul>
          <li>
            <div class="form-field">SupplyX ID:</div>
            <div class="form-val">{{ form.enterCode }}</div>
          </li>
          <li>
            <div class="form-field">企业名称:</div>
            <div class="form-val">{{ form.enterName }}</div>
          </li>
          <li>
            <div class="form-field">企业地址:</div>
            <div class="form-val">{{ form.enterAddress }}</div>
          </li>
          <li>
            <div class="form-field">企业编码:</div>
            <div class="form-val">{{ form.enterCode }}</div>
          </li>
          <li>
            <div class="form-field">企业简称:</div>
            <div class="form-val">{{ form.enterShortName }}</div>
          </li>
          <li>
            <div class="form-field">联系电话:</div>
            <div class="form-val">{{ form.enterTelNum }}</div>
          </li>
          <li>
            <div class="form-field">联系邮件:</div>
            <div class="form-val">{{ form.enterMail }}</div>
          </li>
        </ul>
      </div>
      <div class="edit-btn" style="margin-left:40px;margin-top:30px;">
        <el-button type="primary" size="small" @click="handleEdit"
          >修改
        </el-button>
      </div>
    </template>
    <template v-else>
      <div class="basic-form">
        <el-form
          :model="form"
          status-icon
          ref="ruleForm"
          label-width="110px"
          size="small"
          :rules="rules"
          inline-message
        >
          <el-form-item
            :label="item.label"
            v-for="item in fields"
            :key="item.index"
            :prop="item.model"
          >
            <el-input
              class="basic-input" 
              v-model="form[item.model]" 
              style="width:60%"
              :disabled="item.isDisabled"
            >
            </el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="edit-btn" style="padding-left:40px;margin-top:30px;">
        <el-button size="small" @click="handleBack">返回 </el-button>
        <el-button size="small" type="primary" @click="handleSave">保存
        </el-button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "basic-info",
  components: {
    EditBtns: resolve => require(["../components/EditBtns"], resolve)
  },
  data() {
    // 验证电话号码
    // var isMobileNumber= (rule, value, callback) => {
    //   if (!value) {
    //     return new Error("请输入电话号码");
    //   } else {
    //     const reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
    //     const isPhone = reg.test(value);
    //     value = Number(value); //转换为数字
    //     if (typeof value === "number" && !isNaN(value)) {//判断是否为数字
    //     value = value.toString(); //转换成字符串
    //       if (value.length < 0 || value.length > 12 || !isPhone) { //判断是否为11位手机号
    //         callback(new Error("手机号码格式如:138xxxx8754"));
    //       } else {
    //         callback();
    //       }
    //     } else {
    //       callback(new Error("请输入电话号码"));
    //     }
    //   }
    // };
    return {
      isShowMainPage: true, //是否显示主页
      form: {},
      fields: [
        {
          label: "SupplyX ID:",
          model: "enterCode",
          isDisabled: true,
          // 添加index解决key重复报错
          index: 0
        },
        {
          label: "企业名称:",
          model: "enterName",
          // isDisabled: false,
          index: 1
        },
        {
          label: "企业地址:",
          model: "enterAddress",
          index: 2
        },
        {
          label: "企业编码:",
          model: "enterCode",
          index: 3,
          isDisabled: true
        },
        {
          label: "企业简称:",
          model: "enterShortName",
          index: 4
        },
        {
          label: "联系电话:",
          model: "enterTelNum",
          index: 5
        },
        {
          label: "联系邮件:",
          model: "enterMail",
          index: 6
        }
      ],
      rules: {
        enterName: [
          { required: true, message: '请输入企业名称', trigger: 'blur' }
        ],
        enterAddress: [
          { required: true, message: '请输入企业地址', trigger: 'blur' }
        ],
        enterShortName: [
          { required: true, message: '请输入企业简称', trigger: 'blur' }
        ],
        enterTelNum: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          // { validator: isMobileNumber, trigger: "blur" }
        ],
        enterMail: [
          { required: true, message: '请输入联系电话', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur' }
        ]
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
      isFormDisabled: true //表单是否禁用
    }
  },
  created() {
    this.getEnterpriseBasicInfo();
  },
  methods: {
    // 获取企业信息
    getEnterpriseBasicInfo (obj = {}) {
      // let obj = obj
      this.$api.post(this.$lesUiPath.enterpriseBasicInfo, obj).then(result => {
        if (result.code == 0) {
          console.log(result.data)
          this.form = result.data
          // this.applied = result.data.applied
        } else {
          return this.$message.error(result.msg)
        }
      })
    },
    // 点击修改按钮
    handleEdit() {
      // this.isFormDisabled = false
      this.isShowMainPage = false
      // this.getEnterpriseBasicInfo()
    },

    //点击保存按钮
    handleSave() {
      // this.isFormDisabled = true
      console.log(this.form)
      let valid = this.validateFunc('ruleForm')
      console.log(valid)
      if (valid) {
        let obj = {}
        obj = Object.assign(this.form)
        console.log(obj)
        this.$api.post(this.$lesUiPath.editEnterpriseBasicInfo, obj).then(result => {
          if (result.code == 0) {
            this.getEnterpriseBasicInfo()
            this.isShowMainPage = true
          } else {
            return this.$message.error(result.msg)
          }
        })
      }
    },
    //返回
    handleBack() {
      this.getEnterpriseBasicInfo()
      this.isShowMainPage = true
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-info {
  overflow: hidden;
  padding: 10px;
  text-align: left;
  // .warn-info {
  //   margin-top: 10px;
  //   font-size: 12px;
  //   .el-icon-warning {
  //     font-size: 24px;
  //     margin-right: 20px;
  //     margin-left: 40px;
  //     color: #409eff;
  //     vertical-align: middle;
  //   }
  //   & > span {
  //     vertical-align: middle;
  //   }
  // }
  // .basic-form {
  //   margin-top: 20px;
  // }
  .main-page {
    & > ul {
      & > li {
        font-size: 14px;
        line-height: 40px;
        & > div {
          display: inline-block;
          font-weight: 500;
        }
        .form-field {
          width: 110px;
          text-align: right;
          margin-right: 8px;
        }
      }
    }
  }
  .basic-form {
    margin-left: 10px;
    // .basic-input {
    //   margin: 10px;
    // }
  }
}
</style>
