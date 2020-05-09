<template>
  <div class="last-step">
    <div class="content">
      <div ><img class="lastImg" src="@/assets/img/wancheng.png" alt=""></div>
      <div class="font">注册完成</div>
      <div class="fontType">欢迎注册SupplyX 供应链协作平台</div>
      <div class="fontType">推荐关注微信公众号，可在微信中接收平台的通知消息。</div>
      <div class="qrcodeImg">
       <img src="@/assets/img/QR-code.jpg" alt="">
      </div>
      <div class="return">
         <el-button type="primary"
                    size="small"
                    style="width:250px"
                    @click="handleBack">开始使用</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "last-step",
  data() {
    return {}
  },
  methods: {
    handleBack(){
      this.$router.push({path:'/login'})
    }
  }
}
</script>

<style lang="scss" scoped>
.last-step {
  width: 70%;
  margin: auto;
  height: 100%;
  .content{
    margin:15% auto;
  }
  .lastImg{
    width: 50px;
    height: 50px;
    color: #ffffff;
  }
  .font{
    margin: 10px auto;
    font-size: 18px;
    font-weight: 500;
  }
  .fontType{
    font-size: 14px;
    margin: 5px;
  }
  .qrcodeImg{
      margin: 15px auto;
      img{
        width: 250px;
        height: 250px;
      }
  }
}
</style>
