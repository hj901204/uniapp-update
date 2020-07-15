<template>
    <el-dialog
            :visible.sync="dialogVisible"
            width="30%">
        <div class="mini_code-box">
            <img src="@/assets/img/QR-code.png" alt="">
            <p>
                <span class="span_1">通过微信小程序邀请用户</span>
                <span class="span_2">
                    <span>扫码后进入小程序邀请企业用户</span>
                    <span>请确保企业管理员进行操作</span>
                </span>
            </p>
        </div>
        <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
</template>

<script>
  export default {
    name: 'index',
    props: {},
    data() {
      return {
        dialogVisible: false
      }
    },
    computed: {},
    mounted() {
    },
    watch: {},
    methods: {
      open() {
        this.dialogVisible = true
      }
    },
    components: {}
  }
</script>

<style scoped lang="scss">
    .mini_code-box {
        display: flex;

        p {
            display: flex;
            flex-direction: column;
            margin: auto;

            .span_1 {
                font-size: 16px;
                font-weight: bold;
            }

            .span_2 {
                display: flex;
                flex-direction: column;
                font-size: 14px;
                color: #505050;
                margin-top: 50px;
            }
        }
    }


</style>
