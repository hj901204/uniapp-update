<template>
  <div class="basic-info">
    <EditBtns @handleEdit="handleEdit" @handleSave="handleSave" />
    <div class="warn-info">
      <i class="el-icon-warning"></i>
      <span>企业的基本信息可以在这里查询，管理员可以对基本信息进行修改；</span>
    </div>
    <el-form
      :model="form"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="basic-form"
      size="small"
      :disabled="isFormDisabled"
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
</template>

<script>
export default {
  name: "basic-info",
  components: {
    EditBtns: resolve => require(["../components/EditBtns"], resolve)
  },
  data() {
    return {
      form: {},
      fields: [
        {
          label: "企业ID",
          model: "companyId"
        },
        {
          label: "企业名称",
          model: "companyName"
        },
        {
          label: "企业地址",
          model: "companyAddress"
        },
        {
          label: "企业编码",
          model: "companyNo"
        },
        {
          label: "企业简称",
          model: "shortName"
        },
        {
          label: "联系电话",
          model: "telNumber"
        },
        {
          label: "联系邮件",
          model: "email"
        }
      ],
      isFormDisabled: true //表单是否禁用
    }
  },
  methods: {
    // 点击修改按钮
    handleEdit() {
      this.isFormDisabled = false
    },
    //点击保存按钮
    handleSave() {
      this.isFormDisabled = true
      console.log(this.form)
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-info {
  overflow: hidden;
  padding: 10px;
  text-align: left;
  .warn-info {
    margin-top: 10px;
    font-size: 12px;
    .el-icon-warning {
      font-size: 24px;
      margin-right: 20px;
      margin-left: 40px;
      color: #409eff;
      vertical-align: middle;
    }
    & > span {
      vertical-align: middle;
    }
  }
  .basic-form {
    margin-top: 20px;
  }
}
</style>
