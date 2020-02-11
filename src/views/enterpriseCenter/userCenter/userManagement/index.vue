<template>
  <div class="user-management">
    <template v-if="isShowMainPage">
      <div class="add-btn">
        <el-button type="primary" size="small" @click="handleAdd"
          >添加用户</el-button
        >
      </div>
      <Table
        :tableHead="tableHead"
        :tableData="tableData"
        :isShowOperation="true"
        :isShowEditBtn="true"
        @handleEdit="handleEdit"
      />
    </template>
    <template v-else>
      <UserForm
        @handleBack="handleBack"
        :userForm="userForm"
        :isShowResetBtn="isShowResetBtn"
      />
    </template>
  </div>
</template>

<script>
export default {
  name: "user-management",
  components: {
    Table: resolve => require(["@/components/Table"], resolve),
    UserForm: resolve => require(["../components/UserForm"], resolve)
  },
  data() {
    return {
      isShowMainPage: true,
      isShowResetBtn: false,
      userForm: {},
      tableHead: [
        {
          fieldNo: "userName",
          fieldName: "姓名",
          id: 1
        },
        {
          fieldNo: "email",
          fieldName: "Email",
          id: 2
        },
        {
          fieldNo: "telPhone",
          fieldName: "联系电话",
          id: 3
        },
        {
          fieldNo: "depart",
          fieldName: "所属部门",
          id: 4
        },
        {
          fieldNo: "isAllowed",
          fieldName: "是否访问系统",
          id: 5
        }
      ],
      tableData: [
        {
          userName: "userName",
          email: "11111@qq.com",
          telPhone: "1234567890",
          depart: "研发部",
          isAllowed: "是"
        },
        {
          userName: "userName",
          email: "11111@qq.com",
          telPhone: "1234567890",
          depart: "研发部",
          isAllowed: "是"
        },
        {
          userName: "userName",
          email: "11111@qq.com",
          telPhone: "1234567890",
          depart: "研发部",
          isAllowed: "是"
        },
        {
          userName: "userName",
          email: "11111@qq.com",
          telPhone: "1234567890",
          depart: "研发部",
          isAllowed: "是"
        }
      ]
    }
  },
  methods: {
    //添加用户
    handleAdd() {
      this.isShowMainPage = false
      this.isShowResetBtn = false // 是否显示重置按钮
      this.userForm = {}
    },
    //返回
    handleBack() {
      this.isShowMainPage = true
    },
    // 点击修改按钮
    handleEdit(row) {
      this.isShowMainPage = false
      this.isShowResetBtn = true //是否显示重置按钮
      this.userForm = row
      // this.userForm.isAllowed = true
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
    }
  }
}
</script>

<style lang="scss" scoped>
.user-management {
  text-align: left;
  overflow: hidden;
  .add-btn {
    padding: 16px 24px;
  }
}
</style>
