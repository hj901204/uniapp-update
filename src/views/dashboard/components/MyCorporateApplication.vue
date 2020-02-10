<template>
  <!-- 我的企业应用 -->
  <div class="my-corporate-application">
    <div class="my-corporate-title">
      <h3>我的企业应用</h3>
      <div class="edit-btn">
        <el-button type="primary" size="small" @click="handleToJump"
          >修 改
        </el-button>
      </div>
    </div>
    <div class="apply-box">
      <ul>
        <li><span>SUPPLY</span>-<span>SRM</span></li>
        <li><span>SUPPLY</span>-<span>MES</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-corporate-application",
  data() {
    return {}
  },
  methods: {
    handleToJump() {
      this.$router.push({ path: "/application/enterpriseApplications" })
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
      & > li {
        float: left;
        background-color: #31425b;
        width: 240px;
        line-height: 48px;
        text-align: center;
        border-radius: 8px;
        color: #fff;
        margin-right: 16px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
}
</style>
