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

// 企业中心
// 企业信息
// 企业基本信息
const enterpriseBasicInfo = baseUrl + "/enterprise/findEnt"
// 企业基本信息-修改
const editEnterpriseBasicInfo = baseUrl + "/enterprise/update"
// 管理员信息
const adminInfo = baseUrl + "/enteradmin/findList"
// 编辑管理员信息-保存
const editAdminInfo = baseUrl + "/enteradmin/update"

// 消息中心
// 系统信息
const systemInfo = baseUrl + "/sms/findList"
// 删除系统信息
const delSystemInfo = baseUrl + "/sms/delete"
// 应用信息
// const applyInfo = baseUrl + "/app/apply"

// // 用户中心
// // 用户管理-列表
// const usersList = baseUrl + "/app/apply"
// // 用户管理-添加用户
// const addUser = baseUrl + "/app/apply"
// // 用户管理-编辑用户
// const editUser = baseUrl + "/app/apply"
// // 部门管理
// // 部门管理-列表
// const deptList = baseUrl + "/app/apply"
// // 部门管理-添加部门
// const addDept = baseUrl + "/app/apply"
// // 部门管理-编辑部门
// const editDept = baseUrl + "/app/apply"
// // 部门管理-删除部门
// const delDept = baseUrl + "/app/apply"

// 费用中心
// 账单查询
// 历史账单

//--------------首页
//我的企业信息
const enterpriseFindEnt = baseUrl + "/enterprise/findEnt"

//--------------应用中心
// 查询我的应用列表
const enterAppFindList = baseUrl + "/enterApp/findList"

//-------------企业中心

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
      enterpriseBasicInfo,
      editEnterpriseBasicInfo,
      adminInfo,
      editAdminInfo,
      systemInfo,
      delSystemInfo,
      enterAppFindList,
      enterpriseFindEnt
    }
  }
}
