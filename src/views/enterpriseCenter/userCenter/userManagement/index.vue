<template>
  <div class="user-management">
    <template v-if="isShowMainPage">
      <div class="add-btn">
        <el-button type="primary"
                   size="small"
                   @click="handleAdd"
                   v-if="type==1">添加用户</el-button>
      </div>
      <Table :tableHead="tableHead"
             :tableData="tableData"
             :isShowOperation="type==1"
             :isShowEditBtn="type==1"
             :isShowDeleteBtn='type==1'
             :currentPage='currentPage'
             :total='total'
             :currentSize='currentSize'
             @sizeChange='sizeChange'
             @handleEdit="handleEdit"
             @handleDelete='handleDelete'
             @currentChange='currentChange' />
    </template>
    <template v-else>
      <UserForm @handleBack="handleBack"
                :userForm="userForm"
                @handleSave='handleSave'
                :isShowResetBtn="isShowResetBtn" />
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
  data () {
    return {
      isShowMainPage: true,
      isShowResetBtn: false,
      userForm: {},
      tableHead: [
        {
          fieldNo: "name",
          fieldName: "姓名",
          id: 1
        },
        {
          fieldNo: "email",
          fieldName: "Email",
          id: 2
        },
        {
          fieldNo: "mobilePhone",
          fieldName: "手机号码",
          id: 3
        },
        {
          fieldNo: "departCode",
          fieldName: "部门编码",
          id: 4
        },
        {
          fieldNo: "departName",
          fieldName: "所属部门",
          id: 5
        },
        {
          fieldNo: "isEnable",
          fieldName: "允许访问系统",
          id: 6
        }
      ],
      tableData: [],
      // 分页
      currentPage: 1,
      currentSize: 10,
      total: 0,
      type: this.$store.getters.type

    }
  },
  mounted () {
    this.getUserData()

  },
  methods: {
    // 分页
    sizeChange (val) {
      this.currentSize = val
      this.getUserData(this.currentPage, this.currentSize)
    },
    currentChange (val) {
      this.currentPage = val
      this.getUserData(this.currentPage, this.currentSize)

    },
    //添加用户
    handleAdd () {
      this.isShowMainPage = false
      this.isShowResetBtn = false // 是否显示重置按钮
      this.userForm = {}
    },
    //返回
    handleBack () {
      this.isShowMainPage = true
    },
    // 点击修改按钮
    handleEdit (row) {
      this.userForm = {}
      this.isShowResetBtn = true //是否显示重置按钮
      this.userForm = Object.assign({}, row)
      this.userForm.isEnable = row.isEnable == '否' ? false : true

      this.isShowMainPage = false
    },
    //点击保存按钮
    handleSave () {
      this.userForm.isEnable = this.userForm.isEnable == true ? 1 : 0
      this.userForm.username = this.userForm.email
      const status = this.userForm.id ? 'edit' : 'add'
      if (status == 'add') {
        this.addUserFunc(this.userForm)
      } else {
        this.updateUserFunc(this.userForm)
      }
    },
    //新建用户方法
    addUserFunc (obj) {
      this.$api.post(this.$lesUiPath.enteruserAdd, obj).then(result => {
        if (result.code == 0) {
          this.isShowMainPage = true
          this.getUserData()
          return this.$message.success('添加成功')
        }
      })
    },
    //修改用户方法
    updateUserFunc (obj) {
      for(let i in obj){
        if(obj[i] == ""){
          delete obj[i]
        }
      }
      this.$api.post(this.$lesUiPath.enteruserUpdate, obj).then(result => {
        if (result.code == 0) {
          this.isShowMainPage = true
          this.getUserData()
          return this.$message.success('修改成功')
        }
      })
    },
    //获取用户列表
    getUserData (page = 1, length = 10) {
      const queryInfo = { page: page, length: length, isSuperAdmin:'0' };
      this.$api.post(this.$lesUiPath.enteruserFindUserList, queryInfo).then(result => {
        if (result.code == 0) {
          this.tableData = result.data
          this.tableData.map(item => {
            item.isEnable = item.isEnable == 1 ? '是' : '否'
          })
          this.total = this.tableData.length
        }
      })
    },
    //删除
    handleDelete (row) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', this.$global.confirmConfig).then(() => {
        this.$api.post(this.$lesUiPath.enteruserRemove, { id: row.id }).then(result => {
          if (result.code == 0) {
            this.getUserData()
            return this.$message.success('删除成功')
          }
        })
      })
    }


  }
}
</script>

<style lang="scss" scoped>
.user-management {
  height: calc(100vh - 293px);
  text-align: left;
  overflow: hidden;
  .add-btn {
    padding: 16px 24px;
  }
}
</style>
