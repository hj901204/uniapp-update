<template>
  <div class="home">
    <div style="padding-left:210px;">
      <div style="display:flex">
        <!-- 我的企业信息 -->
        <MyCorporateInfo :billAvgCostList="billAvgCostList" :enterName="enterName" style="width:65%;margin:10px" />
        <!-- 我的企业应用 -->
        <MyCorporateApplication :list="list" :code="code" :cusSupStatistic="cusSupStatistic" style="width:32%;margin:10px" />
      </div>
      <!-- 企业用户信息 -->
      <EnterpriseUserInfo style="margin:10px" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      list:[],
      code:'',
      enterName:'',
      cusSupStatistic:{},
      billAvgCostList:[],
    }
  },
  components: {
    MyCorporateInfo: resolve =>
      require(["./components/MyCorporateInfo"], resolve),
    MyCorporateApplication: resolve =>
      require(["./components/MyCorporateApplication"], resolve),
    EnterpriseUserInfo: resolve =>
      require(["./components/EnterpriseUserInfo"], resolve)
  },
  mounted() {
    this.getMyApplication()
  },
  methods:{
    getMyApplication () {
      let data = {
        acpath: "/system/login"
      }
      this.$api.post(this.$lesUiPath.enterAppFindList, data ).then(result => {
        if (result.code == 0) {
          this.list = result.data.enterApps
          this.code = result.data.enterprise.invCode
          this.enterName = result.data.enterprise.enterName
          this.cusSupStatistic = result.data.cusSupStatisticList[0]
          this.billAvgCostList = result.data.billAvgCostList
          if(result.data.appCount != 0) {
            result.data.enterApps.map(x => {
              if(x.appId == 'E5CD4719'){
                localStorage.setItem('enterpriseId', x.id);
              }
              if(x.appId == 'E5CD4720'){
                localStorage.setItem('supplierId', x.id);
              }
              
            })
          }
        }
      })
    },
  }
}
</script>

<style lang="scss">
.home {
  text-align: left;
  & > div {
    margin-bottom: 16px;
    & > fieldset {
      padding: 16px;
      box-sizing: border-box;
      .edit-btn {
        float: right;
      }
    }
  }
}
</style>
