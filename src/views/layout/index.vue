<template>
  <div class="layout margin-lr-xs">
    <div style="overflow:hidden" class="second-nav">
      <Breadcrumb style="float:left;margin-left: 20px;width:100%" />
      <div class="companyInfo padding-top-xs">
        <div class="name">
          <div class="font20">{{ enterName  ||  '--' }}</div>
          <div class="fontsize">{{ xid || '--'}}</div>
        </div>
        <div class="infoPosition">
          <div class="borderDiv">
            <div class="fontsize">当前应用</div>
            <div class="numberSize">{{ appNum || '0' }}</div>
          </div>
          <div class="border flex align-center">
            <span></span>
            <div class="padding-lr">
              <div class="fontsize">企业用户数</div>
              <div class="numberSize flex align-center justify-center ">{{ count || '0' }}
                <i @click="handleJump" class="countImg flex align-center">
                  <img src="@/assets/img/userCount.png" alt="">
                </i>
                </div>
            </div>
            <span></span>
          </div>
          <div class="borderDiv">
            <div class="fontsize">累计访问</div>
            <div class="numberSize">{{ visitCount || '0' }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {
    Breadcrumb: reslove =>
      require(["@/components/Breadcrumb/index.vue"], reslove)
  },
  data() {
    return {
      enterName:'',
      xid:'',
      appNum:'',
      count:'',
      visitCount:'',
    }
  },
  mounted(){
    this.$nextTick(() => {
       this.getData();
    })
  },
  computed: {
    // 判断路由即将跳转的页面，从而不显示路由导航
    // handleJudgePath() {
    //   let paths = [
    //     "/login",
    //     "/forbidden",
    //     "/findPassword",
    //     "/register",
    //     "/register/firstStep",
    //     "/register/secondStep",
    //     "/register/thirdStep",
    //     "/register/fourthStep",
    //     "/register/lastStep"
    //   ]
    //   let routePath = this.$route.path
    //   if (paths.indexOf(routePath) != -1) {
    //     return false
    //   }
    //   return true
    // }
  },
  methods:{
    getData(){
      this.enterName = localStorage.getItem('enterName')
      this.xid = localStorage.getItem('xid')
      this.appNum = localStorage.getItem('appNum')
      this.count = localStorage.getItem('count')
      this.visitCount = localStorage.getItem('visitCount')
    },
    handleJump(){
      this.$router.push({
        path:'/enterprise/userCenter/userManagement'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.layout{
  // margin-left: 200px;
}
.second-nav {
  padding: 20px 0 10px 0;
  background-color: #ffffff;
  margin-top: 10px;
  margin-bottom: 10px;
  & > div {
    vertical-align: middle;
  }
}
.companyInfo{
  display: flex;
  width: 100%;
  position: relative;
  .name{
    margin-left: 20px;
    text-align: left;
    div{
      margin: 10px 0;
    }
  }
  .fontsize{
    font-size: 14px;
    color: #00000073;
  }
  .border{
    padding: 10px;
    margin: 0 10px;
    text-align: right;
    span{
      width: 1px;
      height: 40px;
      background: #e9e9e9;
      display: inline-block;
    }
  }
  .numberSize{
    font-size: 30px;
    font-weight: 500;
    padding-top: 8px;
    .countImg{
      img{
        vertical-align: middle;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }
  .borderDiv{
    padding: 10px;
    text-align: right;
  }
  .infoPosition{
    display: flex;
    position: absolute;
    right: 20px;
  }
}
</style>
