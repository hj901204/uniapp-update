<template>
  <div class="layout">
    <div style="overflow:hidden" v-if="handleJudgePath" class="second-nav">
      <Breadcrumb style="float:left" />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {
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
        "/forbidden",
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
