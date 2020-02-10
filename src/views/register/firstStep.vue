<template>
  <div class="first-step">
    <!-- <PageTitle /> -->
    <ProcessTitle :activeNum="1" />
    <!-- 表单部分 -->
    <div class="form-part">
      <div class="detail-info-form">
        <h3>企业详细信息</h3>
        <el-form
          ref="form"
          :model="form"
          size="mini"
          label-width="100px"
          class="infor-form"
        >
          <el-row>
            <el-col :span="11">
              <el-form-item label="企业名称" style="width:90%">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="联系电话" style="width:90%">
                <el-input v-model="form.tel"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="企业地址" style="width:90%">
                <el-input v-model="form.address"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="联系邮件" style="width:90%">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="企业简称" style="width:90%">
                <el-input v-model="form.shortname"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
      <div class="detail-info-form">
        <h3>主要联系人信息</h3>
        <el-form
          ref="form"
          :model="form"
          size="mini"
          label-width="100px"
          class="infor-form"
        >
          <el-row>
            <el-col :span="11">
              <el-form-item label="姓名" style="width:90%">
                <el-input v-model="form.username"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-form-item label="职位">
                <el-select
                  v-model="form.position"
                  placeholder="请选择"
                  style="width:88%"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>

      <div class="detail-info-form">
        <h3>企业账户信息</h3>
        <el-form
          ref="form"
          :model="form"
          size="mini"
          label-width="100px"
          class="infor-form"
        >
          <el-row>
            <el-col :span="11">
              <el-form-item
                label="管理员账号"
                style="width:90%;position:relative"
              >
                <el-input v-model="form.adminName"></el-input>
                <i
                  class="el-icon-info"
                  style="position:absolute;right:-200px;top:6px;"
                  ><span>管理员账号设置后不允许修改!</span>
                </i>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-form-item label="登陆密码" style="width:90%">
                <el-input v-model="form.loginPsd" type="password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="11">
              <el-form-item label="确认密码" style="width:90%">
                <el-input v-model="form.checkPsd" type="password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
    <div class="edit-btn">
      <el-button size="small" @click="handleBack">返回</el-button>
      <el-button type="primary" size="small" @click="handleNextStep"
        >下一步</el-button
      >
      <!-- <div @click="handleNextStep" class="next-btn"><span>下一步</span></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "first-step",
  components: {
    ProcessTitle: reslove =>
      require(["@/components/ProcessTitle/index.vue"], reslove),
    PageTitle: reslove => require(["@/components/PageTitle.vue"], reslove)
  },
  data() {
    return {
      form: { adminName: "" }, //表单
      options: [
        //职位选项
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ]
    }
  },
  methods: {
    handleNextStep() {
      this.$router.push({ path: "/register/secondStep" })
    },
    //返回
    handleBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.first-step {
  .form-part {
    text-align: left;
    .detail-info-form {
      margin-top: 32px;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      overflow: hidden;
      padding: 16px;
      & > h3 {
        line-height: 40px;
        font-size: 18px;
        border-bottom: 2px solid #f1f2f5;
        // font-weight: bold;
      }
      .infor-form {
        margin-top: 16px;
        .el-icon-info {
          color: #4a90e2;
          span {
            color: #606266;
            padding-left: 8px;
            font-size: 12px;
          }
        }
      }
    }
  }
  .edit-btn {
    text-align: left;
    margin-top: 20px;
    span {
      padding: 10px 30px;
      color: #fff;
      display: inline-block;
      background-color: #009966;
      cursor: pointer;
    }
  }
}
</style>
