<template>
  <div class="admin-info">
    <!-- <EditBtns @handleEdit="handleEdit" @handleSave="handleSave" /> -->
    <div class="warn-info">
      <i class="el-icon-warning"></i>
      <span>
        企业的管理员账号相关信息可以在这里进行修改，可以通过修改管理员联系邮件重新分配管理员企业账号到别的员工；</span
      >
    </div>
    <template v-if="isShowMainPage">
      <div class="admin-num">管理员账号:<span>Admin</span></div>
      <div class="btns">
        <el-button type="primary" size="small" @click="handleEdit"
          >编辑管理员账号</el-button
        >
      </div>
    </template>
    <template v-else>
      <el-form
        :model="adminForm"
        status-icon
        ref="ruleForm"
        label-width="100px"
        class="admin-form"
        size="small"
      >
        <el-form-item label="管理员账号 ">
          <el-input v-model="adminForm.adminUser" style="width:50%"></el-input>
        </el-form-item>
        <el-form-item label="登陆密码">
          <el-input
            type="password"
            v-model="adminForm.adminPsd"
            style="width:50%"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            type="password"
            v-model="adminForm.checkPass"
            style="width:50%"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="edit-btn" style="padding-left:40px;margin-top:30px;">
        <el-button size="small" @click="handleBack">返回 </el-button>
        <el-button size="small" type="primary" @click="handleSave"
          >保存
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
  data() {
    return {
      isShowMainPage: true,
      adminForm: {
        adminUser: "",
        adminPsd: ""
      }
    }
  },
  methods: {
    // 点击修改按钮
    handleEdit() {
      this.isShowMainPage = false
    },
    //返回
    handleBack() {
      this.isShowMainPage = true
    },
    //点击保存按钮
    handleSave() {
      console.log(this.adminForm)
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
