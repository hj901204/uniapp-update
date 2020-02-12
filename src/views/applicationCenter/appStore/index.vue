<template>
  <div class="app-store">
    <router-view> </router-view>

    <div v-if="$route.path == '/application/appStore'" class="app-list">
      <ul>
        <li v-for="item in appList" :key="item.id">
          <div class="app-title-box">
            <div class="app-title">
              <img src="../../../assets/img/appStore/log1.png" alt="" />
              <span>{{ item.title }}</span>
            </div>
            <el-button
              type="primary"
              plain
              size="small"
              class="detail-btn"
              @click="handleJumpRpute(item)"
              >查看详情
            </el-button>
          </div>
          <div class="app-describe">
            <p>
              基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍
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
      appList: [
        {
          id: 1,
          title: "SRM"
        },
        {
          id: 2,
          title: "MES"
        },
        {
          id: 3,
          title: "WMS"
        }
      ]
    }
  },
  methods: {
    handleJumpRpute(item) {
      this.$router.push({
        path: "/application/appStore/applicationDetails",
        query: {
          params: item
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
      // padding: 10px;
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
        padding: 20px;
        margin-bottom: 10px;
        .app-title-box {
          overflow: hidden;
          border-bottom: 1px solid rgb(226, 226, 226);
          padding: 10px;
          margin-bottom: 10px;
          .app-title {
            float: left;
            & > img {
              width: 38px;
              height: 40px;
              vertical-align: middle;
              margin-right: 20px;
              vertical-align:middle;
            }
            & > span {
              font-size: 24px;
              font-weight: bold;
              vertical-align:middle;
              font-family:PingFangSC-Medium;
              font-size:18px;
              color:#404040;
              text-align:left;
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
