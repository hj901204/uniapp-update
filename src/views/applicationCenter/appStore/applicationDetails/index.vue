<template>
  <div class="apply-details">
    <div class="apply-introduction">
      <div class="apply-title">
        <span>{{ appDetail.appName }}</span>
        <div class="apply-btns">
          <el-button v-if="!applied && type==1 && uver != 'SUP'"
                     size="small"
                     type="primary"
                     @click="handleApply">立即申请
          </el-button>
          <el-button v-if="applied && type==1 && uver != 'SUP'"
                     disabled
                     size="small"
                     type="primary">已申请
          </el-button>
          <!-- <el-button
            v-if="true"
            disabled
            size="small"
            type="primary"
          >已使用
          </el-button> -->
          <el-button size="small"
                     @click="handleJumpAppStore">返回商城
          </el-button>
        </div>
      </div>
      <div class="app-describe">
        <p>
          {{ appDetail.appIntroduce }}
        </p>
      </div>
    </div>
    <!-- tab切换 -->
    <div class="tab">
      <el-tabs v-model="activeName">
        <el-tab-pane label="产品详情" name="first">
			<div v-html="appDetail.appDetails"></div>
		</el-tab-pane>
        <el-tab-pane label="使用说明" name="second">
			<div v-html="appDetail.appExplain"></div>
		</el-tab-pane>
        <el-tab-pane label="成功案例" name="third">
			<div v-html="appDetail.appCase"></div>
		</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    name: "apply-details",
    data () {
      return {
        params: this.$route.query.params,
        appDetail: {},
        activeName: "first",
        applied: '',
        type: this.$store.getters.type,
		uver:"",
        // used: 'true'
      }
    },
    created () {
		console.log()
      this.getAppDetail(this.$store.getters.type,"this.$store.getters.type");
    },
    methods: {
      // 应用详情
      getAppDetail () {
        let obj = { id: this.params }
        this.$api.post(this.$lesUiPath.appDetail, obj).then(result => {
          if (result.code == 0) {
            this.appDetail = result.data
            this.applied = result.data.applied
			this.uver = result.data.uver
          } else {
            return this.$message.error(result.msg)
          }
        })
      },
      // 申请应用
      handleApply () {
        let obj = { id: this.params }
        this.$api.post(this.$lesUiPath.appApply, obj).then(result => {
          if (result.code == 0) {
            result.data.appName = this.appDetail.appName
            this.$router.push({
              path: "/application/appStore/apply",
              query: { params: result.data }
            })
          } else {
            return this.$message.error(result.msg)
          }
        })
      },
      // 返回商城
      handleJumpAppStore () {
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
        & > span,
        i {
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
          font-family: PingFangSC-Medium;
          line-height: 1.5;
          font-size: 14px;
          color: #4a4a4a;
          text-align: left;
        }
      }
    }
    .tab {
      height: calc(100% - 52px);
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(226, 226, 226);
      border-radius: 8px;
      padding: 20px;
      font-family: PingFangSC-Medium;
      font-size: 14px;
      line-height: 1.5;
      color: #4a4a4a;
      text-align: left;
    }
  }
</style>
