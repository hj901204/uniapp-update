<template>
  <div class="page-footer">
    <div class="page-footer-box">
      <img src="@/assets/img/QR-code.jpg" alt="" />
      <div class="footer-content">
        <div>谷器数据<span>@2020</span>   v2020150400</div>
        <p>联系电话：400-0530-512</p>
        <p>Email：marketing@zkyda.com</p>
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
  background-color: #fff;
  // margin-top: 100%;
  margin-top: 48px;
  height: 112px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  .page-footer-box {
    text-align: left;
    overflow: hidden;
    width: 79.2%;
    margin: 0 auto;
    padding: 24px 0;
    & > img {
      float: left;
      width: 64px;
      margin-right: 24px;
    }
    .footer-content {
      margin-top: 8px;
      & > div,
      & > p {
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 2px;
      }
      & > p {
        float: left;
        margin-right: 16px;
      }
    }
  }
}
</style>
