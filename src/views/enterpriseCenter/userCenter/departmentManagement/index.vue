<template>
  <div class="department-management">
    <Tree :treeData="treeData"
          class="tree"
          @handleGetNode="handleGetNode" />
    <div class="table-box">
      <div class="depart-btns">
        <el-button type="primary"
                   size="small"
                   @click="handleAdd">添加</el-button>
      </div>
      <Table :tableHead="tableHead"
             :tableData="tableData"
             :maxHeight="maxHeight" />
    </div>
    <el-dialog title="添加部门"
               :visible.sync="dialogVisible"
               :close-on-click-modal='false'
               width="40%">
      <el-form :model="ruleForm"
               :rules="rules"
               ref="ruleForm"
               label-width="100px">
        <el-form-item label="活动名称"
                      prop="name"
                      size="small">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false"
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
  data () {
    return {
      ruleForm: {},  //添加部门表单
      rules: {},
      maxHeight: document.body.clientHeight - 390,
      dialogVisible: false,
      treeData: [
        {
          label: "一级 1",
          id: 1,
          children: [
            {
              label: "二级 1-1",
              id: 11,
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          id: 2,
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
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
      ]
    }
  },
  mounted () {
    this.getdepartTreeData()
  },
  methods: {
    //  点击节点获取节点id
    handleGetNode (obj, node) {
      this.nodeId = obj.id
    },
    handleAdd () {
      // if (!this.nodeId) {
      //   return this.$message({
      //     message: "请选择节点",
      //     type: "warning"
      //   })
      // }
      this.dialogVisible = true
    },
    //添加部门确定
    handleSaveAdd () {
      console.log(this.ruleForm)
    },
    //查询部门树
    getdepartTreeData () {
      this.$api.post(this.$lesUiPath.departTree).then(result => {
        if (result.code == 0) {
          console.log(result.data)
        }
      })
    }

  }
}
</script>

<style lang="scss" scoped>
.department-management {
  overflow: hidden;
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
