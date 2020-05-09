<template>
  <div class="process-title">
    <ul class="process-list">
      <li
        :class="
          $route.path == '/register/firstStep' || activeNum == 1 ? 'active' : ''
        "
      >
        <i>1</i>
        <span>确认协议</span>
      </li>
      <li
        :class="
          $route.path == '/register/secondStep' ? 'line active-line' : 'line'
        "
      ></li>
      <li
        :class="
          $route.path == '/register/secondStep' || activeNum == 2
            ? 'active'
            : ''
        "
      >
        <i>2</i>
        <span>注册信息</span>
      </li>
      <li class="line"></li>
      <li>
        <i>3</i>
        <span>完成</span>
      </li>
      <!-- <li class="line"></li>
      <li>
        <i>4</i>
        <span>访问系统</span>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "process-title",
  props: { activeNum: { type: [Number, String], default: 0 } },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.process-title {
  // ul {
  //   overflow: hidden;
  //   li {
  //     box-sizing: border-box;
  //     float: left;
  //     width: 25%;
  //     h4 {
  //       border: 1px solid black;
  //       line-height: 40px;
  //     }
  //     .active {
  //       background-color: rgb(255, 153, 51);
  //     }
  //   }
  // }
  .process-list {
    overflow: hidden;
    padding: 0;
    margin: 0;
    padding-top: 24px;
    & > li {
      font-size: 14px;
      width: 14%;
      display: inline-block;
      vertical-align: middle;
      & > i {
        border-radius: 50%;
        border: 1px solid #7e7e7e7e;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        width: 24px;
        height: 24px;
        display: inline-block;
        font-style: normal;
        background-color: #fff;
        line-height: 25px;
        margin-right: 12px;
      }
    }
    .line {
      width: 14%;
      height: 2px;
      background-color: #7e7e7e7e;
    }
    .active {
      // background-color: rgb(255, 153, 51);
      & > i {
        background-color: #4a90e2;
        color: #fff;
      }
    }
    .active-line {
      background-color: #4a90e2;
    }
  }
}
</style>
