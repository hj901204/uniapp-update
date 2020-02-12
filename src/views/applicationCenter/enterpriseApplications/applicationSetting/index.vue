<template>
  <div class="application-setting">
    <!-- 应用信息 -->
    <div class="application-part">
      <div class="apply-title-box">
        <div class="apply-title">
          <img src="@/assets/img/application/biaoqian.png"
               alt="" />
          <span><i>SupplyX </i>{{ params.title }}</span>
        </div>
        <img src="@/assets/img/application/goc-logo.png"
             alt="">
      </div>
      <div class="apply-info">
        <div class="start-date">
          <p>开始日期 :</p><span>2020/01/21 12:32:34</span>
        </div>
        <div class="expiration-date">
          <p>有效期 :</p><span>一年</span>
        </div>
      </div>
    </div>
    <!-- 添加用户 -->
    <div class="add-user-box">
      <h3>用户列表</h3>
      <el-button size="small"
                 type="primary"
                 class="add-user-btn">添加用户</el-button>
      <Table :tableHead="tableHead"
             :isShowOperation="true"
             :isShowStopBtns='true'
             :isShowDeleteBtn='true'
             :tableData="tableData"
             @handleStop="handleStop"
             @handleStart="handleStart" />
    </div>
  </div>
</template>

<script>
export default {
  name: "application-setting",
  components: {
    Table: resolve => require(["@/components/Table"], resolve)
  },
  data () {
    return {
      params: this.$route.query.params,
      tableHead: [
        {
          fieldNo: "userName",
          fieldName: "用户名",
          id: 1,
        },
        {
          fieldNo: "email",
          fieldName: "Email",
          id: 2,
        },
        {
          fieldNo: "depart",
          fieldName: "所属部门",
          id: 3
        }
      ],
      tableData: [
        {
          userName: "木村文乃",
          email: "fumino.kimura@gocdata.com",
          depart: "研发部",
          isDisabled: false
        },
        {
          userName: "上野树里",
          email: "",
          depart: "行政部",
          isDisabled: true
        }
      ]
    }
  },
  methods: {
    // 应用状态
    handleApplyStatus () {
      this.$router.push({
        path: "/application/enterpriseApplications/applicationStatus",
        query: {
          params: this.params
        }
      })
    },
    //开始使用
    handleStartUse () { },
    // 禁用
    handleStop (row) {
      row.isDisabled = true
    },
    // 启用
    handleStart (row) {
      row.isDisabled = false
    }
  }
}
</script>

<style lang="scss" scoped>
.application-setting {
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
    }
  }
  // .apply-info {
  //   border: 1px solid black;
  //   padding: 10px 20px;
  //   box-sizing: border-box;
  //   margin-bottom: 10px;
  //   .apply-title {
  //     overflow: hidden;
  //     padding: 10px 0;
  //     & > img {
  //       width: 110px;
  //       vertical-align: middle;
  //     }
  //     & > span,
  //     i {
  //       font-weight: bold;
  //       font-size: 18px;
  //       font-style: italic;
  //       i {
  //         margin: 0 5px;
  //       }
  //     }
  //   }
  //   .start-date,
  //   .expiration-date {
  //     line-height: 20px;
  //     & > span {
  //       margin-left: 10px;
  //     }
  //   }
  //   .my-apply-btns {
  //     margin-top: 40px;
  //     text-align: right;
  //   }
  // }
  .add-user-box {
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
    .add-user-btn {
      margin: 16px;
    }
  }
}
</style>
