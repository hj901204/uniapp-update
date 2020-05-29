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
                    :loading="loading"
                    @click="handleStartApp">开始使用</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "last-step",
  data() {
    return {
      loading:false
    }
  },
  methods: {
    handleStartApp(){
      let loginInfo = {
        username:this.$route.query.data.enterAccount,
        password:this.$route.query.data.password,
      }
      this.loading = true
      this.$store
        .dispatch("user/LoginByUsername", loginInfo)
        .then(() => {
          let data = {
            acpath: "/system/login"
          }
          localStorage.clear();
          this.$api.post(this.$lesUiPath.enterAppFindList, data ).then(result => {
            if (result.code == 0) {
              localStorage.setItem('appNum', result.data.statisticList[0] ? result.data.statisticList[0].appNum : '');
              localStorage.setItem('enterName', result.data.enterprise.enterName);
              localStorage.setItem('xid', result.data.enterprise.xid);
              localStorage.setItem('visitCount', result.data.statisticList[0] ? result.data.statisticList[0].visits : '');
              localStorage.setItem('count', result.data.statisticList[0] ? result.data.statisticList[0].userNum : '');
              this.$router.push({
                path: "/"
              })
            }
          })
        })
        .catch(e => {
          this.loading = false
        })
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
