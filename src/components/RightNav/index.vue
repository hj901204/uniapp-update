<template>
  <div class="logOut">
    <el-button @click="logout">退出登陆</el-button>
    <el-button @click="test">测试</el-button>
  </div>
</template>

<script>
export default {
  name: "rightNav",
  data() {
    return {}
  },
  methods: {
    logout() {
      this.$store.dispatch("user/LogOut").then(() => {
        location.reload() // In order to re-instantiate the vue-router object to avoid bugs
      })
    },
    test() {
      const data = { page: 1, limit: 10, obj: {} }
      // console.log(this.$lesUiPath.getTmOrg)
      this.$api.findList(this.$lesUiPath.getTmOrg, data).then(res => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.rightNav {
}
</style>
