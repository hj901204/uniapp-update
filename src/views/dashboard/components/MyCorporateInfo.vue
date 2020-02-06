<template>
  <!-- 我的企业信息 -->
  <div class="my-corporate-info">
    <fieldset>
      <legend>我的企业信息</legend>
      <div class="detail-info">
        <div class="corporate-id-box">
          <h4>
            <img src="../../../assets/logo.png" alt="" class="id-logo" />
            <span>ID</span>
          </h4>
          <p class="corporate-id">KALZ2081920</p>
        </div>
        <p>上海谷器数据科技有限公司</p>
        <p>上海市宝山区长江西路1888号万达广场2栋9008 （200443）</p>
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
  name: "my-corporate-info",
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.my-corporate-info {
  .detail-info {
    width: 60%;
    float: left;
    .corporate-id-box {
      .id-logo {
        width: 100px;
        vertical-align: middle;
        margin-right: 8px;
      }
      span {
        font-weight: bold;
      }
      .corporate-id {
        width: 300px;
        background-color: #c6e2ff;
        padding-left: 10px;
        box-sizing: border-box;
      }
    }
  }
  p {
    line-height: 30px;
    font-size: 14px;
  }
}
</style>
