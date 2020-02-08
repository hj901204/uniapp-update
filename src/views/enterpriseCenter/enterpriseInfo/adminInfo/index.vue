<template>
  <div class="admin-info">
    <EditBtns @handleEdit="handleEdit" @handleSave="handleSave" />
    <div class="warn-info">
      <i class="el-icon-warning"></i>
      <span
        >企业的管理员账号相关信息可以在这里进行修改，可以通过修改管理员联系邮件重新分配管理员企业账号到别的员工；</span
      >
    </div>
    <el-form
      :model="adminForm"
      status-icon
      ref="ruleForm"
      label-width="100px"
      class="admin-form"
      size="small"
      :disabled="isFormDisabled"
    >
      <el-form-item label="管理员账号 " prop="adminName">
        <el-input v-model="adminForm.adminName" style="width:50%"></el-input>
      </el-form-item>
      <el-form-item label="登陆密码" prop="psd">
        <el-input
          type="password"
          v-model="adminForm.psd"
          autocomplete="off"
          style="width:50%"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="adminForm.checkPass"
          autocomplete="off"
          style="width:50%"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "admin-info",
  components: {
    EditBtns: resolve => require(["../components/EditBtns"], resolve)
  },
  data() {
    return {
      adminForm: {},
      isFormDisabled: true
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
    }
  }
}
</script>

<style lang="scss" scoped>
.admin-info {
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
  .admin-form {
    margin-top: 20px;
  }
}
</style>
