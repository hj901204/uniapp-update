<template>
  <div class="application-status">
    <div v-if="$route.path.indexOf('/Renew') == -1">
      <div class="application-part">
        <div class="apply-title">
          <img src="../../../../assets/logo.png" alt="" />
          <span><i>·</i>{{ paramsObj.title }}</span>
        </div>
        <div class="start-date">开始日期:<span>2020/01/21 12:32:34</span></div>
        <div class="expiration-date">
          有效期:<span>一年</span>
          <el-button type="primary" plain size="small" @click="handleRenew"
            >续费</el-button
          >
        </div>
      </div>
      <!-- 用户状态 -->
      <div class="users-status">
        <fieldset>
          <legend>用户状态</legend>
          <!-- 饼图 -->
          <PieChart />
          <LineChart />
        </fieldset>
      </div>
      <!-- 用户活跃排行榜 -->
      <div class="user-list">
        <fieldset>
          <legend>用户活跃排行榜</legend>
          <Table :tableHead="tableHead" :tableData="tableData" />
        </fieldset>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {
    PieChart: resolve => require(["./components/PieChart"], resolve),
    LineChart: resolve => require(["./components/LineChart"], resolve),
    Table: resolve => require(["@/components/Table"], resolve)
  },
  data() {
    return {
      paramsObj: this.$route.query.params,
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
      tableData: [
        {
          userName: "木村文乃",
          email: "fumino.kimura@gocdata.com",
          count: "123",
          lastDate: "2020/01/19 21:00:09"
        },
        {
          userName: "上野树里",
          email: "",
          count: "33",
          lastDate: "2020/01/19 21:00:09"
        }
      ]
    }
  },
  methods: {
    handleRenew() {
      let _this = this
      this.$router.push({
        path: "/application/enterpriseApplications/applicationStatus/Renew",
        query: {
          appInfo: _this.paramsObj
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.application-status {
  overflow: hidden;
  padding: 10px 20px;
  .application-part {
    border: 1px solid black;
    padding: 10px;
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
      line-height: 30px;
      & > span {
        margin-left: 10px;
      }
      .el-button {
        margin-left: 20px;
      }
    }
  }
  .users-status {
    & > fieldset {
      margin-top: 20px;
      & > div {
        float: left;
      }
    }
  }
  .user-list {
    & > fieldset {
      margin-top: 20px;
    }
  }
}
</style>
