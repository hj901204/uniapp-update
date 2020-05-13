<template>
  <!-- 我的企业应用 -->
  <div class="my-corporate-application">
    <div class="my-corporate-title">
      <h3>我的企业应用</h3>
    </div>
    <div class="apply-box">
      <ul>
        <li v-for="item in list"
            :key="item.id">
          <div class="apply-title-box">
            <div class="apply-title">
              {{ item.appName }}
            </div>
          </div>
          <div class="start-date">
            <span v-if="item.appId == 'E5CD4720'">我的采购商:<span>{{ 0 }}</span></span>
            <span v-if="item.appId == 'E5CD4719'">我的供应商:<span>{{ 0 }}</span></span>
          </div>
          <div class="expiration-date">
            <span v-if="item.appId == 'E5CD4720'">累计订单:<span>{{ 0 }}</span></span>
            <span v-if="item.appId == 'E5CD4719'">累计采购单:<span>{{ 0 }}</span></span>
          </div>
          <div class="my-apply-btns">
            <el-button @click="handleToCode(item)"
                       v-if="item.appId == 'E5CD4720'"
                       size="small"
                       type="text">关联采购商
            </el-button>
            <el-button @click="handleToCode(item)"
                       v-if="item.appId == 'E5CD4719'"
                       size="small"
                       type="text">邀请供应商
            </el-button>
            <el-button @click="handleToApply(item)"
                       v-if="item.appId == 'E5CD4719' || item.appId == 'E5CD4720'"
                       size="small"
                       type="text">进入应用
            </el-button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-corporate-application",
  data () {
    return {
      type: this.$store.getters.type,
      list: [],
      code:''
    }
  },
  mounted () {
    //localStorage.clear();
    this.getMyApplication()
  },
  methods: {
    handleToJump () {
      this.$router.push({ path: "/application/enterpriseApplications" })
    },
    getMyApplication () {
      // let data = {
      //    page: 1, length: 1000 
      // }
      //localStorage.clear();
      let data = {
        acpath: "/system/login"
      }
      this.$api.post(this.$lesUiPath.enterAppFindList, data ).then(result => {
        if (result.code == 0) {
          this.list = result.data.enterApps
          this.code = result.data.enterprise.invCode
          // localStorage.setItem('appNum', result.data.appCount);
          // localStorage.setItem('enterName', result.data.enterprise.enterName);
          // localStorage.setItem('xid', result.data.enterprise.xid);
          // localStorage.setItem('visitCount', result.data.visitsCount);
          // localStorage.setItem('count', result.data.userCount);
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
    handleToApply (item) {
      // console.log(item)
      if (item.appId == "E5CD4719") {
        //this.$router.push('/application/enterpriseApplications')
        let token = this.$store.getters.token
        window.open(this.$lesUiPath.enterAppRun + "?appId=" + item.appId + '&token=' + token)
      }
      if (item.appId == "E5CD4720") {
        //this.$router.push('/application/enterpriseApplications')
        let token = this.$store.getters.token
        window.open(this.$lesUiPath.enterAppRun + "?appId=" + item.appId + '&token=' + token)
      }
    },
    handleToCode (item) {
      if(item.appId == "E5CD4719") {
        this.$router.push({
          path: "/application/enterpriseApplications/enterpriseCode",
          query: {
            params: this.code
          }
        })
      }
      if(item.appId == "E5CD4720") {
        this.$router.push({
          path: "/application/enterpriseApplications/linkSupplier"
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-corporate-application {
  background-color: #fff;
  overflow: hidden;
  padding: 16px;
  .my-corporate-title {
    overflow: hidden;
    border-bottom: 2px solid #f1f2f5;
    & > h3 {
      float: left;
      line-height: 40px;
      font-size: 18px;
    }
    .edit-btn {
      float: right;
    }
  }
  .apply-box {
    & > ul {
      overflow: hidden;
      padding-top: 16px;
      & > li {
        float: left;
        width: 240px;
        line-height: 48px;
        text-align: center;
        border-radius: 8px;
        //color: #000000;
        //margin-left: 16px;
        margin-bottom: 16px;
        font-size: 14px;
        cursor: pointer;
        border: 1px solid #ccc;
      }
    }
    .apply-title{
      background-color: #31425b;
      color: #fff;
    }
    .my-apply-btns{
      border-top: 1px solid #ccc;
    }
  }
  .enable{
    background-color:#4a90e257 !important;
    cursor: default !important;
  }
}
</style>
