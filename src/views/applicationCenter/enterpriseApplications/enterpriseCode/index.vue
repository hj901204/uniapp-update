<template>
    <div>
        <div class="enterpCode">
            <div class="codeBox">
                <div class="codeTitle">微信扫码邀请注册</div>
                <div class="codeImg"><img :src="qrCode" alt=""></div>
                <div class="wechart" style="padding: 30px 0">
                    <div>关于使用微信扫码分享</div>
                    <div>扫码进入小程序分享至您需要邀请的供应商。</div>
                    <div style="margin-top:20px">通过该分享注册的供应商将自动关联成为您的供应商。</div>
                </div>
            </div>
            <div class="codeLine"></div>
            <div class="codeBox">
                <div class="codeTitle">邀请码关联企业</div>
                <div class="codeContent">
                    <div style="font-size:18px;font-weight:500">邀请码</div>
                    <div style="font-size:18px;font-weight:500;color:#4a90e2">{{ message }}</div>
                </div>
                <div class="copyBtn">
                    <el-button
                            size="mini"
                            v-clipboard:copy="message"
                            v-clipboard:success="handleCopy"
                            v-clipboard:error="onError">复制邀请码
                    </el-button>
                </div>
                <div class="codeInfo">
                    <div>使用邀请码</div>
                    <div style="margin-top:20px">1.供应商可通过邀请码关联到您，成为你的供应商。</div>
                </div>
            </div>
        </div>
        <div class="btn">
            <el-button @click="handleBack" size="small" style="width:100%">返回</el-button>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'enterpCode',
    components: {},
    mounted() {
      this.getCodeData()
      this.handleShare()
    },
    data() {
      return {
        message: this.$route.query.params,
        qrCode:''
      }
    },
    methods: {
      //复制
      handleCopy: function(e) {
        console.log('你刚刚复制: ' + e.text)
        return this.$message.success('已复制')
      },
      handleShare() {
        this.$api.post(this.$lesUiPath.createOrderQr, {
          path: `pages/invite/invite?eid=${localStorage.getItem('eid')}`,
          eid: localStorage.getItem('eid')
        }).then(result => {
          console.log(result)
          this.qrCode = `data:image/jpg;base64,${result.data}`
        })
      },
      onError: function(e) {
        console.log('无法复制文本！')
      },
      getCodeData() {
        this.$api.post(this.$lesUiPath.enterAppFindList, {}).then(result => {
          if (result.code == 0) {

          }
        })
      },
      handleBack() {
        this.$router.push({
          path: '/application/enterpriseApplications'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
    .enterpCode {
        background-color: #ffffff;
        display: flex;

        .codeBox {
            width: 50%;

            .codeTitle {
                text-align: center;
                margin: 50px 20px 30px 20px;
                font-size: 16px;
                font-weight: 500;
            }

            .codeImg {
                width: 70%;
                max-width: 250px;
                margin: auto;

                img {
                    width: 100%;
                }
            }

            .codeContent {
                width: 70%;
                border: 1px solid #e9e9e9;
                margin: auto;
                text-align: center;
                padding: 10%;
            }

            .wechart {
                width: 85%;
                font-size: 12px;
                margin-left: 15%;
            }

            .codeInfo {
                margin-left: 5%;
                font-size: 12px;
            }

            .copyBtn {
                margin-right: 5%;
                text-align: right;
                margin-top: 10px;
            }
        }

        .codeLine {
            width: 1px;
            border: 1px solid #e9e9e9;
            height: 70%;
        }
    }

    .btn {
        width: 80px;
        margin-top: 10px;
    }
</style>
