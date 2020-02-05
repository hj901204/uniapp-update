<template>
  <div class="process-title">
    <ul>
      <li>
        <h4 :class="$route.path == '/register/firstStep' ? 'active' : ''">
          1. 填写基本信息
        </h4>
      </li>
      <li>
        <h4 :class="$route.path == '/register/secondStep' ? 'active' : ''">
          2. 提交您的信息并等待确认
        </h4>
      </li>
      <li>
        <h4>3. 获得企业ID以及管理账号</h4>
      </li>
      <li>
        <h4>4. 登陆访问系统</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "process-title",
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.process-title {
  ul {
    overflow: hidden;
    li {
      box-sizing: border-box;
      float: left;
      width: 25%;
      h4 {
        border: 1px solid black;
        line-height: 40px;
      }
      .active {
        background-color: rgb(255, 153, 51);
      }
    }
  }
}
</style>
