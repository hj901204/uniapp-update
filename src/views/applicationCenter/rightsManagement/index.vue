<template>
  <div class="rightsManagement">
    <el-tabs v-if="$route.path == '/application/rightsManagement'"  v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="SRM-供应商用户" name="first">
      <div class="add-user-box">
        <div class="search">
        <el-row class="header_Button">
        <el-col :span="8"
                align="left">
          <span class="srmSchLabel">搜索：</span>
          <el-input 
                    style="width: 200px;margin-right:3px;"
                    placeholder="请输入姓名/手机号搜索"
                    v-model.trim="appName"
                    clearable
                    size="small"
                    @clear="handleFilter"
                    @keyup.enter.native="handleFilter">
            <i slot="prefix"
              class="el-input__icon el-icon-search"
              @click="handleFilter"></i>
          </el-input>
        </el-col>
        <el-col :span="8">
          <div>
            <el-button size="small" type="primary" icon="el-icon-search" @click="handleFindList">查询</el-button>
            <el-button size="small" icon="el-icon-refresh"  @click="handleClear">重置</el-button>
          </div>
        </el-col>
      </el-row>
      </div>
      <el-button size="small"
                 type="primary"
                 class="add-user-btn"
                 @click="handleAddUser()">用户管理</el-button>
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
    </el-tab-pane>
    <el-tab-pane label="SRM-采购商用户" name="second">
      <div class="add-user-box">
        <div class="search">
        <el-row class="header_Button">
        <el-col :span="8"
                align="left">
          <span class="srmSchLabel">搜索：</span>
          <el-input 
                    style="width: 200px;margin-right:3px;"
                    placeholder="请输入姓名/手机号搜索"
                    v-model.trim="appName"
                    clearable
                    size="small"
                    @clear="handleFilter"
                    @keyup.enter.native="handleFilter">
            <i slot="prefix"
              class="el-input__icon el-icon-search"
              @click="handleFilter"></i>
          </el-input>
        </el-col>
        <el-col :span="8">
          <div>
            <el-button size="small" type="primary" icon="el-icon-search" @click="handleFindList">查询</el-button>
            <el-button size="small" icon="el-icon-refresh"  @click="handleClear">重置</el-button>
          </div>
        </el-col>
      </el-row>
      </div>
      <el-button size="small"
                 type="primary"
                 class="add-user-btn"
                 @click="handleAddUser">用户管理</el-button>
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
    </el-tab-pane>
  </el-tabs>
    <!-- 添加用户 -->
    
    <!-- 添加用户弹框 -->
    <!-- <el-dialog title="添加用户"
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
             :isShowSelection='false'
             :isShowSort='false'
             :isShowRadio='true'
             @getCurrentRow='getCurrentRow' />
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false"
                   size="small">取 消</el-button>
        <el-button type="primary"
                   @click="handleSaveAdd"
                   size="small">确 定</el-button>
      </span>
    </el-dialog> -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "rightsManagement",
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
      activeName:'first',
      //params: JSON.parse(this.$route.query.params),
      tableHead: [
        {
          fieldNo: "userName",
          fieldName: "用户姓名",
          id: 1,
        },
        {
          fieldNo: "mobilePhone",
          fieldName: "手机号码",
          id: 2,
        },
        {
          fieldNo: "crtTime",
          fieldName: "创建时间",
          id: 3
        },
        // {
        //   fieldNo: "departCode",
        //   fieldName: "部门编码",
        //   id: 4
        // },
      ],
      tableData: [],
      userTableData: [],
      currentSize: 10,
      currentPage: 1,
      userCurrentPage: 1,
      userCurrentSize: 10,
      total: 0,
      appName:'',
      searchInfo: {
        page:1,
        length:10
      }
    }
  },
  methods: {
    // 表格分页 
    sizeChange (val) {
      this.currentSize = val;
      this.searchInfo.length = val
      this.getBoardData(this.searchInfo)
    },
    currentChange (val) {
      this.currentPage = val;
      this.searchInfo.page = val
      this.getBoardData(this.searchInfo)
    },
    // 用户表格分页
    userSizeChange (val) {
      this.userCurrentSize = val
      this.searchInfo.length = val
    },
    userCurrentChange (val) {
      this.userCurrentPage = val
      this.searchInfo.page = val
    },
    handleFilter(){
      this.searchInfo.appName = this.appName
      this.getBoardData(this.searchInfo)
    },
    handleFindList(){
      this.searchInfo.appName = this.appName
      this.getBoardData(this.searchInfo)
    },
    handleClear(){
      this.appName = ''
      this.searchInfo.appName = ''
      this.getBoardData(this.searchInfo);
    },
    handleFresh () {
      this.getBoardData (this.searchInfo);
    },
    //获取用户活跃排行榜
    getBoardData () {
      if(this.activeName == 'first'){
        this.searchInfo.id = localStorage.getItem('supplierId')
      }else if(this.activeName == 'second'){
        this.searchInfo.id = localStorage.getItem('enterpriseId')
      }
      this.$api.post(this.$lesUiPath.enterAppUserFindList, this.searchInfo).then(result => {
        if (result.code == 0) {
          this.tableData = result.data
          this.total = this.tableData.length
        }
      })
    },
    handleClick(tab){
      this.getBoardData();
    },

    // 添加用户按钮
    handleAddUser () {
     if(this.activeName == 'first'){
       this.$router.push({ path: "/application/rightsManagement/supplierUserManage" })
     }else if(this.activeName == 'second'){
       this.$router.push({ path: "/application/rightsManagement/enterpriseUserManage" })
     }
    },
    // 用户删除
    handleDelete (row) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', this.$global.confirmConfig).then(() => {
        let data ="id=" + row.id ;
        this.$api.post(this.$lesUiPath.enterAppUserRemove, data, {headers:{'Content-Type':'application/x-www-form-urlencoded'}}).then(result => {
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
    },
    //单选用户
    getCurrentRow (val) {
      this.selectObj = val
    }

  }
}
</script>

<style lang="scss" scoped>
.rightsManagement {
  background-color: #fff;
  padding-left: 10px;
  padding-top: 10px;
  .add-user-box {
    border-radius: 8px;
    margin-top: 8px;
    //padding: 16px;
    padding-bottom: 0;
    //border: 1px solid rgba(0, 0, 0, 0.1);
    & > h3 {
      padding-bottom: 12px;
      color: #4a90e2;
      border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    }
    .add-user-btn {
      margin: 16px;
      float: left;
    }
  }
  .search{
    margin-top: 10px;
    margin-left: 10px;
    .srmSchLabel{
      font-size: 14px;
    }
  }
}
</style>
