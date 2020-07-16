<template>
    <div class="error">
        <img src="@/assets/img/error.svg" alt="">
        <span>哎呀，页面出错了</span>
        <el-button plain class="button" @click="goHone">返回首页</el-button>
    </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {}
    },
    methods: {
      goHone() {
        this.$router.push({
          path: '/'
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
    .error {
        display: flex;
        flex-direction: column;

        img {
            width: 15%;
            height: 20%;
            margin: 15% auto auto;
        }

        span {
            margin: 20px 0;
        }

        .button {
            margin: auto;
        }
    }
</style>
