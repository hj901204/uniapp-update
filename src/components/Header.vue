<template>
  <div class="header-nav" v-if="handleJudgePath">
    <div class="logo-img">
      <img src="../assets/logo.png" alt="" />
    </div>
    <div class="top-nav">
      <router-link
        to="/"
        tag="li"
        :class="$route.path == '/dashboard' ? 'nav-active' : ''"
      >
        <i class="el-icon-s-home"></i>
        首页
      </router-link>
      <router-link
        to="/application"
        tag="li"
        :class="$route.path.indexOf('/application') == 0 ? 'nav-active' : ''"
      >
        <i class="el-icon-menu"></i>
        应用中心
      </router-link>
      <router-link
        to="/enterprise"
        tag="li"
        :class="$route.path.indexOf('/enterprise') == 0 ? 'nav-active' : ''"
      >
        <i class="el-icon-office-building"></i>
        企业中心
      </router-link>
      <router-link
        to="/help"
        tag="li"
        :class="$route.path == '/help' ? 'nav-active' : ''"
      >
        <i class="el-icon-s-opportunity"></i>
        帮助中心
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerNav",
  components: {},
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
.header-nav {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  .logo-img {
    float: left;
    margin-right: 10px;
    margin-top: 7px;
  }
  .top-nav {
    height: 50px;
    display: flex;
    display: -webkit-flex;
    li {
      flex-grow: 1;
      line-height: 50px;
      cursor: pointer;
    }
    .nav-active {
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
