export default {
  install(Vue) {
    Vue.prototype.$global = {
      confirmConfig: {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        closeOnClickModal: false
      },
      // 处理时间格式
      dateTime(time) {
        var d = new Date(time)
        var date =
          d.getFullYear() +
          "-" +
          (d.getMonth() + 1) +
          "-" +
          d.getDate() +
          " " +
          (d.getHours() < 10 ? "0" + d.getHours() : d.getHours()) +
          ":" +
          (d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()) +
          ":" +
          (d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds())
        return date
      }
    }
  }
}
