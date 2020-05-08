<template>
  <div class="container">
    <div class="content">
      <div ><img class="forbiddenImg" src="@/assets/img/guanbi.png" alt=""></div>
      <div class="font">账号异常</div>
      <div class="fontType">您的账号可能发生以下情况，请拨打官方热线寻求帮助</div>
      <div class="type">
        <div class="title">您提交的内容有如下错误:</div>
        <ul>
          <li><img class="liImg" src="@/assets/img/guanbi-2.png" alt=""><span style="vertical-align: super;">你的企业账号已被停用</span></li>
          <li><img class="liImg" src="@/assets/img/guanbi-2.png" alt=""><span style="vertical-align: super;">你的个人账号被停用</span></li>
          <li><img class="liImg" src="@/assets/img/guanbi-2.png" alt=""><span style="vertical-align: super;">没有关联的企业</span></li>
        </ul>
      </div>
      <div class="return">
         <el-button type="primary"
                    size="small"
                    @click="handleBack">返回登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data () {
    return {
    }
  },
  methods: {
    handleBack(){
      this.$router.push({path:'/login'})
    }
  }
}
</script>
<style lang="scss">

.container {
  width: 70%;
  margin: auto;
  height: 100%;
  .forbiddenImg{
    width: 50px;
    height: 50px;
    color: #ffffff;
  }
  .font{
    font-size: 16px;
    padding: 20px;
    color: #000000;
  }
  .fontType{
    font-size: 12px;
    color: #606266;
    margin-bottom: 20px;
  }
  .type{
    width: 70%;
    margin: 0 auto;
    background-color: #e4e7ed;
    text-align: left;
    padding: 20px 30px;
    .title{
      font-size: 14px;
      margin: 8px 0;
    }
    ul li {
      img{
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
      padding: 0;
      margin: 5px;
      font-size: 12px;
    }
  }
  .return{
    margin-top: 20px;
  }
  .content{
    margin:15% auto;
    
  }
  
}
</style>
