<template>
  <div class="linkSupplier">
    <div v-if="main" class="first">
      <div class="linkfont">请输入采购商的邀请码</div>
      <el-input :class="invalidCode ? 'red' : ''" size="small" v-model="invCode" placeholder="请输入企业邀请码" clearable></el-input>
      <div v-if="invalidCode" class="linkerror">{{ message }}</div>
      <div class="btns">
        <el-button size="small" type="primary" @click="handleCode">提交邀请码</el-button>
        <el-button size="small" @click="handleback">返回应用列表</el-button>
      </div>
    </div>
    <div v-else>
      <div class="successInfo">您的申请已提交，请等待企业审核通过后，关联采购关系完成。</div>
      <div style="margin-bottom:20px">关联企业名称：{{ name }}，该公司平均审核时间为：{{ time }}</div>
      <div class="small">推荐您关注Supply微信公众号，可以随时接收关联企业反馈。</div>
      <div class="small">您也可以进入SRM-供应商中的 我的企业/我的客户 查看审核进度</div>
      <div>
        <img src="@/assets/img/QR-code.jpg" alt="">
      </div>
      <div>
        <el-button size="small" @click="handleback">返回应用列表</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "linkSupplier",
  components: {
  },
  mounted () {
    //this.getBoardData()
  },
  data () {
    return {
      main:true,
      invalidCode:false,
      invCode:'',
      name:'示例',
      time:'20分钟',
      message:''
    }
  },
  methods: {
    handleCode(){
      this.$api.post(this.$lesUiPath.supLinkEnter, { invCode: this.invCode }).then(result => {
        if (result.code == 0) {
          if(result.data.code == 0){
            this.main = false
            this.name = result.data.data
          }else{
            this.message = result.data.msg
            this.invalidCode = true
          }
        }
      })
    },
    handleback(){
      this.$router.push({
        path: "/application/enterpriseApplications",
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.linkSupplier {
  text-align: center;
  height: 550px;
  background-color: #fff;
  .first{
    width: 200px;
    margin: auto;
    .linkfont{
      padding-top: 60px;
      text-align: left;
      padding-bottom: 20px;
    }
    .linkerror{
      font-size: 12px;
      color: red;
      text-align: left;
    }
    .red{
      .el-input__inner{
        border-color: red;
      }
    }
    .btns{
      width: 200px;
      margin-top: 20px;
      button{
        width: 100%;
        margin:5px 0 ;
      }
    }
  }
  .successInfo{
    padding-top: 40px;
    padding-bottom: 10px;
  }
  .small{
    font-size: 12px;
  }
}
</style>
