<template>
  <div class="system-info">
    <ul>
      <li>
        <div class="info-title">
          <h3>应用申请结果通知</h3>
          <i class="el-icon-error"></i>
        </div>
        <div class="info-description">
          <div class="time">
            2020年1月19日 20:09
          </div>
          <div class="">
            您的<span>XXX</span>应用申请已经通过，请查收您的邮件进行确认。
          </div>
        </div>
      </li>
      <li>
        <div class="info-title">
          <h3>应用申请结果通知</h3>
          <i class="el-icon-error"></i>
        </div>
        <div class="info-description">
          <div class="time">
            2020年1月19日 20:09
          </div>
          <div class="">
            您的<span>XXX</span>应用申请已经通过，请查收您的邮件进行确认。
          </div>
        </div>
      </li>
      <li>
        <div class="info-title">
          <h3>应用申请结果通知</h3>
          <i class="el-icon-error"></i>
        </div>
        <div class="info-description">
          <div class="time">
            2020年1月19日 20:09
          </div>
          <div class="">
            您的<span>XXX</span>应用申请已经通过，请查收您的邮件进行确认。
          </div>
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
  overflow: hidden;
  padding: 10px;
  & > ul {
    padding: 0;
    & > li {
      border: 1px solid rgba(0, 0, 0, 0.1);
      margin-bottom: 10px;
      .info-title {
        overflow: hidden;
        background-color: #c6e2ff;
        padding: 10px;
        & > h3 {
          float: left;
        }
        & > i {
          float: right;
          cursor: pointer;
          font-size: 20px;
          color: #409eff;
        }
      }
      .info-description {
        padding: 10px;
        & > div {
          line-height: 20px;
        }
      }
    }
  }
}
</style>
