<template>
  <div class="header-nav"
       v-if="handleJudgePath">
    <div class="nav-content">
      <div class="logo-img"
           @click="handleToDashboard">
        <img src="@/assets/img/logo-w.png"
             alt="" />
      </div>
      <div class="top-nav">
        <router-link to="/"
                     tag="li"
                     :class="$route.path == '/dashboard' ? 'nav-active' : ''">
          <span>首页</span>
        </router-link>
        <router-link to="/application"
                     tag="li"
                     :class="$route.path.indexOf('/application') == 0 ? 'nav-active' : ''">
          <span>应用中心</span>
        </router-link>
        <router-link to="/enterprise"
                     tag="li"
                     exact
                     :class="$route.path.indexOf('/enterprise') == 0 ? 'nav-active' : ''">
          <span>企业中心</span>
        </router-link>
        <router-link to="/help"
                     tag="li"
                     :class="$route.path == '/help' ? 'nav-active' : ''">
          <span>帮助中心</span>
        </router-link>
      </div>
      <UserCenterNav style="float:right;" />
    </div>
  </div>
</template>

<script>
export default {
  name: "headerNav",
  components: {
    UserCenterNav: reslove => require(["@/components/UserCenterNav"], reslove)
  },
  data () {
    return {}
  },
  computed: {
    // 判断路由即将跳转的页面，从而不显示路由导航
    handleJudgePath () {
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
      // const routePath = this.$route.path
    }
  },
  methods: {
    handleToDashboard () {
      this.$router.push({ path: "/" })
    }
  }
}
</script>

<style lang="scss">
.header-nav {
  background-color: #778899;
  .nav-content {
    overflow: hidden;
    width: 79.2%;
    margin: 0 auto;
    display: flex;
    .logo-img {
      // float: left;
      margin-right: 6%;
      margin-top: 10px;
      cursor: pointer;
      & > img {
        width: 190px;
      }
    }
    .top-nav {
      // float: left;
      height: 72px;
      display: flex;
      display: -webkit-flex;
      width: 60%;
      li {
        flex-grow: 1;
        line-height: 72px;
        cursor: pointer;
        color: #fff;
        & > span {
          padding: 8px;
        }
      }
      .nav-active {
        & > span {
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
}
</style>
