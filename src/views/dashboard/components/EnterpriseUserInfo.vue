<template>
  <!-- 企业用户信息 -->
  <div class="enterprise-user-info">
    <div class="my-corporate-title">
      <h3>企业用户信息</h3>
      <!-- <div class="edit-btn">
        <el-button type="primary"
                   size="small"
                   @click="handleToJump"
                   v-if="type==1">修 改
        </el-button>
      </div> -->
    </div>
    <!-- <div class="user-num">
      <div class="icon">
        <i class="el-icon-user-solid"></i>
      </div>
      <div class="num-box">
        <h2 class="num">{{this.count}}</h2>
        <p class="num-description">企业用户数</p>
      </div>
    </div> -->
      <div class="flex">
        <div class="userinfo-charts">
          <div style="font-size:14px;color:#505050;margin:10px">
            近7日企业用户登录情况
          </div>
          <div class="chart-box">
            <Chart />
          </div>
        </div>
        <div class="userinfo-top">
          <div style="font-size:14px;color:#505050;margin:10px">
            近7日登录次数排行
          </div>
          <div v-for="(list,index) in countNearUserLoginList" :key="index" class="flex justify-between margin-bottom-xs padding-lr-sm">
            <span>{{list.NAME}}</span>
            <span>{{list.daycount}}</span>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Chart from "./Chart"
export default {
  name: "enterprise-user-info",
  props:['countNearUserLoginList'],
  data () {
    return {
      count: 0,
      type: this.$store.getters.type,
    }
  },
  mounted () {
    //this.getCount()
  },
  methods: {
    handleToJump () {
      this.$router.push({ path: "/enterprise/userCenter/userManagement" })
    },
    getCount () {
      this.$api.post(this.$lesUiPath.enteruserFindCount, {}).then(result => {
        if (result.code == 0) {
          this.count = result.data
          
        }
      })
      // let obj = {
      //   acpath: "/system/login"
      // }
      // this.$api.post(this.$lesUiPath.enteruserVisit, {}).then(result => {
      //   if (result.code == 0) {
      //     this.count = result.data
      //   }
      // })
    }
  },
  components: { Chart }
}
</script>

<style lang="scss" scoped>
.enterprise-user-info {
  background-color: #fff;
  overflow: hidden;
  padding: 16px;
  .userinfo-top{
    width: 25%;
    height: 286px;
  }
  .userinfo-charts{
    flex:1;
  }
  .my-corporate-title {
    overflow: hidden;
    border-bottom: 2px solid #f1f2f5;
    margin-bottom: 16px;
    & > h3 {
      float: left;
      line-height: 40px;
      font-size: 18px;
    }
    .edit-btn {
      float: right;
    }
  }
  // & > fieldset {
  //   & > div:not(.edit-btn) {
  //     float: left;
  //   }
  .user-num {
    width: 240px;
    height: 100px;
    padding: 25px;
    border: 1px solid #e4e8f1;
    box-sizing: border-box;
    float: left;
    .icon {
      float: left;
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      font-size: 30px;
      background-color: #e5f5fd;
      color: #00a2ef;
      margin-right: 15px;
    }
    .num-box {
      float: left;
      .num {
        font-weight: bold;
        font-size: 22px;
        text-align: left;
        line-height: 30px;
      }
    }
  }
  .chart-box {
    float: left;
    width: 100%;
    // width: 500px;
  }
  // }
}
</style>
