<template>
  <div class="layout">
    <!-- <HeaderNav /> -->
    <div style="overflow:hidden" v-if="handleJudgePath" class="second-nav">
      <Breadcrumb style="float:left" />
      <!-- <UserCenterNav style="float:right" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {
    HeaderNav: reslove => require(["@/components/Header"], reslove),
    UserCenterNav: reslove => require(["@/components/UserCenterNav"], reslove),
    Breadcrumb: reslove =>
      require(["@/components/Breadcrumb/index.vue"], reslove)
  },
  data() {
    return {}
  },
  computed: {
    // 判断路由即将跳转的页面，从而不显示路由导航
    handleJudgePath() {
      let paths = [
        "/login",
        "/register",
        "/register/firstStep",
        "/register/secondStep",
        "/register/thirdStep",
        "/register/fourthStep"
      ]
      let routePath = this.$route.path
      if (paths.indexOf(routePath) != -1) {
        return false
      }
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.second-nav {
  padding: 20px 0 10px 0;
  & > div {
    vertical-align: middle;
  }
}
</style>
