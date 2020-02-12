// 登陆
const baseUrl = "/supplyx"
const login = baseUrl + "/system/login/"
export default {
  install(Vue) {
    Vue.prototype.$lesUiPath = {
      login
    }
  }
}
