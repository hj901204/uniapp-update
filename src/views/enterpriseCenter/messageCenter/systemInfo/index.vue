<template>
  <div class="system-info">
    <template v-if="isShowMainPage">
      <!-- 消息中心-系统信息 -->
      <ul>
        <li v-for="item in list"
            :key="item.id">
          <div class="info-title">
            <div class="info-title-box">
              <i class="el-icon-message"></i>
              <h3 @click="handleNotice(item)">{{item.title}}</h3>
              <span class="time">
                {{item.sendTime}}
              </span>
              <span v-if="item.status == '1'">
                已读 由 {{ item.recTime}} @ {{item.recUserName}}
              </span>
              <span v-if="item.status == '0'">
                未读
              </span>
            </div>
            <i class="el-icon-my-guanbi"
               @click="handleDelete(item)"
               alt="删除"></i>
          </div>
          <div class="info-description">
            应用名称：{{item.appName}} 来自 {{ item.tsSendUserName}} @ {{item.tsSendEnterName}}
          </div>
        </li>
      </ul>
    </template>
    <template v-else>
      <div style="text-align:right">
        <br>
        <el-button size="small" @click="handleBack">返回</el-button>
      </div>
      <ul>
        <li>
          <div class="info-title">
            <div class="info-title-box">
              <i class="el-icon-message"></i>
              <h3 @click="handleNotice(item)">{{item.title}}</h3>
              <span class="time">
                {{item.sendTime}}
              </span>
            </div>
          </div>
          <div class="info-description">
          消息应用：{{ item.appName}} 
          </div>
          <div class="info-description">
          消息来源：{{ item.tsSendUserName}} @ {{item.tsSendEnterName}}
          </div>
          <div class="info-description">
          首次阅读：{{item.recUserName}} @ {{ item.recTime}}
          </div>
          <div class="info-description">
            <!-- <span> -->
            <p class="cont">
              {{item.content}}
            </p>
            <!-- </span> -->
          </div>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
export default {
  name: "system-info",
  data () {
    return {
      isShowMainPage: true, //  是否显示主界面
      list: [],
      item: {}, //详情信息
    }
  },
  mounted () {
    this.getMessageList()
  },
  methods: {
    //获取消息中心列表
    getMessageList (page = 1, length = 20) {
      const queryInfo = {
        page: page,
        length: length,
        msgType: "0"      };
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
    },
    //通知发货
    handleNotice (item) {
      if (item.status == "0") {
        this.$api.post(this.$lesUiPath.smsRead, { id: item.id }).then(result => {
          if (result.code == 0) {
            this.item = result.data
            this.isShowMainPage = !this.isShowMainPage
          }
        })
      } else {
        this.item = item
        this.isShowMainPage = !this.isShowMainPage
      }
    },
    //返回
    handleBack () {
      this.getMessageList()
      this.isShowMainPage = !this.isShowMainPage
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
          & > h3:hover {
            color: #4a90e2;
            cursor: pointer;
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
      .back {
        padding: 10px;
        font-size: 14px;
        & > div {
          line-height: 20px;
        }
      }
      .cont {
        text-align: left;
        font-size: 12px;
        margin: 15px;
        line-height: 28px;
        }
    }
  }
}
</style>
