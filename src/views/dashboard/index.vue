<template>
  <div class="home">
    <div style="padding-left:210px;">
      <div style="display:flex">
        <!-- 我的企业信息 -->
        <MyCorporateInfo style="width:65%;margin:10px" />
        <!-- 我的企业应用 -->
        <MyCorporateApplication style="width:32%;margin:10px" />
      </div>
      <!-- 企业用户信息 -->
      <EnterpriseUserInfo style="margin:10px" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {}
  },
  components: {
    MyCorporateInfo: resolve =>
      require(["./components/MyCorporateInfo"], resolve),
    MyCorporateApplication: resolve =>
      require(["./components/MyCorporateApplication"], resolve),
    EnterpriseUserInfo: resolve =>
      require(["./components/EnterpriseUserInfo"], resolve)
  }
}
</script>

<style lang="scss">
.home {
  text-align: left;
  & > div {
    margin-bottom: 16px;
    & > fieldset {
      padding: 16px;
      box-sizing: border-box;
      .edit-btn {
        float: right;
      }
    }
  }
}
</style>
