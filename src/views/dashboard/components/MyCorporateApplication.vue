<template>
  <!-- 我的企业应用 -->
  <div class="my-corporate-application">
    <div class="my-corporate-title">
      <h3>我的企业应用</h3>
      <div class="edit-btn">
        <el-button type="primary"
                   size="small"
                   @click="handleToJump"
                   v-if="type==1">修 改
        </el-button>
      </div>
    </div>
    <div class="apply-box">
      <ul>
        <li v-for="item in list"
            :key="item.id"
            @click="handleToApply(item)"><span>{{item.appName}}</span></li>
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
        }
      })
    },
    handleToApply (item) {
      console.log(item)
      if (item.appId == "E5CD4719") {
        this.$router.push('/application/enterpriseApplications')
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
        background-color: #31425b;
        width: 240px;
        line-height: 48px;
        text-align: center;
        border-radius: 8px;
        color: #fff;
        margin-right: 16px;
        margin-bottom: 16px;
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
}
</style>
