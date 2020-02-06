<template>
  <!-- 我的企业应用 -->
  <div class="my-corporate-application">
    <fieldset>
      <legend>我的企业应用</legend>
      <div class="detail-apply">
        <div class="apply-box">
          <img src="../../../assets/logo.png" alt="" />
          <span class="apply-name">
            <span>·</span>
            <span>SRM</span>
          </span>
        </div>
        <div class="apply-box">
          <img src="../../../assets/logo.png" alt="" />
          <span class="apply-name">
            <span>·</span>
            <span>MES</span>
          </span>
        </div>
      </div>
      <div class="edit-btn">
        <el-button type="primary" plain icon="el-icon-edit" size="small"
          >修改
        </el-button>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: "my-corporate-application",
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.my-corporate-application {
  .detail-apply {
    float: left;
    .apply-box {
      float: left;
      padding: 10px;
      margin-right: 10px;
      cursor: pointer;
      border: 1px solid #e4e8f1;
      // background-color: #f1f3f8;
      & > img {
        width: 100px;
        margin-right: 15px;
        vertical-align: middle;
      }
      .apply-name {
        & > span {
          font-weight: bold;
        }
      }
    }
    .apply-box:hover {
      background-color: #f1f3f8;
    }
  }
}
</style>
