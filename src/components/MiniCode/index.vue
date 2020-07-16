<template>
    <el-dialog
            :visible.sync="dialogVisible"
            width="30%">
        <div class="mini_code-box">
            <img :src="qrCode" alt="">
            <p>
                <span class="span_1">管理员使用微信</span>
                <span class="span_1">
扫描小程序码进行添加
                </span>
            </p>
        </div>
    </el-dialog>
</template>

<script>
  export default {
    name: 'index',
    props: {},
    data() {
      return {
        dialogVisible: false,
        qrCode: ''
      }
    },
    computed: {},
    mounted() {
      this.handleGetScanEnterQr()
    },
    watch: {},
    methods: {
      open() {
        this.dialogVisible = true
      },
      handleGetScanEnterQr() {
        this.$api.post(this.$lesUiPath.createOrderQr, {
          path: `/pages/addEnterUser/addEnterUser?id=${localStorage.getItem('xid')}`
        }).then(res => {
          this.qrCode = `data:image/jpg;base64,${res.data}`
          console.log(res)
        })
      }
    },
    components: {}
  }
</script>

<style scoped lang="scss">
    .mini_code-box {
        display: flex;
        padding-bottom: 20px;

        p {
            display: flex;
            flex-direction: column;
            margin: auto;

            .span_1 {
                font-size: 16px;
                font-weight: bold;
            }
        }

        img {
            width: 200px;
            height: 200px;
            margin-left: 50px;
        }
    }


</style>
