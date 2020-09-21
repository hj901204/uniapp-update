<template>
    <div class="user-management">
        <template v-if="isShowMainPage">
            <div class="search">
                <el-row class="header_Button">
                    <el-col :span="8"
                            align="left">
                        <span class="srmSchLabel">搜索：</span>
                        <el-input
                                style="width: 200px;margin-right:3px;"
                                placeholder="请输入姓名/手机号搜索"
                                v-model.trim="mobilePhone"
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
                            <el-button size="small" type="primary" icon="el-icon-search" @click="handleFindList">查询
                            </el-button>
                            <el-button size="small" icon="el-icon-refresh" @click="handleClear">重置</el-button>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="add-btn">
                <el-button type="primary"
                           size="small"
                           @click="handleAdd"
                           v-if="type==1">使用微信添加用户
                </el-button>
                <el-button
                        size="small"
                        @click="handleFresh">刷新
                </el-button>
            </div>
            <Table :tableHead="tableHead"
                   :tableData="tableData"
                   :isShowOperation="false"
                   :currentPage='currentPage'
                   :total='total'
                   :currentSize='currentSize'
                   @sizeChange='sizeChange'
                   @handleEdit="handleEdit"
                   @handleDelete='handleDelete'
                   @currentChange='currentChange'/>
        </template>
        <template v-else>
            <UserForm @handleBack="handleBack"
                      :userForm="userForm"
                      @handleSave='handleSave'
                      :isAdd="isAdd"
                      :isShowResetBtn="isShowResetBtn"/>
        </template>
        <MiniCode ref="miniCode"></MiniCode>
    </div>
</template>

<script>
  export default {
    name: 'user-management',
    components: {
      Table: resolve => require(['@/components/Table'], resolve),
      UserForm: resolve => require(['../components/UserForm'], resolve),
      MiniCode: resolve => require(['@/components/MiniCode'], resolve)
    },
    data() {
      return {
        isShowMainPage: true,
        isShowResetBtn: false,
        userForm: {
          name: '', mobilePhone: '', graphImage: '', code: '', password: '', departId: ''
        },
        tableHead: [
          {
            fieldNo: 'name',
            fieldName: '姓名',
            id: 1
          },
          // {
          //   fieldNo: "email",
          //   fieldName: "Email",
          //   id: 2
          // },
          {
            fieldNo: 'mobilePhone',
            fieldName: '手机号码',
            id: 3
          },
          // {
          //   fieldNo: "departCode",
          //   fieldName: "部门编码",
          //   id: 4
          // },
          {
            fieldNo: 'departName',
            fieldName: '部门',
            id: 5
          },
          {
            fieldNo: 'isEnable',
            fieldName: '允许访问系统',
            id: 6
          },
          {
            fieldNo: 'crtTime',
            fieldName: '创建时间',
            id: 7
          }
        ],
        tableData: [],
        // 分页
        currentPage: 1,
        currentSize: 10,
        total: 0,
        type: this.$store.getters.type,
        mobilePhone: '',
        searchInfo: {
          page: 1,
          length: 10
        },
        isAdd: true
      }
    },
    mounted() {
      this.getUserData(this.searchInfo)
    },
    methods: {
      // 分页
      sizeChange(val) {
        this.currentSize = val
        this.searchInfo.page = val
        this.getUserData(this.searchInfo)
      },
      currentChange(val) {
        this.currentPage = val
        this.searchInfo.length = val
        this.getUserData(this.searchInfo)
      },
      //添加用户
      handleAdd() {
        this.$refs.miniCode.open()
        // this.isShowMainPage = false
        // this.isShowResetBtn = false // 是否显示重置按钮
        // this.userForm = {
        //   isEnable: true,
        //   name: '',
        //   mobilePhone: '',
        //   graphImage: '',
        //   graphCode: '',
        //   password: '',
        //   departId: ''
        // }
        // this.isAdd = true
      },
      //返回
      handleBack() {
        this.isShowMainPage = true
      },
      // 点击修改按钮
      handleEdit(row) {
        this.userForm = {}
        this.isShowResetBtn = true //是否显示重置按钮
        this.userForm = Object.assign({}, row)
        this.userForm.isEnable = row.isEnable == '否' ? false : true
        this.isAdd = false
        this.isShowMainPage = false
      },
      //点击保存按钮
      handleSave() {
        this.userForm.isEnable = this.userForm.isEnable == true ? '1' : '0'
        this.userForm.username = this.userForm.email
        const status = this.userForm.id ? 'edit' : 'add'
        if (status == 'add') {
          this.addUserFunc(this.userForm)
        } else {
          this.updateUserFunc(this.userForm)
        }
      },
      //新建用户方法
      addUserFunc(obj) {
        this.$api.post(this.$lesUiPath.enteruserAdd, obj).then(result => {
          if (result.code == 0) {
            this.isShowMainPage = true
            this.getUserData(this.searchInfo)
            return this.$message.success('添加成功')
          }
        })
      },
      //修改用户方法
      updateUserFunc(obj) {
        for (let i in obj) {
          if (obj[i] == '') {
            delete obj[i]
          }
        }
        this.$api.post(this.$lesUiPath.enteruserUpdate, obj).then(result => {
          if (result.code == 0) {
            this.isShowMainPage = true
            this.getUserData(this.searchInfo)
            return this.$message.success('修改成功')
          }
        })
      },
      //获取用户列表
      getUserData(data, sign) {
        //const queryInfo = { page: page, length: length, isSuperAdmin:'0' };
        data.isSuperAdmin = '0'
        this.$api.post(this.$lesUiPath.enteruserFindUserList, data).then(result => {
          if (result.code == 0) {
            this.tableData = result.data
            this.tableData.map(item => {
              item.isEnable = item.isEnable == 1 ? '是' : '否'
            })
            this.total = this.tableData.length
            if (sign === 1) {
              this.$message.success('操作成功')
            }
          }
        })
      },
      handleFilter() {
        this.searchInfo.mobilePhone = this.mobilePhone
        this.getUserData(this.searchInfo)
      },
      handleFindList() {
        this.searchInfo.mobilePhone = this.mobilePhone
        this.getUserData(this.searchInfo)
      },
      handleClear() {
        this.mobilePhone = ''
        this.searchInfo.mobilePhone = ''
        this.getUserData(this.searchInfo, 1)
      },
      handleFresh() {
        this.getUserData(this.searchInfo, 1)
      },
      //删除
      handleDelete(row) {
        this.$confirm('此操作将永久删除, 是否继续?', '提示', this.$global.confirmConfig).then(() => {
          this.$api.post(this.$lesUiPath.enteruserRemove, { id: row.id }).then(result => {
            if (result.code == 0) {
              this.getUserData(this.searchInfo)
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
        height: calc(100vh - 100px);
        text-align: left;
        overflow: hidden;

        .add-btn {
            padding: 16px 24px;
        }

        .search {
            margin-top: 10px;
            margin-left: 10px;

            .srmSchLabel {
                font-size: 14px;
            }
        }
    }
</style>
