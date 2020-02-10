<template>
  <!-- 企业用户信息 -->
  <div class="enterprise-user-info">
    <div class="my-corporate-title">
      <h3>企业用户信息</h3>
      <div class="edit-btn">
        <el-button type="primary" size="small" @click="handleToJump"
          >修 改
        </el-button>
      </div>
    </div>
    <div class="user-num">
      <div class="icon">
        <i class="el-icon-user-solid"></i>
      </div>
      <div class="num-box">
        <h2 class="num">10</h2>
        <p class="num-description">企业用户人数</p>
      </div>
    </div>
    <!-- 图表 -->
    <div class="chart-box">
      <Chart />
    </div>
  </div>
</template>

<script>
import Chart from "./Chart"
export default {
  name: "enterprise-user-info",
  data() {
    return {}
  },
  mounted() {},
  methods: {
    handleToJump() {
      this.$router.push({ path: "/enterprise/userCenter/userManagement" })
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
    // width: 500px;
  }
  // }
}
</style>
