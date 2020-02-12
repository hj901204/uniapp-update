const baseUrl = "/supplyx"
// 登陆
const login = "/baseUrl" + "/system/login/"
export default {
  install(Vue) {
    Vue.prototype.$lesUiPath = {
      login
    }
  }
}
