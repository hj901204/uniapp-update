<template>
  <div class="page-footer">
    <div class="page-footer-box">
      <!-- <img src="@/assets/img/QR-code.jpg" alt="" /> -->
      <div class="footer-content">
        <span>谷器数据<span>@2020</span></span>
        <span style="display:inline-block;margin:0 10px">联系电话：400-0530-512</span>
        <span>Email：marketing@goocidata.com</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page-footer",
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.page-footer {
  background-color: #00000080;
  // margin-top: 100%;
  margin-top: 48px;
  height:40px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  .page-footer-box {
    color: #ffffff;
    text-align: center;
    overflow: hidden;
    width: 100%;
    // margin: 0 auto;
    // padding: 24px 0;
    & > img {
      float: left;
      width: 64px;
      margin-right: 24px;
    }
    .footer-content {
      height: 40px;
      line-height: 40px;
      font-size: 12px;
    }
  }
}
</style>
