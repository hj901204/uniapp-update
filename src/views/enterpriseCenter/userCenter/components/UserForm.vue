<template>
  <div class="user-form">
    <el-form
      :model="userForm"
      status-icon
      hide-required-asterisk
      ref="ruleForm"
      label-width="100px"
      size="small"
      :rules="rules"
    >
      <el-form-item label="姓名" prop="userName">
        <el-input v-model="userForm.userName" style="width:50%"></el-input>
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
        <el-button
          type="danger"
          size="mini"
          v-if="isShowResetBtn"
          @click="handleResetPsd"
          icon="el-icon-my-zhongzhi"
          >重置</el-button
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
        <el-checkbox v-model="userForm.isAllowed">禁止访问系统</el-checkbox>
      </el-form-item>
    </el-form>
    <div class="edit-btn">
      <el-button size="small" @click="handleBack">返回</el-button>
      <el-button type="primary" size="small" @click="handleSave"
        >保存
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-form",
  props: {
    isShowResetBtn: { type: Boolean, default: false },
    userForm: { type: Object, default: () => {} }
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
    //返回
    handleBack() {
      this.$emit("handleBack")
    },
    //重置密码
    handleResetPsd() {
      this.userForm.loginPsd = ""
    }
  }
}
</script>

<style lang="scss" scoped>
.user-form {
  padding: 24px;
  .edit-btn {
    padding-left: 30px;
  }
}
</style>
