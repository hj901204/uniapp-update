<template>
  <div class="app-store">
    <router-view> </router-view>

    <div v-if="$route.path == '/application/appStore'" class="app-list">
      <ul>
        <li v-for="item in appList" :key="item.id">
          <div class="app-title-box">
            <div class="app-title">
              <img src="../../../assets/img/appStore/log1.png" alt="" />
              <span><i>SupplyX</i>{{ item.appName }}</span>
            </div>
            <el-button 
              @click="handleJumpRpute(item)"
              size="small"
              type="primary"
              style="float: right;"
            >查看详情
            </el-button>
          </div>
          <div class="app-describe">
            <p>
              {{ item.appIntroduce }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-store",
  data() {
    return {
      appList: []
    }
  },
  created () {
    this.getAppList();
  },
  methods: {
    getAppList () {
      let obj = {}
      this.$api.post(this.$lesUiPath.appStore, obj).then(result => {
        if (result.code == 0) {
          this.appList = result.data
        } else {
          return this.$message.error(result.msg)
        }
      })
    },
    handleJumpRpute(item) {
      this.$router.push({
        path: "/application/appStore/applicationDetails",
        query: {
          params: item.id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
img,ul,li {
  margin: 0;
  padding: 0;
  border:none;
}
.app-store {
  overflow: hidden;
  box-sizing: border-box;
  .app-list {
    box-sizing: border-box;
    & > ul {
      box-sizing: border-box;
      overflow: hidden;
      & > li {
        background-color: rgb(255, 255, 255);
        border-radius: 8px;
        width: 48.5%;
        height: 190px;
        border: 1px solid rgb(226, 226, 226);
        float: left;
        box-sizing: border-box;
        margin-right: 10px;
        padding: 10px 20px;
        margin-bottom: 10px;
        .app-title-box {
          overflow: hidden;
          border-bottom: 2px solid rgb(226, 226, 226);
          padding: 10px;
          margin-bottom: 10px;
          .app-title {
            float: left;
            & > img {
              width: 32px;
            margin-right: 8px;
            vertical-align: middle;
            }
            & > span,i {
            font-weight: bold;
            font-size: 18px;
            font-style: normal;
            i {
              margin: 0 5px;
            }
          }
          }
        }
        .app-describe {
          & > p {
            line-height: 16px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            overflow: hidden;
            font-family:PingFangSC-Regular;
            font-size:14px;
            line-height: 1.5;
            color:#666666;
            text-align:left;
            padding: 10px;
          }
        }
      }
    }
  }
}
</style>
