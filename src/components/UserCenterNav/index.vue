<template>
  <div class="user-nav">
    <!-- <div class="username">
      谷器数据
    </div> -->
    <div class="user-center">
      <el-dropdown>
        <span class="el-dropdown-link">
          <i class="icon element-icons">&#xe604;</i>
          <span> 用户名称</span
          ><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="badge" @click="handleToMessage">
      <el-badge class="item" is-dot>
        <!-- <el-button icon="el-icon-bell" circle size="mini"></el-button> -->
        <i class="el-icon-bell"></i>
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
    },
    handleToMessage() {
      this.$router.push({ path: "/enterprise/messageCenter/systemInfo" })
    }
  }
}
</script>

<style lang="scss">
.user-nav {
  height: 72px;
  // line-height: 72px;
  padding-top: 20px;
  box-sizing: border-box;
  display: flex;

  .user-center {
    width: 200px;
    box-sizing: border-box;
    text-align: left;
    .el-dropdown {
      width: 100%;
      box-sizing: border-box;
      .el-dropdown-link {
        width: 100%;
        box-sizing: border-box;
        padding: 0 8px;
        display: inline-block;
        height: 32px;
        line-height: 32px;
        background-color: #fff;
        border-radius: 8px;
        color: #7e7e7e;

        .iconfont {
          margin-right: 8px;
        }
        .el-icon--right {
          text-align: right;
        }
        & > span {
          display: inline-block;
          width: 143px;
        }
      }
    }
  }
  .badge {
    margin-right: 10px;
    margin-left: 10px;
    margin-top: 5px;
    cursor: pointer;
    i {
      color: #fff;
      font-size: 24px;
    }
  }
}
</style>
