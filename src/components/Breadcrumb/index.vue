<template>
  <!-- 面包屑 -->
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in levelList"
        :key="item.path"
        :to="{ path: item.path }"
        v-if="item.meta.breadcrumbTitle && item.meta.breadcrumb !== false"
        >{{ item.meta.breadcrumbTitle }}
      </el-breadcrumb-item>
      <!-- <el-breadcrumb-item
        v-for="item in routeArr"
        :key="item.path"
        :to="{ path: item.path }"
        >{{ item.title }}
      </el-breadcrumb-item> -->
      <!-- <el-breadcrumb-item>{{ $route.meta.breadcrumbTitle }}</el-breadcrumb-item> -->
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return { levelList: null }
  },

  watch: {
    $route() {
      this.getBreadcrumb()
    }
  },
  created() {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb() {
      // console.log(this.$route.matched)
      let matched = this.$route.matched.filter(item => {
        if (item.name) {
          return true
        }
      })

      const first = matched[0]
      // const notMatchPaths = ["dashboard", "register"]
      if (
        first &&
        first.name.trim().toLocaleLowerCase() == "register".toLocaleLowerCase()
      ) {
        matched = [
          { path: "/login", meta: { breadcrumbTitle: "登陆" } }
        ].concat(matched)
      }
      // notMatchPaths.forEach(item => {
      //   if (first && first.name.trim().toLocaleLowerCase() == item) {
      //     return true
      //   } else {
      //     matched = [
      //       { path: "/dashboard", meta: { breadcrumbTitle: "首页" } }
      //     ].concat(matched)
      //   }
      // })
      if (
        first &&
        first.name.trim().toLocaleLowerCase() !==
          "Dashboard".toLocaleLowerCase() &&
        first.name.trim().toLocaleLowerCase() !== "register".toLocaleLowerCase()
      ) {
        matched = [
          { path: "/dashboard", meta: { breadcrumbTitle: "首页" } }
        ].concat(matched)
      }
      this.levelList = matched
    }
  }
}
</script>

<style lang="" scoped></style>
