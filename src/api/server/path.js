// 登陆
const login = "/system/login/"
export default {
  install(Vue) {
    Vue.prototype.$lesUiPath = {
      login
    }
  }
}
