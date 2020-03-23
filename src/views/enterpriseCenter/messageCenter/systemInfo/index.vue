<template>
  <div class="system-info">
    <!-- 消息中心-系统信息 -->
    <ul>
      <li v-for="item in list"
          :key="item.id">
        <div class="info-title">
          <div class="info-title-box">
            <h3>应用申请结果通知</h3>
            <span class="time">
              {{item.sendTime}}
            </span>
          </div>
          <i class="el-icon-my-guanbi"
             @click="handleDelete(item)"></i>
        </div>
        <div class="info-description">
          您的<span>{{item.title}}</span>应用申请已经通过，请查收您的邮件进行确认。
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "system-info",
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.getMessageList()
  },
  methods: {
    //获取消息中心列表
    getMessageList (page = 1, length = 1000) {
      const queryInfo = { page: page, length: length };
      this.$api.post(this.$lesUiPath.smsFindList, queryInfo).then(result => {
        if (result.code == 0) {
          this.list = result.data
          this.list.map(item => {
            item.sendTime = this.$global.dateTime(item.sendTime)
          })
        }
      })
    },
    // 删除消息
    handleDelete (item) {
      this.$confirm('此操作将永久删除, 是否继续?', '提示', this.$global.confirmConfig).then(() => {
        this.$api.post(this.$lesUiPath.smsDelete, { id: item.id }).then(result => {
          if (result.code == 0) {
            this.getMessageList()
            return this.$message.success('删除成功')
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.system-info {
  text-align: left;
  height: 100%;
  height: calc(100vh - 312px);
  // padding: 10px;
  box-sizing: border-box;
  & > ul {
    padding-top: 20px;
    & > li {
      margin-bottom: 10px;
      background-color: #fff;
      border: 2px solid rgba(0, 0, 0, 0.08);
      border-radius: 8px;
      .info-title {
        overflow: hidden;
        padding: 10px;
        .info-title-box {
          float: left;
          & > h3 {
            display: inline-block;
            font-weight: bold;
            margin-right: 12px;
          }
          & > span {
            font-size: 12px;
            color: rgba(0, 0, 0, 0.5);
          }
        }
        & > i {
          float: right;
          cursor: pointer;
          font-size: 20px;
          color: #7e7e7e;
        }
      }
      .info-description {
        padding: 10px;
        font-size: 14px;
        & > div {
          line-height: 20px;
        }
      }
    }
  }
}
</style>
