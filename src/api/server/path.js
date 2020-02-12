// 登陆
const baseUrl = "/supplyx"
// 登陆
const login = baseUrl + "/system/login"
//企业注册
const enterpriseRegister = baseUrl + "/enterprise/register"

export default {
  install(Vue) {
    Vue.prototype.$lesUiPath = {
      login,
      enterpriseRegister
    }
  }
}
