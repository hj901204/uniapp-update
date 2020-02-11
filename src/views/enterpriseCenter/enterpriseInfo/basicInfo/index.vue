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
            <div class="form-val">11111111</div>
          </li>
          <li>
            <div class="form-field">企业名称:</div>
            <div class="form-val">上海谷器数据科技有限公司</div>
          </li>
          <li>
            <div class="form-field">企业地址:</div>
            <div class="form-val">上海市宝山区宝石科技园2号楼508</div>
          </li>
          <li>
            <div class="form-field">企业编码:</div>
            <div class="form-val">FM084305493JM</div>
          </li>
          <li>
            <div class="form-field">企业简称:</div>
            <div class="form-val">谷器数据</div>
          </li>
          <li>
            <div class="form-field">联系电话:</div>
            <div class="form-val">021-33875202</div>
          </li>
          <li>
            <div class="form-field">联系邮件:</div>
            <div class="form-val">market@gocdata.com</div>
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
        >
          <el-form-item
            :label="item.label"
            v-for="item in fields"
            :key="item.model"
          >
            <el-input v-model="form[item.model]" style="width:60%"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="edit-btn" style="padding-left:40px;margin-top:30px;">
        <el-button size="small" @click="handleBack">返回 </el-button>
        <el-button size="small" type="primary" @click="handleBack"
          >保存
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
    return {
      isShowMainPage: true, //是否显示主页
      form: {
        companyId: "11111111",
        companyName: "上海谷器数据科技有限公司",
        companyAddress: "上海市宝山区宝石科技园2号楼508",
        companyNo: "FM084305493JM",
        telNumber: "021-33875202",
        email: "market@gocdata.com",
        shortName: "谷器数据"
      },
      fields: [
        {
          label: "SupplyX ID:",
          model: "companyId"
        },
        {
          label: "企业名称:",
          model: "companyName"
        },
        {
          label: "企业地址:",
          model: "companyAddress"
        },
        {
          label: "企业编码:",
          model: "companyNo"
        },
        {
          label: "企业简称:",
          model: "shortName"
        },
        {
          label: "联系电话:",
          model: "telNumber"
        },
        {
          label: "联系邮件:",
          model: "email"
        }
      ],
      isFormDisabled: true //表单是否禁用
    }
  },
  methods: {
    // 点击修改按钮
    handleEdit() {
      // this.isFormDisabled = false
      this.isShowMainPage = false
    },
    //点击保存按钮
    handleSave() {
      this.isFormDisabled = true
      console.log(this.form)
    },
    //返回
    handleBack() {
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
  }
}
</style>
