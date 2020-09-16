<template>
    <div class="home">
        <div>
            <div style="display:flex">
                <!-- 我的企业信息 -->
                <MyCorporateInfoCharts v-if="update" :billAvgCostList="billAvgCostList" :enterName="enterName"
                  :countAppUseAnalyseList="countAppUseAnalyseList"  style="width:50%;margin:10px"/>
                <!-- 我的企业应用 -->
                <MyCorporateApplication :list="list" :code="code" :cusSupStatistic="cusSupStatistic"
                                        style="width:50%;margin:10px"/>
            </div>
            <!-- 企业用户信息 -->
            <EnterpriseUserInfo :countNearUserLoginList="countNearUserLoginList" style="margin:10px"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        list: [],
        code: '',
        enterName: '',
        cusSupStatistic: {},
        billAvgCostList: [],
        update: true,
        countNearUserLoginList:[],//七日排行
        countAppUseAnalyseList:[]//应用使用分析
      }
    },
    components: {
      MyCorporateInfoCharts: resolve =>
        require(['./components/MyCorporateInfoCharts'], resolve),
      MyCorporateApplication: resolve =>
        require(['./components/MyCorporateApplication'], resolve),
      EnterpriseUserInfo: resolve =>
        require(['./components/EnterpriseUserInfo'], resolve)
    },
    mounted() {
      this.getMyApplication()
    },
    methods: {
      getMyApplication() {
        this.update = false
        let data = {
          acpath: '/system/login'
        }
        this.$api.post(this.$lesUiPath.enterAppFindList, data).then(result => {
          if (result.code == 0) {
            this.list = result.data.enterApps
            this.code = result.data.enterprise.invCode
            this.enterName = result.data.enterprise.enterName
            this.cusSupStatistic = result.data.cusSupStatisticList[0] || {}
            this.billAvgCostList = result.data.billAvgCostList
            this.countNearUserLoginList = result.data.countNearUserLoginList
            this.countAppUseAnalyseList = result.data.countAppUseAnalyseList
            if (result.data.appCount != 0) {
              result.data.enterApps.map(x => {
                if (x.appId == 'E5CD4719') {
                  localStorage.setItem('enterpriseId', x.tsAppId)
                  localStorage.setItem('enterpriseAppId', x.appId)
                }
                if (x.appId == 'E5CD4720') {
                  localStorage.setItem('supplierId', x.tsAppId)
                  localStorage.setItem('supplierAppId', x.appId)
                }
              })
            }
            this.$nextTick(() => {
              this.update = true
            })
          }
        })
      }
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
