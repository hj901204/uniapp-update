<template>
  <div id="app">
    <div class="views">
      <HeaderNav />
      <Breadcrumb v-if="handleJudgePath" />
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  components: {
    HeaderNav: reslove => require(["./components/Header"], reslove),
    Breadcrumb: reslove =>
      require(["./components/Breadcrumb/index.vue"], reslove)
  },
  data() {
    return {}
  },
  methods: {},
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
}
.views {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}
</style>
