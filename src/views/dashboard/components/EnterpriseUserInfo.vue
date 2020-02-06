<template>
  <!-- 企业用户信息 -->
  <div class="enterprise-user-info">
    <fieldset>
      <legend>企业用户信息</legend>
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
      <div class="edit-btn">
        <el-button type="primary" plain icon="el-icon-edit" size="small"
          >修改
        </el-button>
      </div>
    </fieldset>
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
  methods: {},
  components: { Chart }
}
</script>

<style lang="scss" scoped>
.enterprise-user-info {
  & > fieldset {
    & > div:not(.edit-btn) {
      float: left;
    }
    .user-num {
      width: 240px;
      height: 100px;
      padding: 25px;
      border: 1px solid #e4e8f1;
      box-sizing: border-box;
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
      // width: 500px;
    }
  }
}
</style>
