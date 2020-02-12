<template>
  <div class="apply-details">
    <div class="apply-introduction">
      <div class="apply-title">
        <!-- <span>SUPPLY</span>-<span>{{ params.title }}</span> -->
        <span><i>SupplyX</i>{{ params.title }}</span>
        <div class="apply-btns">
          <el-button 
            v-if="applyNow"
            size="small" 
            type="primary"  
            @click="handleApply"
          >立即申请
          </el-button>
          <el-button 
            v-if="applied"
            disabled
            size="small" 
            type="primary"  
          >已申请
          </el-button>
          <el-button 
            v-if="used"
            disabled
            size="small" 
            type="primary"  
          >已使用
          </el-button>
          <el-button 
            size="small" 
            @click="handleJumpAppStore"
          >返回商城
          </el-button>
        </div>
      </div>
      <div class="app-describe">
        <p>
          基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍
        </p>
      </div>
    </div>
    <!-- tab切换 -->
    <div class="tab">
      <el-tabs v-model="activeName">
        <el-tab-pane label="产品详情" name="first">产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情产品详情</el-tab-pane>
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
      activeName: "first",
      applyNow: 'true',
      applied: 'true',
      used: 'true'
    }
  },
  methods: {
    handleApply() {
      this.$router.push({ path: "/application/appStore/apply" })
    },
    handleJumpAppStore() {
      this.$router.push({ path: "/application/appStore" })
    }
  }
}
</script>

<style lang="scss" scoped>
.apply-details {
  text-align: left;
  height: calc(100vh - 240px);
  .apply-introduction {
    margin-bottom: 20px;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(226, 226, 226);
    border-radius: 8px;
    padding: 20px;
    .apply-title {
      overflow: hidden;
      height: 50px;
      border-bottom: 1px solid rgb(226, 226, 226);
      & > span,i {
        font-weight: bold;
        font-size: 18px;
        font-style: normal;
        line-height: 32px;
        i {
          margin: 0 5px;
        }
      }
      .apply-btns {
        float: right;
      }
    }
    .app-describe {
      text-align: left;
      padding: 24px 0;
      margin-bottom: 20px;
      & > p {
        font-family:PingFangSC-Medium;
        line-height: 1.5;
        font-size:14px;
        color:#4a4a4a;
        text-align:left;
      }
    }
  }
  .tab {
    height: calc(100% - 52px);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(226, 226, 226);
    border-radius: 8px;
    padding: 20px;
    font-family:PingFangSC-Medium;
    font-size:14px;
    line-height: 1.5;
    color:#4a4a4a;
    text-align:left;
  }
}
</style>
