<template>
  <div class="left-nav">
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
          >{{ item.meta.title }}</el-menu-item
        >
        <el-submenu
          :index="item.meta.path"
          v-if="item.meta.isOnlyRoute ? false : item.children"
        >
          <template slot="title">{{ item.meta.title }}</template>
          <el-menu-item
            :index="i.meta.path"
            v-for="i in item.children"
            :key="i.path"
            >{{ i.meta.title }}</el-menu-item
          >
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
  text-align: left;
  .left-nav-part {
    width: 200px;
    float: left;
  }
}
</style>
