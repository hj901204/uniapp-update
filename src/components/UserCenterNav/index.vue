<template>
    <div class="user-nav">
        <div class="user-center">
            <div class="user-center_box">
                <span>{{userName}}</span>
                <span class="logout" @click="logout">退出</span>
                <div class="badge"
                     @click="handleToMessage">
                    <el-badge class="item"
                              hidden
                              is-dot>
                        <i class="el-icon-bell"></i>
                    </el-badge>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'user-nav',
    data() {
      return {
        userName: this.$store.getters.name
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('user/LogOut').then(() => {
          location.reload() // In order to re-instantiate the vue-router object to avoid bugs
        })
        this.$router.push({ path: '/login' })
      },
      handleToMessage() {
        this.$router.push({ path: '/enterprise/messageCenter/systemInfo' })
      }
    }
  }
</script>

<style lang="scss">
    .user-nav {
        height: 72px;
        box-sizing: border-box;
        display: flex;

        .user-center {
            width: 100%;
            color: white;
            display: flex;
            font-size: 14px;
            .user-center_box{
                display: flex;
                margin-left: auto;
                span{
                    margin: auto 20px auto 0;
                }
                .logout{
                    cursor: pointer;
                }
            }

        }

        .badge {
            margin: auto 0;
            cursor: pointer;

            i {
                color: #fff;
                font-size: 24px;
            }
        }
    }
</style>
