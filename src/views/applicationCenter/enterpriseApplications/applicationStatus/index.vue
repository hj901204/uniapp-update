<template>
  <div class="application-status">
    <div v-if="$route.path.indexOf('/Renew') == -1">
      <div class="application-part">
        <div class="apply-title-box">
          <div class="apply-title">
            <img src="@/assets/img/application/biaoqian.png"
                 alt="" />
            <span><i>SupplyX </i>{{ paramsObj.appName }}</span>
          </div>
          <img src="@/assets/img/application/goc-logo.png"
               alt="">
        </div>
        <div class="apply-info">
          <div class="start-date">
            <p>开始日期 :</p><span>{{paramsObj.initiateTime}}</span>
          </div>
          <div class="expiration-date">
            <p v-if="paramsObj.expireTime">过期时间 :</p><span v-if="">{{paramsObj.expireTime}}</span>
            <p v-if="!paramsObj.expireTime">有效期 :</p><span v-if="">一年</span>
            <el-button type="danger"
                       size="mini"
                       @click="handleRenew">续 费</el-button>
          </div>
        </div>
      </div>
      <!-- 用户状态 -->
      <div class="users-status">
        <h3>用户状态</h3>
        <!-- 饼图 -->
        <div class="chart-box">
          <PieChart />
          <LineChart />
        </div>
      </div>
      <!-- 用户活跃排行榜 -->
      <div class="user-list">
        <h3>用户活跃排行榜</h3>
        <!-- <fieldset> -->
        <!-- <legend>用户活跃排行榜</legend> -->
        <Table :tableHead="tableHead"
               :tableData="tableData"
               @sizeChange='sizeChange'
               @currentChange='currentChange'
               :currentSize='currentSize'
               :currentPage='currentPage'
               :total='total' />
        <!-- </fieldset> -->
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'applicationStatus',
  components: {
    PieChart: resolve => require(["./components/PieChart"], resolve),
    LineChart: resolve => require(["./components/LineChart"], resolve),
    Table: resolve => require(["@/components/Table"], resolve)
  },
  mounted () {
    this.getUserData()
  },
  data () {
    return {
      paramsObj: JSON.parse(this.$route.query.params),
      tableHead: [
        {
          fieldNo: "userName",
          fieldName: "用户名",
          id: 1,
          width: "100"
        },
        {
          fieldNo: "email",
          fieldName: "Email",
          id: 2,
          width: 400
        },
        {
          fieldNo: "count",
          fieldName: "总登陆次数",
          id: 3,
          width: 100
        },
        {
          fieldNo: "lastDate",
          fieldName: "最近登陆时间",
          id: 4
        }
      ],
      tableData: [],
      currentSize: 10,
      currentPage: 1,
      total: 0

    }
  },
  methods: {
    handleRenew () {
      let _this = this
      this.$router.push({
        path: "/application/enterpriseApplications/applicationStatus/Renew",
        query: {
          appInfo: _this.paramsObj
        }
      })
    },
    // 表格分页 
    sizeChange (val) {
      this.currentSize = val;
      this.getUserData(this.currentPage, this.currentSize)
    },
    currentChange (val) {
      this.currentPage = val;
      this.getUserData(this.currentPage, this.currentSize)
    },
    //获取用户活跃排行榜
    getUserData (page = 1, length = 10) {
      const queryInfo = { page: page, length: length };
      this.$api.post(this.$lesUiPath.activeUserLeaderboard, queryInfo).then(result => {
        if (result.code == 0) {

        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.application-status {
  overflow: hidden;
  .application-part {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
    border-radius: 8px;
    padding: 16px;
    .apply-title-box {
      overflow: hidden;
      padding-bottom: 10px;
      border-bottom: 2px solid rgba(0, 0, 0, 0.05);
      .apply-title {
        float: left;
        & > img {
          width: 30px;
          vertical-align: middle;
          margin-right: 8px;
        }
        & > span {
          font-weight: bold;
          font-size: 18px;
          & > i {
            font-weight: bold;
            font-style: normal;
          }
        }
      }
      & > img {
        width: 110px;
        float: right;
      }
    }
    .apply-info {
      margin-top: 16px;
      & > div {
        line-height: 30px;
        & > p {
          width: 100px;
          display: inline-block;
          margin-right: 16px;
          text-align: right;
        }
      }
      .expiration-date {
        .el-button {
          margin-left: 24px;
          width: 90px;
        }
      }
    }
  }
  .users-status {
    border-radius: 8px;
    background-color: #fff;
    margin-top: 8px;
    padding: 16px;
    padding-bottom: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    & > h3 {
      padding-bottom: 12px;
      color: #4a90e2;
      border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    }
    .chart-box {
      overflow: hidden;
      & > div {
        float: left;
      }
      & > div:first-child {
        width: 40%;
      }
      & > div:last-child {
        width: 60%;
      }
    }
  }
  .user-list {
    border-radius: 8px;
    background-color: #fff;
    margin-top: 8px;
    padding: 16px;
    padding-bottom: 0;
    border: 1px solid rgba(0, 0, 0, 0.1);
    & > h3 {
      padding-bottom: 12px;
      color: #4a90e2;
      border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    }
  }
}
</style>
