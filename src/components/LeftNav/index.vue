<template>
  <div class="left-nav">
    <!-- <i class="icon iconfont">&#xe608;</i> -->
    <el-menu
      router
      :default-active="
        $route.path.indexOf('/application/appStore') != -1
          ? '/application/appStore'
          : $route.path.indexOf('/application/enterpriseApplications') != -1
          ? '/application/enterpriseApplications'
          : $route.path
      "
      unique-opened
      class="el-menu-vertical-demo left-nav-part"
    >
      <div v-for="item in navList.children" :key="item.path">
        <el-menu-item
          :index="item.meta.path"
          v-if="
            item.meta.isOnlyRoute
              ? true
              : !item.children && item.meta.isOnlyRoute
          "
        >
          <i v-if="item.meta.icon" :class="item.meta.icon"></i>
          <span>{{ item.meta.title }}</span>
        </el-menu-item>
        <el-submenu
          :index="item.meta.path"
          v-if="item.meta.isOnlyRoute ? false : item.children"
        >
          <template slot="title">
            <i v-if="item.meta.icon" :class="item.meta.icon"></i>
            <span>{{ item.meta.title }}</span>
          </template>
          <el-menu-item
            :index="i.meta.path"
            v-for="i in item.children"
            :key="i.path"
          >
            <i v-if="i.meta.icon" :class="i.meta.icon"></i>
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
  data() {
    return {
      navList: []
    }
  },
  mounted() {
    this.getLeftNav()
  },
  methods: {
    getLeftNav() {
      let allRoutes = this.$router.options.routes
      let route = this.$route.matched
      allRoutes.forEach(v => {
        route.forEach(i => {
          if (v.path == i.path) {
            this.navList = v
          }
        })
      })
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
  top: 116px;
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
