<template>
  <div class="linkSupplier">
    <div v-if="main">
      <div>请输入采购商的邀请码</div>
      <el-input v-model="code" placeholder="请输入企业邀请码" clearable></el-input>
      <div>无效的邀请码</div>
      <div>
        <el-button type="primary" @click="handleCode">提交邀请码</el-button>
        <el-button @click="handleback">返回应用列表</el-button>
      </div>
    </div>
    <div v-else>
      <div>您的申请已提交，请等待企业审核通过后，关联采购关系完成。</div>
      <div>关联企业名称：{{ name }}，该公司平均审核时间为：{{ time }}</div>
      <div>推荐您关注Supply微信公众号，可以随时接收关联企业反馈。</div>
      <div>您也可以进入SRM-供应商中的 我的企业/我的客户 查看审核进度</div>
      <div>
        <img src="@/assets/img/QR-code.jpg" alt="">
      </div>
      <div>
        <el-button @click="handleback">返回应用列表</el-button>
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
    this.getBoardData()
  },
  data () {
    return {
      main:true,
      code:'',
      name:'示例',
      time:'20分钟'
    }
  },
  methods: {
    handleCode(){

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
  
}
</style>
