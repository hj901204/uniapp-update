// 登陆
const baseUrl = "/supplyx"
// 登陆
const login = baseUrl + "/system/login"
//企业注册
const enterpriseRegister = baseUrl + "/enterprise/register"
// 应用中心-应用商城
const appStore = baseUrl + "/app/findList"
// 应用详情
const appDetail = baseUrl + "/app/detail"
// 立即申请
const appApply = baseUrl + "/app/apply"

//企业中心

//部门管理
// 添加部门
const depart = baseUrl + "/depart/"

//查询部门树
const departTree = baseUrl + "/depart/tree"

export default {
  install(Vue) {
    Vue.prototype.$lesUiPath = {
      login,
      enterpriseRegister,
      depart,
      departTree,
      appStore,
      appDetail,
      appApply
    }
  }
}
