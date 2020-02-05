<template>
  <div class="header-nav" v-if="handleJudgePath">
    <div class="top-nav">
      <router-link to="/" tag="li">首页</router-link>
      <router-link to="/application" tag="li">应用中心</router-link>
      <router-link to="/enterprise" tag="li">企业中心</router-link>
      <router-link to="/help" tag="li">帮助</router-link>
    </div>
    <right-nav />
  </div>
</template>

<script>
import RightNav from "./RightNav/index"
export default {
  name: "headerNav",
  components: { RightNav },
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
      // const routePath = this.$route.path
    }
  }
}
</script>

<style lang="scss">
.top-nav {
  height: 50px;
  display: flex;
  display: -webkit-flex;
  li {
    flex-grow: 1;
    line-height: 50px;
    cursor: pointer;
  }
}
</style>
