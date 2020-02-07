<template>
  <div class="app-store">
    <router-view> </router-view>

    <div v-if="$route.path == '/application/appStore'" class="app-list">
      <ul>
        <li v-for="item in appList" :key="item.id">
          <div class="app-title-box">
            <div class="app-title">
              <img src="../../../assets/logo.png" alt="" />
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
              基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍基本介绍
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
.app-store {
  overflow: hidden;
  box-sizing: border-box;
  .app-list {
    box-sizing: border-box;
    & > ul {
      padding: 10px;
      box-sizing: border-box;
      overflow: hidden;
      & > li {
        width: 48.5%;
        border: 1px solid black;
        float: left;
        box-sizing: border-box;
        margin-right: 10px;
        padding: 10px;
        height: 150px;
        margin-bottom: 10px;
        .app-title-box {
          overflow: hidden;
          margin-bottom: 10px;
          .app-title {
            float: left;
            & > img {
              width: 100px;
              vertical-align: middle;
              margin-right: 20px;
            }
            & > span {
              font-size: 24px;
              font-weight: bold;
            }
          }
        }
        .app-describe {
          & > p {
            text-align: left;
            font-size: 12px;
            line-height: 16px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
