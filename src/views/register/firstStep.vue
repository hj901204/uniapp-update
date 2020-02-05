<template>
  <div class="first-step">
    <PageTitle />
    <ProcessTitle />
    <!-- 表单部分 -->
    <div class="form-part">
      <fieldset>
        <legend>企业详细信息</legend>
        <el-form
          ref="form"
          :model="form"
          size="mini"
          label-width="80px"
          class="infor-form"
        >
          <el-form-item label="企业名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="企业地址">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="企业编码">
            <el-input v-model="form.num"></el-input>
          </el-form-item>
          <el-form-item label="企业简称">
            <el-input v-model="form.shortname"></el-input>
          </el-form-item>
        </el-form>
      </fieldset>
      <fieldset>
        <legend>主要联系人信息</legend>
        <el-form
          ref="form"
          :model="form"
          size="mini"
          label-width="80px"
          class="infor-form"
        >
          <el-form-item label="姓名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="职位">
            <el-select
              v-model="form.position"
              placeholder="请选择"
              style="width:100%"
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
        </el-form>
      </fieldset>
      <fieldset>
        <legend>企业账户信息</legend>
        <el-form
          ref="form"
          :model="form"
          size="mini"
          label-width="80px"
          class="infor-form"
        >
          <el-form-item label="联系邮件">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="联系电话">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="登陆密码">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
        </el-form>
      </fieldset>
    </div>
    <div @click="handleNextStep" class="next-btn"><span>下一步</span></div>
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
      form: {}, //表单
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
    }
  }
}
</script>

<style lang="scss" scoped>
.first-step {
  .form-part {
    fieldset {
      text-align: left;
      padding-top: 20px;
      padding-left: 40px;
      box-sizing: border-box;
      margin-top: 20px;
      .infor-form {
        width: 70%;
      }
    }
  }
  .next-btn {
    text-align: right;
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
