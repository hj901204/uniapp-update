<template>
  <div class="application-setting">
    <!-- 应用信息 -->
    <div class="apply-info">
      <div class="apply-title">
        <img src="@/assets/logo.png" alt="" />
        <span><i>·</i>{{ params.title }}</span>
      </div>
      <div class="start-date">开始日期:<span>2020/01/21 12:32:34</span></div>
      <div class="expiration-date">有效期:<span>一年</span></div>
      <div class="my-apply-btns">
        <el-button @click="handleStartUse" size="small" type="primary" plain
          >开始使用
        </el-button>
        <el-button size="small" type="primary" plain @click="handleApplyStatus"
          >应用状态
        </el-button>
      </div>
    </div>
    <!-- 添加用户 -->
    <div class="add-user-box">
      <div>
        <el-button size="small" type="primary" plain>添加用户</el-button>
      </div>
      <fieldset>
        <legend>当前应用允许以下用户使用</legend>
        <Table
          :tableHead="tableHead"
          :isShowOperation="true"
          :tableData="tableData"
          @handleStop="handleStop"
          @handleStart="handleStart"
        />
      </fieldset>
    </div>
  </div>
</template>

<script>
export default {
  name: "application-setting",
  components: {
    Table: resolve => require(["@/components/Table"], resolve)
  },
  data() {
    return {
      params: this.$route.query.params,
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
          width: 300
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
    handleApplyStatus() {
      this.$router.push({
        path: "/application/enterpriseApplications/applicationStatus",
        query: {
          params: this.params
        }
      })
    },
    //开始使用
    handleStartUse() {},
    // 禁用
    handleStop(row) {
      row.isDisabled = true
    },
    // 启用
    handleStart(row) {
      row.isDisabled = false
    }
  }
}
</script>

<style lang="scss" scoped>
.application-setting {
  .apply-info {
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
  .add-user-box {
    margin-top: 20px;
    & > div:first-child {
      text-align: right;
      margin-bottom: 10px;
    }
  }
}
</style>
