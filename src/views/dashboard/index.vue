<template>
  <div class="home">
    <!-- 我的企业信息 -->
    <MyCorporateInfo />
    <!-- 我的企业应用 -->
    <MyCorporateApplication />
    <!-- 企业用户信息 -->
    <EnterpriseUserInfo />
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
    margin-top: 10px;
    & > fieldset {
      padding: 20px;
      box-sizing: border-box;
      .edit-btn {
        float: right;
      }
    }
  }
}
</style>
