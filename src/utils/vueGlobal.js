export default {
  install(Vue) {
    Vue.prototype.$global = {
      confirmConfig: {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        closeOnClickModal: false
      }
    }
  }
}
