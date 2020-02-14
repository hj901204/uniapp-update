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

//--------------首页
//我的企业信息
const enterpriseFindEnt = baseUrl + "/enterprise/findEnt"
//企业用户信息 人数
const enteruserFindCount = baseUrl + "/enteruser/findCount"

//------------------------应用中心
// 查询我的应用列表
const enterAppFindList = baseUrl + "/enterApp/findList"
//应用状态-用户活跃排行榜
const activeUserLeaderboard = baseUrl + "/enterApp/activeUserLeaderboard"
//应用设定-查询列表
const enterAppUserFindList = baseUrl + "/enterAppUser/findList"
//应用设定-用户查询列表
const enterAppUserAppUser = baseUrl + "/enterAppUser/appUser"
//

//-------------------------企业中心

//用户管理 -列表查询
const enteruserFindUserList = baseUrl + "/enteruser/findUserList"
//添加用户
const enteruserAdd = baseUrl + "/enteruser/add"
//部门查询
const departFindDepartList = baseUrl + "/depart/findDepartList"
//修改用户
const enteruserUpdate = baseUrl + "/enteruser/update"
//删除用户
const enteruserRemove = baseUrl + "/enteruser/remove"

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
      appApply,
      enterAppFindList,
      enterpriseFindEnt,
      enteruserFindCount,
      activeUserLeaderboard,
      enterAppUserFindList,
      enterAppUserAppUser,
      enteruserFindUserList,
      enteruserAdd,
      enteruserUpdate,
      departFindDepartList,
      enteruserRemove
    }
  }
}
