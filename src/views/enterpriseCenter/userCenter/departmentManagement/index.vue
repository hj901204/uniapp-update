<template>
  <div class="department-management">
    <Tree :treeData="treeData"
          class="tree"
          @handleGetNode="handleGetNode"
          v-if="treeData.length>0" />
    <div class="table-box">
      <div class="depart-btns">
        <el-button type="danger"
                   size="small"
                   @click="handleDelete"
                   v-if="type==1">删除</el-button>
        <el-button type="primary"
                   size="small"
                   @click="handleEdit"
                   v-if="type==1">修改</el-button>
        <el-button type="primary"
                   size="small"
                   @click="handleAdd"
                   v-if="type==1">添加</el-button>
      </div>
      <Table :tableHead="tableHead"
             :tableData="tableData"
             :maxHeight="maxHeight"
             :currentPage='currentPage'
             :total='total'
             :currentSize='currentSize'
             @sizeChange='sizeChange'
             @currentChange='currentChange' />
    </div>
    <el-dialog :title="title"
               :visible.sync="dialogVisible"
               v-if="dialogVisible"
               :close-on-click-modal='false'
               width="40%">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleFormRef"
               label-width="100px">
        <el-form-item label="部门名称"
                      prop="name"
                      size="small">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="部门编码"
                      prop="code"
                      size="small">
          <el-input v-model="ruleForm.code"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="handleCancel"
                   size="small">取 消</el-button>
        <el-button type="primary"
                   @click="handleSaveAdd"
                   size="small">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "department-management",
  components: {
    Tree: resolve => require(["@/components/Tree"], resolve),
    Table: resolve => require(["@/components/Table"], resolve)
  },
  computed: {
    //清空表单验证
    resetForm (formName) {
      this.$refs[formName].clearValidate();
    }
  },
  data () {
    return {
      type: this.$store.getters.type,
      ruleForm: {},  //添加部门表单
      title: '',
      rules: {
        name: [
          { required: true, message: '请输入部门名称', trigger: 'blur' },
        ],
        code: [
          { required: true, message: '请输入部门编码', trigger: 'blur' },
        ],

      },
      maxHeight: document.body.clientHeight - 390,
      dialogVisible: false,
      treeData: [],
      tableHead: [
        {
          fieldNo: "name",
          fieldName: "姓名",
          id: 1
        },
        {
          fieldNo: "email",
          fieldName: "邮件",
          id: 2,
          width: 300
        }
      ],
      tableData: [
        {
          name: "木村文乃",
          email: "fumino.kimura@gocdata.com"
        },
        {
          name: "溜溜",
          email: "liuliu.kimura@gocdata.com"
        }
      ],
      // 分页
      currentPage: 1,
      currentSize: 10,
      total: 0,
    }
  },
  mounted () {
    this.getdepartTreeData()
    this.getUserData()
  },
  methods: {
    //  点击节点获取节点id
    handleGetNode (obj, node) {
      this.nodeId = obj.id
      this.nodeObj = {
        id: obj.id,
        parentId: obj.parentId,
        name: obj.name,
        code: obj.code
      }
      this.getUserData(undefined, undefined, this.nodeId)
    },
    handleAdd () {
      this.ruleForm = {}
      this.title = '添加部门'
      // this.resetForm('ruleFormRef') ///清空表单
      if (this.treeData && this.treeData.length != 0) {
        if (this.treeData.length == 1 && this.treeData[0].children.length == 0) {
          this.ruleForm.parentId = this.treeData[0].id
          this.dialogVisible = true
        }
        else if (!this.nodeId && this.treeData[0].children.length != 0) {
          return this.$message({
            message: "请选择部门",
            type: "warning"
          })
        } else {
          this.ruleForm.parentId = this.nodeId
          this.dialogVisible = true
        }
      } else {
        this.ruleForm.parentId = '-1'
        this.dialogVisible = true
      }

    },
    //添加部门确定
    handleSaveAdd () {
      this.$refs.ruleFormRef.validate(valid => {
        if (valid) {
          const status = this.ruleForm.id ? 'edit' : 'add'
          if (status == 'add') {
            this.addDepartFunc(this.ruleForm)
          } else {
            this.updateDepartFunc(this.ruleForm)
          }
        } else {
          return false
        }
      })


    },
    // 添加部门方法
    addDepartFunc (obj) {
      this.$api.addData(this.$lesUiPath.depart, obj).then(result => {
        if (result.code == 0) {
          this.dialogVisible = false
          this.nodeId = ''
          this.getdepartTreeData()
        } else {
          this.$message.warning(result.msg)
        }
      })
    },
    //修改部门方法
    updateDepartFunc (obj) {
      this.$api.updateData(this.$lesUiPath.depart, obj).then(result => {
        if (result.code == 0) {
          this.dialogVisible = false
          this.nodeId = ''
          this.getdepartTreeData()
        } else {
          this.$message.warning(result.msg)
        }
      })
    },
    // 修改部门
    handleEdit () {
      if (!this.nodeId) return this.$message.warning('请选择部门')
      this.title = '修改部门'
      this.ruleForm = this.nodeObj
      if (this.ruleForm.id) {
        this.dialogVisible = true

      }
    },
    //删除部门
    handleDelete () {
      if (!this.nodeId) return this.$message.warning('请选择要删除的部门')
      this.$confirm('此操作将永久删除, 是否继续?', '提示', this.$global.confirmConfig).then(() => {
        this.$api.delData(this.$lesUiPath.depart, { id: this.nodeId }).then(result => {
          if (result.code == 0) {
            this.getdepartTreeData()
            return this.$message.success('删除成功')
          }
        })
      })
    },
    //取消
    handleCancel () {
      this.dialogVisible = false
      this.nodeId = ''
    },
    //查询部门树
    getdepartTreeData () {
      this.$api.post(this.$lesUiPath.departTree).then(result => {
        if (result.code == 0) {
          this.treeData = result.data
        }
      })
    },
    //获取右侧用户列表
    getUserData (page = 1, length = 10, departId = '') {
      const queryInfo = { page: page, length: length, departId: departId };
      this.$api.post(this.$lesUiPath.enteruserFindUserList, queryInfo).then(result => {
        if (result.code == 0) {
          this.tableData = result.data
          this.total = this.tableData.length
        }
      })
    },
    // 分页
    sizeChange (val) {
      this.currentSize = val
      this.getUserData(this.currentPage, this.currentSize, this.nodeId)
    },
    currentChange (val) {
      this.currentPage = val
      this.getUserData(this.currentPage, this.currentSize, this.nodeId)

    },


  }
}
</script>

<style lang="scss" scoped>
.department-management {
  overflow: hidden;
  height: calc(100vh - 293px);
  text-align: left;
  .tree {
    width: 35%;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    float: left;
    height: calc(100vh - 290px);
    overflow: auto;
  }
  .table-box {
    float: right;
    padding: 8px;
    box-sizing: border-box;
    width: 65%;
    .depart-btns {
      text-align: right;
    }
  }
}
</style>
