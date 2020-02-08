<template>
  <div class="user-management">
    <EditBtns @handleEdit="handleEdit" @handleSave="handleSave" />
    <el-form
      :model="userForm"
      status-icon
      hide-required-asterisk
      ref="ruleForm"
      label-width="100px"
      class="user-form"
      size="small"
      :disabled="isFormDisabled"
      :rules="rules"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="userForm.name" style="width:50%"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件" prop="email">
        <el-input
          v-model="userForm.email"
          type="email"
          style="width:50%"
        ></el-input>
      </el-form-item>
      <el-form-item label="登陆密码" prop="loginPsd">
        <el-input
          type="password"
          v-model="userForm.loginPsd"
          autocomplete="off"
          style="width:50%;margin-right:10px;"
        ></el-input>
        <el-button type="primary" plain size="small" @click="handleResetPsd"
          >重置密码</el-button
        >
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input
          v-model="userForm.tel"
          type="tel"
          style="width:50%"
        ></el-input>
      </el-form-item>
      <el-form-item label="所属部门">
        <el-select
          v-model="userForm.depart"
          placeholder="请选择"
          style="width:50%"
        >
          <el-option
            v-for="item in departOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="userForm.checked">禁止访问系统</el-checkbox>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "user-management",
  components: {
    EditBtns: resolve =>
      require(["../../enterpriseInfo/components/EditBtns"], resolve)
  },
  data() {
    return {
      isFormDisabled: true,
      userForm: { name: "aa" },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        loginPsd: [
          { required: true, message: "请输入登陆密码", trigger: "blur" }
        ]
      },
      departOptions: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    }
  },
  methods: {
    // 点击修改按钮
    handleEdit() {
      this.isFormDisabled = false
    },
    //点击保存按钮
    handleSave() {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.isFormDisabled = true
          // console.log(this.userForm)
        } else {
          return false
        }
      })
    },
    //重置密码
    handleResetPsd() {
      this.userForm.loginPsd = ""
    }
  }
}
</script>

<style lang="scss" scoped>
.user-management {
  text-align: left;
  overflow: hidden;
}
</style>
