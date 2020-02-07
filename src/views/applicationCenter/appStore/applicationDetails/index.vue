<template>
  <div class="apply-details">
    <div class="apply-introduction">
      <div class="apply-title">
        <img src="../../../../assets/logo.png" alt="" />
        <span>{{ params.title }}</span>
      </div>
      <div class="app-describe">
        <p>
          基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍
        </p>
      </div>
      <el-button @click="handleApply" type="primary" class="apply-btn"
        >立即申请
      </el-button>
    </div>
    <!-- tab切换 -->
    <div class="tab">
      <el-tabs v-model="activeName">
        <el-tab-pane label="产品详情" name="first">产品详情</el-tab-pane>
        <el-tab-pane label="使用说明" name="second">使用说明</el-tab-pane>
        <el-tab-pane label="成功案例" name="third">成功案例</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "apply-details",
  data() {
    return {
      params: this.$route.query.params,
      activeName: "first"
    }
  },
  methods: {
    handleApply() {
      this.$router.push({ path: "/application/appStore/apply" })
    }
  }
}
</script>

<style lang="scss" scoped>
.apply-details {
  text-align: left;
  padding: 10px 20px;
  .apply-introduction {
    margin-bottom: 20px;
    .apply-title {
      overflow: hidden;
      height: 50px;
      & > img {
        width: 120px;
        margin-right: 20px;
        vertical-align: middle;
      }
      & > span {
        font-size: 26px;
        font-weight: bold;
        font-style: italic;
      }
    }
    .app-describe {
      text-align: left;
      margin-bottom: 20px;
      & > p {
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
