<template>
  <div class="user-form">
    、
    <!-- 用户管理编辑表单 -->
    <el-form :model="userForm"
             hide-required-asterisk
             ref="ruleForm"
             label-width="100px"
             size="small"
             :rules="rules">
      <el-form-item label="姓名"
                    prop="username">
        <el-input v-model="userForm.username"
                  style="width:50%"></el-input>
      </el-form-item>
      <el-form-item label="电子邮件"
                    prop="email">
        <el-input v-model="userForm.email"
                  type="email"
                  style="width:50%"></el-input>
      </el-form-item>
      <el-form-item label="登陆密码"
                    prop="password">
        <el-input type="password"
                  v-model="userForm.password"
                  autocomplete="off"
                  style="width:50%;margin-right:10px;"></el-input>
        <el-button type="danger"
                   size="mini"
                   v-if="isShowResetBtn"
                   @click="handleResetPsd"
                   icon="el-icon-my-zhongzhi">重置</el-button>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="userForm.telPhone"
                  type="tel"
                  style="width:50%"></el-input>
      </el-form-item>
      <el-form-item label="所属部门"
                    prop="departId">
        <el-select v-model="userForm.departId"
                   placeholder="请选择"
                   style="width:50%">
          <el-option v-for="item in departOptions"
                     :key="item.departId"
                     :label="item.departName"
                     :value="item.departId">
          </el-option>
        </el-select>
        <!-- <el-cascader :options="treeData"
                     :show-all-levels="false"
                     style="width:50%"
                     :props="defaultProps"
                     @change='getNode'></el-cascader> -->
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="userForm.isEnable"
                     @change="handleCheckBox">允许访问系统</el-checkbox>
      </el-form-item>
    </el-form>
    <div class="edit-btn">
      <el-button size="small"
                 @click="handleBack">返回</el-button>
      <el-button type="primary"
                 size="small"
                 @click="handleSave">保存
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-form",
  props: {
    isShowResetBtn: { type: Boolean, default: false },
    userForm: { type: Object, default: () => { } },
    formRef: { type: String, default: '' },
  },
  data () {
    return {
      isFormDisabled: true,
      // userForm: { name: "aa" },
      defaultProps: { value: 'id', label: 'name', children: 'children' },

      rules: {
        username: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        password: [
          { required: true, message: "请输入登陆密码", trigger: "blur" }
        ],
        departId: [
          { required: true, message: "请选择部门", trigger: 'blur' }
        ],

      },

      departOptions: [],  //部门数组
    }
  },
  mounted () {
    this.getDepartTree()

  },
  methods: {
    //返回
    handleBack () {
      this.$emit("handleBack")
    },
    //重置密码
    handleResetPsd () {
      this.userForm.password = ""
    },
    //保存
    handleSave () {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$emit('handleSave')
        } else {
          return false
        }
      })
    },
    //获取选中节点
    getNode (val) {
      let selectNodeId = val[val.length - 1]
      this.userForm.departId = selectNodeId

    },
    // //是否选中系统
    handleCheckBox (val) {
      this.userForm.isEnable = (val == 1) ? true : false
    },
    //获取部门数据
    getDepartTree () {
      this.$api.post(this.$lesUiPath.departFindDepartList, {}).then(result => {
        if (result.code == 0) {
          this.departOptions = result.data
          this.departOptions.map(item => {
            item.departId = item.id
            item.departName = item.name
          })
          // this.treeData = this.getTreeData(result.data)
        }
      })
    },
    getTreeData (data) {
      // 循环遍历json数据
      for (var i = 0; i < data.length; i++) {

        if (data[i].children.length < 1) {
          // children若为空数组，则将children设为undefined
          data[i].children = undefined;
        } else {
          // children若不为空数组，则继续 递归调用 本方法
          this.getTreeData(data[i].children);
        }
      }
      return data;
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
