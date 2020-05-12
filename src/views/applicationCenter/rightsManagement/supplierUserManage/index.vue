<template>
  <div class="supplierManage">
    <div class="title">
      请选择开通SRM-供应商应用的用户
    </div>
    <div class="transfer">
      <el-transfer v-model="transferValue" 
                    :data="transferData"
                    :titles="['可选用户','已选用户']"></el-transfer>
      <div class="message">
        <!-- <span v-if="showMessage" style="color:red">至少选择一个供应商</span> -->
        <span>选中用户后开通应用权限</span>
      </div>
    </div>
    <div class="manage-btn">
      <el-button size="small" type="primary" @click="handleSubmit">提交</el-button>
      <el-button size="small" @click="handleCancel">取消</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "supplierManage",
  data() {
    return {
      transferValue:[],
      transferData:[],
    }
  },
  mounted () {
    this.getUserData()
  },
  methods: {
    // 返回上一页
    handleBack() {
      this.$router.go(-1)
    },
        //添加用户查询列表
    getUserData (page = 1, length = 10000, id = localStorage.getItem('supplierId')) {
      const queryInfo = { page: page, length: length, id: id };
      this.$api.post(this.$lesUiPath.enterAppUserAppUser, queryInfo).then(result => {
        if (result.code == 0) {
          result.data.map(item => {
            item.key = item.id
            item.label = item.username
          })
          this.transferData = result.data
        }
      })
    },
    handleSubmit(){
      if (this.transferValue.length == 0) return this.$message.warning('请选择用户数据')
      this.selectinfo = {
        tsUserId: this.selectObj.id,
        //isEnable: this.selectObj.isEnable,
        tsEnterAppId: localStorage.getItem('supplierId')
      }
      this.$api.post(this.$lesUiPath.enterAppUserAdd, this.selectinfo).then(result => {
        if (result.code == 0) {
          this.$router.push({ path: "/application/rightsManagement" })
        }
      })
    },
    handleCancel(){
      this.$confirm('将丢失页面未提交信息, 是否继续?', '提示', this.$global.confirmConfig).then(() => {
        this.$router.push({ path: "/application/rightsManagement" })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.supplierManage {
  background-color: rgb(255, 255, 255);
  height: 500px;
  .title{
    margin-left: 5%;
    width: 60%;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  // .transfer{
  //   width: 60%;
  // }
  .message{
    margin-top: 10px;
    margin-left: 8%;
    font-size: 12px;
    text-align: left;
  }
  .manage-btn{
    text-align: left;
    margin-top: 20px;
    margin-left: 5%;
    margin-bottom: 50px;
  }
}
</style>
