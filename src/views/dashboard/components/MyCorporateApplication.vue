<template>
  <!-- 我的企业应用 -->
  <div class="my-corporate-application">
    <div class="my-corporate-title">
      <h3>我的企业应用</h3>
      <!-- <div class="edit-btn">
        <el-button type="primary"
                   size="small"
                   @click="handleToJump"
                   v-if="type==1">修 改
        </el-button>
      </div> -->
    </div>
    <div class="apply-box">
      <ul>
        <li v-for="item in list"
            :key="item.id">
          <div class="apply-title-box">
            <div class="apply-title">
              {{type == 1 ? item.appName + '-供应商' : type == 2 ? item.appName + '-采购商' :  item.appName}}
            </div>
          </div>
          <div class="start-date">
            {{ type == 1 ? "我的客户" : "我的供应商"}}:<span>{{item.initiateTime}}</span>
          </div>
          <div class="expiration-date">累计采购单:<span>{{item.expireTime}}</span></div>
          <div class="my-apply-btns">
            <el-button @click="handleApplyStatus(item)"
                       size="small"
                       type="text">邀请供应商
            </el-button>
            <el-button @click="handleToApply(item)"
                       size="small"
                       type="text"
                       v-if="type==1">进入应用
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
      list: []
    }
  },
  mounted () {
    this.getMyApplication()
  },
  methods: {
    handleToJump () {
      this.$router.push({ path: "/application/enterpriseApplications" })
    },
    getMyApplication () {
      this.$api.post(this.$lesUiPath.enterAppFindList, { page: 1, length: 1000 }).then(result => {
        if (result.code == 0) {
          this.list = result.data
          localStorage.setItem('appNum', result.data.length);
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
