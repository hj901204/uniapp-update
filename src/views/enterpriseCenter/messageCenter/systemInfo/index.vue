<template>
  <div class="system-info">
    <!-- 消息中心-系统信息 -->
    <ul>
      <li>
        <div class="info-title">
          <div class="info-title-box">
            <h3>消息标题</h3>
            <span class="time">
              2020年1月19日 20:09
            </span>
          </div>
          <i class="el-icon-my-guanbi"></i>
        </div>
        <div class="info-description">
          您的<span>XXX</span>应用申请已经通过，请查收您的邮件进行确认。
        </div>
      </li>
      <li>
        <div class="info-title">
          <div class="info-title-box">
            <h3>消息标题</h3>
            <span class="time">
              2020年1月19日 20:09
            </span>
          </div>
          <i class="el-icon-my-guanbi"></i>
        </div>
        <div class="info-description">
          您的<span>XXX</span>应用申请已经通过，请查收您的邮件进行确认。
        </div>
      </li>
      <li>
        <div class="info-title">
          <div class="info-title-box">
            <h3>消息标题</h3>
            <span class="time">
              2020年1月19日 20:09
            </span>
          </div>
          <i class="el-icon-my-guanbi"></i>
        </div>
        <div class="info-description">
          您的<span>XXX</span>应用申请已经通过，请查收您的邮件进行确认。
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "system-info",
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.system-info {
  text-align: left;
  height: 100%;
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
