<template>
  <!-- 我的企业应用 -->
  <div class="my-corporate-application">
    <div class="my-corporate-title">
      <h3>我的企业应用</h3>
    </div>
    <div class="apply-box">
      <ul>
        <li v-for="item in list"
            :key="item.id">
          <div class="apply-title-box">
            <div class="apply-title">
              {{ item.appName }}
            </div>
          </div>
          <div class="start-date">
            <span v-if="item.appId === 'E5CD4720' && item.applied">我的客户:<span>{{ cusSupStatistic.cusNum || '0' }}</span></span>
            <span v-if="item.appId === 'E5CD4719' && item.applied ">我的供应商:<span>{{ cusSupStatistic.supNum || '0'}}</span></span>
          </div>
          <div class="expiration-date">
            <span v-if="item.appId === 'E5CD4720' && item.applied">我的订单:<span>{{ cusSupStatistic.supPoNum || '0' }}</span></span>
            <span v-if="item.appId === 'E5CD4719'  && item.applied">累计采购单:<span>{{
                cusSupStatistic.purPoNum || '0'
              }}</span></span>
          </div>
          <div v-if="item.applied===false">
            <div>
              <span v-if="item.uver != 'SUP'" class="infoSpan">当前应用未开通</span>
			  <span v-if="item.uver == 'SUP'" class="infoSpan">如需开通,请联系平台客服人员</span>
            </div>
            <div>
				<el-button v-if="item.uver == 'SUP'" :disabled="true" class="margin-bottom-xs disabledstyle" type="primary" size="small">申请开通
				</el-button>
              <el-button v-if="item.uver != 'SUP'" class="margin-bottom-xs" type="primary" size="small" @click="handleApply(item)">申请开通
              </el-button>
            </div>
          </div>
          <div class="my-apply-btns" v-if="item.applied">
            <!-- <el-button @click="handleToCode(item)"
                       v-if="item.appId === 'E5CD4720'"
                       size="small"
                       type="text">关联采购商
            </el-button> -->
            <!-- <el-button @click="handleToCode(item)"
                       v-if="item.appId === 'E5CD4719'"
                       size="small"
                       type="text">邀请供应商
            </el-button> -->
            <el-button @click="handleToApply(item)"
                       size="small"
                       type="text">进入应用
            </el-button>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'my-corporate-application',
  props: {
    list: { type: Array, default: () => [] },
    code: { type: String, default: '' },
    cusSupStatistic: {
      type: Object, default: () => {
      }
    }
  },
  data() {
    return {
      isBlo: '',
      type: this.$store.getters.type
    }
  },
  mounted() {
    console.log(this.type)
    //localStorage.clear();
    //this.getMyApplication()
    this.getAppDetail()
  },
  methods: {
    getAppDetail() {
      let obj = { id: '5ee8deecb2a64982b449797b9a62a4a6' }
      this.$api.post(this.$lesUiPath.appDetail, obj).then(result => {
        if (result.code == 0) {
          console.log(result)
          this.isBlo = result.data.applied
        } else {
          return this.$message.error(result.msg)
        }
      })
    },
    handleToJump() {
      this.$router.push({ path: '/application/enterpriseApplications' })
    },
    // getMyApplication () {
    //   let data = {
    //     acpath: "/system/login"
    //   }
    //   this.$api.post(this.$lesUiPath.enterAppFindList, data ).then(result => {
    //     if (result.code == 0) {
    //       this.list = result.data.enterApps
    //       this.code = result.data.enterprise.invCode
    //       if(result.data.appCount != 0) {
    //         result.data.enterApps.map(x => {
    //           if(x.appId == 'E5CD4719'){
    //             localStorage.setItem('enterpriseId', x.id);
    //           }
    //           if(x.appId == 'E5CD4720'){
    //             localStorage.setItem('supplierId', x.id);
    //           }

    //         })
    //       }
    //     }
    //   })
    // },
    //跳转
    handleToApply(item) {
      if (item.appId) {
        let token = this.$store.getters.token
        window.open(this.$lesUiPath.enterAppRun + '?appId=' + item.appId + '&token=' + token)
      }
    },
    handleToCode(item) {
      if (item.appId == 'E5CD4719') {
        this.$router.push({
          path: '/application/enterpriseApplications/enterpriseCode',
          query: {
            params: this.code
          }
        })
      }
      if (item.appId == 'E5CD4720') {
        this.$router.push({
          path: '/application/enterpriseApplications/linkSupplier'
        })
      }
    },
    handleApply(item) {
      console.log(item)
      this.$router.push({
        path: '/application/appStore/applicationDetails',
        query: {
          params: item.id
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-corporate-application {
  background-color: #fff;
  overflow: hidden;
  padding: 16px;

  .my-corporate-title {
    overflow: hidden;
    border-bottom: 2px solid #f1f2f5;

    & > h3 {
      float: left;
      line-height: 40px;
      font-size: 18px;
    }

    .edit-btn {
      float: right;
    }
  }

  .apply-box {
    & > ul {
      height: 430px;
      // overflow: scroll;
      padding-top: 16px;

      & > li {
        float: left;
        width: 49%;
        line-height: 34px;
        text-align: center;
        // border-radius: 8px;
        //color: #000000;

        margin-bottom: 16px;
        font-size: 14px;
        cursor: pointer;
        border: 1px solid #ccc;
        .infoSpan{
          display: inline-block;
          padding: 16px 0 9px;
        }
        &:nth-child(2n) {
          float: right;
        }
      }
    }

    .apply-title {
	    background-color: rgba(83, 113, 146, 1);
      color: #fff;
    }

    .my-apply-btns {
      border-top: 1px solid #ccc;
    }
  }

  .enable {
    background-color: #4a90e257 !important;
    cursor: default !important;
  }
  .disabledstyle {
	background-color: #cccfd6 !important;
	border-color: #cccfd6 !important;
  }
}
</style>
