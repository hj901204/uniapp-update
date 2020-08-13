<template>
  <div class="basic-info">
    <!-- 显示企业基本信息 -->
    <template v-if="isShowMainPage">
      <div class="edit-btn"
           style="margin:5px 20px 0 40px;text-align:right">
        <el-button type="primary"
          size="small"
          @click="handleCheckBus"
          >查看营业执照
        </el-button>
        <el-button type="primary"
          size="small"
          @click="handleEdit"
          v-if="type==1">修改
        </el-button>
      </div>
      <div>
          <div class="invoice-info">
            <h3 class="form-title">基本信息</h3>
            <ul class="invoice-info-box">
              <li>
                <div>SupplyX ID:</div>
                <p style="color: red;">{{ form.xid }}</p>
              </li>
              <li>
                <div>企业名称:</div>
                <p>{{ form.enterName }}</p>
              </li>
              <!-- <li>
                <div>企业英文名称:</div>
                <p>{{ form.enterNameEn }}</p>
              </li>
              <li>
                <div>企业简称:</div>
                <p>{{ form.enterShortName }}</p>
              </li> -->
              <li>
                <div>企业地址:</div>
                <p>{{ form.enterAddress }}</p>
              </li>
              <!--
              <li>
                <div>企业编码:</div>
                <p>{{ form.xid }}</p>
              </li>
              -->
              <li>
                <div>联系电话:</div>
                <p>{{ form.enterTelNum }}</p>
              </li>
              <li>
                <div>联系人:</div>
                <p>{{ form.liaisonMan }}</p>
              </li>
              <li>
                <div>联系邮件:</div>
                <p>{{ form.enterMail }}</p>
              </li>
            </ul>
          </div>
        <!-- 发票信息 -->
        <div class="invoice-info">
          <h3 class="form-title">我的发票信息</h3>
          <ul class="invoice-info-box">
            <li>
              <div>发票抬头</div>
              <p>{{form.fpTitle}}</p>
            </li>
            <li>
              <div>统一社会信用代码</div>
              <p>{{form.fpTax}}</p>
            </li>
            <li>
              <div>注册地址</div>
              <p>{{form.fpRegAdd}}</p>
            </li>
            <li>
              <div>注册电话</div>
              <p>{{form.fpTel}}</p>
            </li>
            <li>
              <div>银行名称</div>
              <p>{{form.fpBankName}}</p>
            </li>
            <li>
              <div>银行账号</div>
              <p>{{form.fpBankNo}}</p>
            </li>
          </ul>
        </div>
        <!-- 收票信息 -->
        <div class="invoice-info">
          <h3 class="form-title">收票信息</h3>
          <ul class="invoice-info-box">
            <li>
              <div>收票人</div>
              <p>{{form.fpRecever}}</p>
            </li>
            <li>
              <div>联系电话</div>
              <p>{{form.fpRecTel}}</p>
            </li>
            <li>
              <div>详细地址</div>
              <p>{{form.fpRecAdd}}</p>
            </li>
          </ul>
        </div>
      </div>

    </template>
    <template v-else>
      <div class="basic-form">
        <!-- <div class="supplyxId"> <span >SupplyX ID:</span>{{supplyxId}}</div> -->
        <el-form :model="form"
                 status-icon
                 ref="ruleForm"
                 label-width="110px"
                 size="small"
                 :rules="rules"
                 inline-message>
          <el-form-item :label="item.label"
                        v-for="item in fields"
                        :key="item.index"
                        :prop="item.model">
            <el-input class="basic-input"
                      v-model="form[item.model]"
                      style="width:60%"
                      :disabled="item.isDisabled"
                      :maxlength="item.maxlength?item.maxlength:''">
            </el-input>
          </el-form-item>
        </el-form>
      </div>
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
import { validateNumAndCh } from "@/utils/validate";
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
      type: this.$store.getters.type,
      isShowMainPage: true, //是否显示主页
      form: {},
      supplyxId: "",
      fields: [
        // {
        //   label: "SupplyX ID:",
        //   model: "xid",
        //   isDisabled: true,
        //   // 添加index解决key重复报错
        //   index: 0,
        //   maxlength: 100
        // },
        {
          label: "企业名称:",
          model: "enterName",
          // isDisabled: false,
          index: 1,
          maxlength: 100
        },
        // {
        //   label: "企业英文名称:",
        //   model: "enterNameEn",
        //   index: 2,
        //   maxlength: 100
        // },
        // {
        //   label: "企业简称:",
        //   model: "enterShortName",
        //   index: 3,
        //   maxlength: 100
        // },
        {
          label: "企业地址:",
          model: "enterAddress",
          index: 4,
          maxlength: 100
        },
        // {
        //   label: "企业编码:",
        //   model: "xid",
        //   index: 3,
        //   isDisabled: true
        // },

        {
          label: "联系电话:",
          model: "enterTelNum",
          index: 6,
          maxlength: 100
        },
        {
          label: "联系人:",
          model: "liaisonMan",
          index: 7,
          maxlength: 100
        },
        {
          label: "联系邮件:",
          model: "enterMail",
          index: 8,
          maxlength: 100
        },
        {
          label: "发票抬头:",
          model: "fpTitle",
          index: 9,
          maxlength: 100
        },
        {
          label: "公司税号:",
          model: "fpTax",
          index: 10,
          maxlength: 100
        },
        {
          label: "注册地址:",
          model: "fpRegAdd",
          index: 11,
          maxlength: 100
        },
        {
          label: "注册电话:",
          model: "fpTel",
          index: 12,
          maxlength: 100
        },
        {
          label: "银行名称:",
          model: "fpBankName",
          index: 13,
          maxlength: 100
        },
        {
          label: "银行账号:",
          model: "fpBankNo",
          index: 14,
          maxlength: 100
        },
        {
          label: "收票人:",
          model: "fpRecever",
          index: 15,
          maxlength: 100
        },
        {
          label: "收票人电话:",
          model: "fpRecTel",
          index: 16,
          maxlength: 100
        },
        {
          label: "收票人地址:",
          model: "fpRecAdd",
          index: 17,
          maxlength: 100
        }
      ],
      rules: {
        enterName: [
          { required: true, message: "请输入企业名称", trigger: "blur" },
          { validator: validateNumAndCh.bind(this), trigger: "blur" }
        ],
        enterAddress: [
          { required: true, message: "请输入企业地址", trigger: "blur" }
        ],
        enterShortName: [
          { required: true, message: "请输入企业简称", trigger: "blur" },
          { validator: validateNumAndCh.bind(this), trigger: "blur" }
        ],
        enterTelNum: [
          { required: true, message: "请输入联系电话", trigger: "blur" }
          // { validator: isMobileNumber, trigger: "blur" }
        ],
        enterMail: [
          { required: true, message: "请输入联系电话", trigger: "blur" },
          { type: "email", message: "请输入正确的邮箱地址", trigger: "blur" }
        ]
      },
      // 验证表单
      validateFunc(ref) {
        let flag;
        this.$refs[ref].validate(valid => {
          if (valid) {
            flag = true;
            return flag;
          }
          flag = false;
          return flag;
        });
        return flag;
      },
      isFormDisabled: true, //表单是否禁用
      diffData: {} //修改后要提交的json
    };
  },
  created() {
    this.getEnterpriseBasicInfo();
  },
  methods: {
    // 获取企业信息
    getEnterpriseBasicInfo(obj = {}) {
      // let obj = obj
      this.$api.post(this.$lesUiPath.enterpriseBasicInfo, obj).then(result => {
        if (result.code == 0) {
          // this.form = result.data
          this.form = Object.assign({}, result.data);
          this.copyForm = Object.assign({}, result.data);

          this.supplyxId = result.data.xid;
          this.diffData = { id: result.data.id };
        } else {
          if (result.msg) {
            return this.$message.error(result.msg);
          }
        }
      });
    },
    // 点击修改按钮
    handleEdit() {
      // this.isFormDisabled = false
      this.isShowMainPage = false;
      // this.getEnterpriseBasicInfo()
    },

    //点击保存按钮
    handleSave() {
      let valid = this.validateFunc("ruleForm");
      if (valid) {
        // let obj = {}
        // obj = Object.assign(this.form)
        // console.log(obj)
        delete this.form.xid;
        delete this.copyForm.xid;
        let result = this.diffDevinfo(this.copyForm, this.form, this.diffData);
        let keyCount = this.hasEditData(result);
        if (keyCount == 1) {
          return this.$message.warning("未修改数据");
        }

        this.$api
          .post(this.$lesUiPath.editEnterpriseBasicInfo, result)
          .then(result => {
            if (result.code == 0) {
              this.getEnterpriseBasicInfo();
              this.isShowMainPage = true;
              return this.$message.success("修改成功");
            } else {
              if (result.msg) {
                return this.$message.error(result.msg);
              }
            }
          });
      }
    },
    //返回
    handleBack() {
      this.getEnterpriseBasicInfo();
      this.isShowMainPage = true;
    },
    //只提交修改的数据
    diffDevinfo(originalForm, editForm, diffData) {
      //originalForm原始数据不进行修改的表单
      //editForm v-modal绑定的表单可以进行修改的表单
      //diffData  对比后要提交的表单
      for (let k in editForm) {
        if (originalForm[k] != editForm[k]) {
          diffData[k] = editForm[k];
        } else {
          if (k != "id") {
            delete diffData[k];
          }
        }
      }
      return diffData;
    },
    //判断修改数据有否有要修改的数据  如果有则提交数据 如果没有则不提交数据
    hasEditData(obj) {
      let count = 0;
      for (let i in obj) {
        count++;
      }
      return count;
    },
    handleCheckBus() {
      window.open('http://www.baidu.com')
    }
  }
};
</script>

<style lang="scss" scoped>
.basic-info {
  overflow: hidden;
  padding: 10px;
  text-align: left;
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
    .supplyxId {
      line-height: 30px;
      & > span {
        display: inline-block;
        width: 100px;
        text-align: right;
        font-weight: bold;
        color: #606266;
        margin-right: 12px;
      }
    }
  }
  //发票信息
  .invoice-info {
    background-color: #fff;
    padding: 20px;
    margin-left: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 10px;
    .form-title {
      line-height: 30px;
      border-bottom: 2px solid #f1f2f5;
      margin-bottom: 20px;
      font-weight: 500;
      font-size: 16px;
    }
    .invoice-info-box {
      width: 90%;
      margin: 0 auto;
      margin-top: 40px;
      font-size: 14px;
      & > li {
        border: 1px solid rgba(0, 0, 0, 0.1);
        line-height: 40px;
        margin-bottom: -1px;
        & > div {
          width: 200px;
          background-color: #edf4fc;
          color: #336eb1;
          text-align: center;
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          display: inline-block;
          font-weight: 500;
        }
        & > p {
          display: inline-block;
          padding-left: 20px;
        }
      }
    }
  }
}
</style>
