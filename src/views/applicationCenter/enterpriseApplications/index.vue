<template>
  <div class="my-application">
    <!-- 我的企业应用 -->
    <div v-if="$route.path == '/application/enterpriseApplications'">
      <ul>
        <li v-for="item in myApplyList"
            :key="item.id">
          <div class="apply-title-box">
            <div class="apply-title">
              <img src="@/assets/img/application/biaoqian.png"
                   alt="" />
              <span><i>SupplyX</i>{{ item.title }}</span>
            </div>
            <div class="start-use-btn">
              <el-button @click="handleStartUse"
                         size="small"
                         type="primary">开始使用
              </el-button>
            </div>
          </div>
          <div class="start-date">
            开始日期:<span>2020/01/21 12:32:34</span>
          </div>
          <div class="expiration-date">有效期:<span>一年</span></div>
          <div class="my-apply-btns">
            <el-button @click="handleApplyStatus(item)"
                       size="small"
                       type="text">点击查看应用状态
            </el-button>
            <el-button @click="handleUserSetting(item)"
                       size="small"
                       type="text">用户设定
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
  data () {
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
    handleApplyStatus (item) {
      this.$router.push({
        path: "/application/enterpriseApplications/applicationStatus",
        query: {
          params: item
        }
      })
    },
    //开始使用
    handleStartUse () { },
    //用户设定
    handleUserSetting (item) {
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
    overflow: hidden;
    & > li {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      background-color: #fff;
      padding: 10px 20px;
      box-sizing: border-box;
      width: 49%;
      float: left;
      margin-bottom: 10px;
      .apply-title-box {
        border-bottom: 2px solid rgba(0, 0, 0, 0.1);
        overflow: hidden;
        .apply-title {
          // float: left;
          display: inline-block;
          vertical-align: middle;
          overflow: hidden;
          padding: 10px 0;
          & > img {
            width: 32px;
            margin-right: 8px;
            vertical-align: middle;
          }
          & > span,
          i {
            font-weight: bold;
            font-size: 18px;
            font-style: normal;
            i {
              margin: 0 5px;
            }
          }
        }
        .start-use-btn {
          text-align: right;
          display: inline-block;
          margin-left: 42%;
        }
      }
      .start-date {
        margin-top: 16px;
      }
      .start-date,
      .expiration-date {
        line-height: 30px;
        font-size: 14px;
        & > span {
          margin-left: 10px;
        }
      }
      .my-apply-btns {
        & > button:first-child {
          margin-right: 24px;
        }
        // margin-top: 20px;
      }
    }
    & > li:nth-child(2n) {
      margin-left: 2%;
    }
  }
}
</style>
