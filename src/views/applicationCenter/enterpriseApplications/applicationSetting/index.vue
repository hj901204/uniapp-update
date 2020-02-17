<template>
  <div class="application-setting">
    <!-- 应用信息 -->
    <div class="application-part">
      <div class="apply-title-box">
        <div class="apply-title">
          <img src="@/assets/img/application/biaoqian.png"
               alt="" />
          <span><i>SupplyX </i>{{ params.appName }}</span>
        </div>
        <img src="@/assets/img/application/goc-logo.png"
             alt="">
      </div>
      <div class="apply-info">
        <div class="start-date">
          <p>开始日期 :</p><span>2020/01/21 12:32:34</span>
        </div>
        <div class="expiration-date">
          <p>有效期 :</p><span>一年</span>
        </div>
      </div>
    </div>
    <!-- 添加用户 -->
    <div class="add-user-box">
      <h3>用户列表</h3>
      <el-button size="small"
                 type="primary"
                 class="add-user-btn"
                 @click="handleAddUser">添加用户</el-button>
      <Table :tableHead="tableHead"
             :isShowOperation="true"
             :isShowStopBtns='true'
             :isShowDeleteBtn='true'
             :tableData="tableData"
             @handleStop="handleStop"
             @handleStart="handleStart"
             @handleDelete='handleDelete'
             @sizeChange='sizeChange'
             @currentChange='currentChange'
             :total='total'
             :currentSize='currentSize'
             :currentPage='currentPage' />
    </div>
    <!-- 添加用户弹框 -->
    <el-dialog title="添加用户"
               :visible.sync="dialogVisible"
               close-on-click-modal
               width="50%">
      <Table :tableHead="tableHead"
             :isShowOperation="false"
             :tableData="userTableData"
             @sizeChange='userSizeChange'
             @currentChange='userCurrentChange'
             :currentSize='userCurrentSize'
             :currentPage='userCurrentPage'
             :isShowSelection='true'
             @getSelection='getSelection' />
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
  name: "application-setting",
  components: {
    Table: resolve => require(["@/components/Table"], resolve)
  },
  mounted () {
    this.getBoardData()
  },
  data () {
    return {
      ruleForm: {},
      rules: {},
      dialogVisible: false,
      params: JSON.parse(this.$route.query.params),
      tableHead: [
        {
          fieldNo: "userCode",
          fieldName: "用户名",
          id: 1,
        },
        {
          fieldNo: "userEmail",
          fieldName: "Email",
          id: 2,
        },
        {
          fieldNo: "departName",
          fieldName: "所属部门",
          id: 3
        },
        {
          fieldNo: "departCode",
          fieldName: "部门编码",
          id: 4
        },
      ],
      tableData: [],
      userTableData: [],
      currentSize: 10,
      currentPage: 1,
      userCurrentPage: 1,
      userCurrentSize: 10,
      total: 0,

    }
  },
  methods: {
    // 表格分页 
    sizeChange (val) {
      this.currentSize = val;
      this.getBoardData(this.currentPage, this.currentSize)
    },
    currentChange (val) {
      this.currentPage = val;
      this.getBoardData(this.currentPage, this.currentSize)
    },
    // 用户表格分页
    userSizeChange (val) {
      this.userCurrentSize = val
    },
    userCurrentChange (val) {
      this.userCurrentPage = val
    },
    //获取用户活跃排行榜
    getBoardData (page = 1, length = 10, id = this.params.id) {
      const queryInfo = { page: page, length: length, id: id };
      this.$api.post(this.$lesUiPath.enterAppUserFindList, queryInfo).then(result => {
        if (result.code == 0) {
          this.tableData = result.data
          this.total = this.tableData.length
        }
      })
    },
    //添加用户查询列表
    getUserData (page = 1, length = 10, id = this.params.id, tsEnterId = this.params.tsEnterId) {
      const queryInfo = { page: page, length: length, id: id, tsEnterId: tsEnterId };
      this.$api.post(this.$lesUiPath.enterAppUserAppUser, queryInfo).then(result => {
        if (result.code == 0) {
          this.userTableData = result.data
        }
      })
    },

    // 添加用户按钮
    handleAddUser () {
      this.dialogVisible = true
      this.getUserData()
    },
    //获取表格选项
    getSelection (val) {
      this.selectList = val
    },
    //添加用户保存
    handleSaveAdd () {
      if (!this.selectList || (this.selectList && this.selectList.length != 1)) return this.$message.warning('请选择一条用户数据')
      this.selectinfo = {
        tsUserId: this.selectList[0].id,
        isEnable: this.selectList[0].isEnable,
        tsEnterAppId: this.params.id
      }
      this.$api.post(this.$lesUiPath.enterAppUserAdd, this.selectinfo).then(result => {
        if (result.code == 0) {
          this.getBoardData()
          this.dialogVisible = false
        }
      })
    },
    // 用户删除
    handleDelete (row) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', this.$global.confirmConfig).then(() => {
        this.$api.post(this.$lesUiPath.enterAppUserRemove, { id: row.id }).then(result => {
          if (result.code == 0) {
            this.getBoardData()
            return this.$message.success('删除成功')
          }
        })
      })
    },
    //禁用按钮
    handleStop (row) {
      row.isEnable = 0
      this.setEnableFunc({ isEnable: row.isEnable, id: row.id })

    },
    //启用按钮
    handleStart (row) {
      row.isEnable = 1
      this.setEnableFunc({ isEnable: row.isEnable, id: row.id })
    },
    // 修改禁用方法
    setEnableFunc (obj) {
      this.$api.post(this.$lesUiPath.enterAppUserEdit, obj).then(result => {
        if (result.code == 0) {
          this.getBoardData()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.application-setting {
  .application-part {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    .apply-title-box {
      overflow: hidden;
      padding-bottom: 10px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.05);
      .apply-title {
        float: left;
        & > img {
          width: 30px;
          vertical-align: middle;
          margin-right: 8px;
        }
        & > span {
          font-weight: bold;
          font-size: 18px;
          & > i {
            font-weight: bold;
            font-style: normal;
          }
        }
      }
      & > img {
        width: 110px;
        float: right;
      }
    }
    .apply-info {
      margin-top: 16px;
      & > div {
        line-height: 30px;
        & > p {
          width: 100px;
          display: inline-block;
          margin-right: 16px;
          text-align: right;
        }
      }
    }
  }
  // .apply-info {
  //   border: 1px solid black;
  //   padding: 10px 20px;
  //   box-sizing: border-box;
  //   margin-bottom: 10px;
  //   .apply-title {
  //     overflow: hidden;
  //     padding: 10px 0;
  //     & > img {
  //       width: 110px;
  //       vertical-align: middle;
  //     }
  //     & > span,
  //     i {
  //       font-weight: bold;
  //       font-size: 18px;
  //       font-style: italic;
  //       i {
  //         margin: 0 5px;
  //       }
  //     }
  //   }
  //   .start-date,
  //   .expiration-date {
  //     line-height: 20px;
  //     & > span {
  //       margin-left: 10px;
  //     }
  //   }
  //   .my-apply-btns {
  //     margin-top: 40px;
  //     text-align: right;
  //   }
  // }
  .add-user-box {
    border-radius: 8px;
    background-color: #fff;
    margin-top: 8px;
    padding: 16px;
    padding-bottom: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    & > h3 {
      padding-bottom: 12px;
      color: #4a90e2;
      border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    }
    .add-user-btn {
      margin: 16px;
    }
  }
}
</style>
