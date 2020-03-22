<template>
  <!-- 我的企业信息 -->
  <div class="my-corporate-info">
    <div class="my-corporate-title">
      <h3>我的企业信息</h3>
      <div class="edit-btn">
        <el-button type="primary"
                   size="small"
                   @click="handleToJump"
                   v-if="type==1">修 改
        </el-button>
      </div>
    </div>
    <div class="detail-info">
      <h4>SupplyX ID:<span class="corporate-id">{{myEnterpriseData.xid}}</span></h4>
      <p>{{myEnterpriseData.enterName}}({{myEnterpriseData.enterNameEn}})</p>
      <p>{{myEnterpriseData.enterAddress}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-corporate-info",
  data () {
    return {
      myEnterpriseData: {},
      type: this.$store.getters.type
    }
  },
  mounted () {
    this.getMyEnterpriseData()
  },
  methods: {
    handleToJump () {
      this.$router.push({ path: "/enterprise/enterpriseInfo/basicInfo" })
    },
    //我的企业信息查询
    getMyEnterpriseData () {
      this.$api.post(this.$lesUiPath.enterpriseFindEnt, {}).then(result => {
        if (result.code == 0) {
          // console.log(result.data)
          this.myEnterpriseData = result.data
        }
      })

    },

  }
}
</script>

<style lang="scss" scoped>
.my-corporate-info {
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
  .detail-info {
    margin-top: 16px;
    & > h4,
    .corporate-id {
      font-weight: bold;
    }
    & > h4 {
      margin-bottom: 8px;
    }
    .corporate-id {
      margin-left: 20px;
    }
    & > p {
      line-height: 24px;
      font-size: 14px;
    }
  }
}
</style>
