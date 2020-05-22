<template>
  <div class="left-nav">
    <!-- <i class="icon iconfont">&#xe608;</i> -->
    <el-menu router
             :default-active="
             $route.path.indexOf('/application/appStore') != -1
              ? '/application/appStore'
              : $route.path.indexOf('/application/enterpriseApplications') != -1
              ? '/application/enterpriseApplications'
              : $route.path.indexOf('/enterprise/enterpriseInfo/basicInfo') != -1
              ? '/enterprise/enterpriseInfo'
              : $route.path.indexOf('/enterprise/messageCenter/systemInfo') != -1
              ? '/enterprise/messageCenter'
              : $route.path.indexOf('/enterprise/userCenter/userManagement') != -1
              ? '/enterprise/userCenter'
              : $route.path"
             unique-opened
             class="el-menu-vertical-demo left-nav-part">
      <div v-for="item in navList"
           :key="item.meta.path">
        <el-menu-item :index="item.path"
                      v-if="!item.children">
          <i v-if="item.meta.icon"
             :class="item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
        <el-submenu :index="item.path"
                    v-if="item.children">
          <template slot="title">
            <i v-if="item.meta.icon"
               :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item v-for="i in item.children"
                        :index="i.meta.path"
                        :key="i.path">
            <i v-if="i.meta.icon"
               :class="i.meta.icon"></i>
            <span>{{ i.meta.title }}</span>
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "left-nav",
  data () {
    return {
      navList: []
    }
  },
  mounted () {
    this.getLeftNav()
  },
  methods: {
    getLeftNav () {
      let allRoutes = this.$store.getters.permission_routes
      let route = this.$route.matched
      allRoutes = allRoutes.filter(x => {
        return x.path != "/" && x.path != "/login" && x.path != "/forbidden" && x.path != "/findPassword" && x.path != "/register"
      })
      this.navList = allRoutes
      return this.navList
    }
  }
}
</script>

<style lang="scss">
.left-nav {
  height: calc(100vh - 240px);
  width: 200px;
  background-color: #fff;
  position: absolute;
  left: 10.4%;
  // top: 116px;
  margin-top: 10px;
  text-align: left;
  .left-nav-part {
    width: 200px;
    // float: left;

    .el-submenu__title i,
    .el-menu-item i {
      color: #303133;
      vertical-align: middle;
    }
    .el-menu-item.is-active i {
      color: #4a90e2;
    }
    span {
      vertical-align: middle;
    }
  }
  .el-menu-item.is-active {
    border-right: 2px solid #4a90e2;
    background-color: #edf4fc;
  }
}
</style>
