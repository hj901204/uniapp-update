<template>
  <div class="my-application">
    <!-- 我的企业应用 -->
    <div v-if="$route.path == '/application/enterpriseApplications'">
      <ul>
        <li v-for="item in myApplyList" :key="item.id">
          <div class="apply-title">
            <img src="../../../assets/logo.png" alt="" />
            <span><i>·</i>{{ item.title }}</span>
          </div>
          <div class="start-date">
            开始日期:<span>2020/01/21 12:32:34</span>
          </div>
          <div class="expiration-date">有效期:<span>一年</span></div>
          <div class="my-apply-btns">
            <el-button @click="handleStartUse" size="small" type="primary" plain
              >开始使用
            </el-button>
            <el-button
              @click="handleApplyStatus(item)"
              size="small"
              type="primary"
              plain
              >应用状态
            </el-button>
            <el-button
              @click="handleUserSetting(item)"
              size="small"
              type="primary"
              plain
              >用户设定
            </el-button>
          </div>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      myApplyList: [
        {
          id: 1,
          title: "SRM"
        },
        {
          id: 2,
          title: "MES"
        }
      ]
    }
  },
  methods: {
    //应用状态
    handleApplyStatus(item) {
      this.$router.push({
        path: "/application/enterpriseApplications/applicationStatus",
        query: {
          params: item
        }
      })
    },
    //开始使用
    handleStartUse() {},
    //用户设定
    handleUserSetting(item) {
      this.$router.push({
        path: "/application/enterpriseApplications/applicationSetting",
        query: {
          params: item
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-application {
  overflow: hidden;
  text-align: left;
  ul {
    padding: 0 20px;
    & > li {
      border: 1px solid black;
      padding: 10px 20px;
      box-sizing: border-box;
      margin-bottom: 10px;
      .apply-title {
        overflow: hidden;
        padding: 10px 0;
        & > img {
          width: 110px;
          vertical-align: middle;
        }
        & > span,
        i {
          font-weight: bold;
          font-size: 18px;
          font-style: italic;
          i {
            margin: 0 5px;
          }
        }
      }
      .start-date,
      .expiration-date {
        line-height: 20px;
        & > span {
          margin-left: 10px;
        }
      }
      .my-apply-btns {
        margin-top: 40px;
        text-align: right;
      }
    }
  }
}
</style>
