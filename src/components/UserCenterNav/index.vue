<template>
  <div class="user-nav">
    <div class="username">
      谷器数据
    </div>
    <div class="user-center">
      <el-dropdown>
        <span class="el-dropdown-link">
          用户名称<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="badge">
      <el-badge :value="200" :max="99" class="item">
        <el-button
          icon="el-icon-chat-dot-square"
          circle
          size="mini"
        ></el-button>
      </el-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-nav",
  data() {
    return {}
  },
  methods: {
    logout() {
      this.$store.dispatch("user/LogOut").then(() => {
        location.reload() // In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user-nav {
  & > div {
    float: left;
  }
  .username {
    margin-right: 10px;
    margin-left: 20px;
  }
  .badge {
    margin-right: 30px;
    margin-left: 10px;
    margin-top: -5px;
  }
}
</style>
