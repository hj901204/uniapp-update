// 登陆
const baseUrl = "/supplyx"
// 登陆
const login = baseUrl + "/system/login"
//企业注册
const enterpriseRegister = baseUrl + "/enterprise/register"
//获取验证码
const code = baseUrl + "/h/code/register"
//重置密码
const password = baseUrl + "/system/forgot"
//获取验证码-忘记密码
const forgetCode = baseUrl + "/h/code/forgot"
//忘记密码校验验证码
const checkCode = baseUrl + "/h/vcode"
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
const adminInfo = baseUrl + "/user/admin"
// 编辑管理员信息-保存
const editAdminInfo = baseUrl + "/user/upd"

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
//企业用户信息 人数
const enteruserFindCount = baseUrl + "/enteruser/findCount"
const enteruserLogin = baseUrl + "/log/daysaction"
const enteruserVisit = baseUrl + "/log/visits"
//--------------应用中心
// 查询我的应用列表
//const enterAppFindList = baseUrl + "/enterApp/findList"
const enterAppFindList = baseUrl + "/enterApp/findAppMessage"
//关联供应商
const supLinkEnter = baseUrl + "/enterApp/apply"
// 用户启动APP
// const enterAppRun = "http://47.105.182.148:8862" + baseUrl + "/application/run"
const enterAppRun = baseUrl + "/application/run"
//应用状态-用户活跃排行榜
const activeUserLeaderboard = baseUrl + "/log/daystopten"
//应用设定-查询列表
const enterAppUserFindList = baseUrl + "/enterAppUser/findList"
//应用设定-用户查询列表
const enterAppUserAppUser = baseUrl + "/enterAppUser/appUser"
//应用设定-用户添加
const enterAppUserAdd = baseUrl + "/enterAppUser/add"
//应用设定-用户删除
const enterAppUserRemove = baseUrl + "/enterAppUser/remove"
//应用设定-用户禁用修改
const enterAppUserEdit = baseUrl + "/enterAppUser/edit"
//

//-------------企业中心

//用户管理 -列表查询
const enteruserFindUserList = baseUrl + "/enteruser/findUserList"
//添加用户
// const enteruserAdd = baseUrl + "/enteruser/add"
const enteruserAdd = baseUrl + "/user/add"
//部门查询
const departFindDepartList = baseUrl + "/depart/findDepartList"
//修改用户
const enteruserUpdate = baseUrl + "/user/upd"
// const enteruserUpdate = baseUrl + "/enteruser/update"
//删除用户
const enteruserRemove = baseUrl + "/enteruser/remove"
//消息列表 查询
const smsFindList = baseUrl + "/sms/findList"
//消息列表 删除
const smsDelete = baseUrl + "/sms/delete"
//消息列表 已读
const smsRead = baseUrl + "/sms/read"

//部门管理
// 添加部门
const depart = baseUrl + "/depart/"

//查询部门树
const departTree = baseUrl + "/depart/tree"
//订单分享生成二维码 / 采购商邀请供应商注册
const createOrderQr = baseUrl + '/wxqr/getInvitationORShareLimitQr'
//企业邀请用户注册
// const getScanEnterQr = baseUrl + '/wxqr/getScanEnterQr'



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
      enterpriseFindEnt,
      enteruserFindCount,
      activeUserLeaderboard,
      enterAppUserFindList,
      enterAppUserAppUser,
      enteruserFindUserList,
      enteruserAdd,
      enteruserUpdate,
      departFindDepartList,
      enteruserRemove,
      smsFindList,
      smsDelete,
      smsRead,
      enterAppUserAdd,
      enterAppUserRemove,
      enterAppUserEdit,
      enteruserLogin,
      enterAppRun,
      code,
      password,
      forgetCode,
      enteruserVisit,
      supLinkEnter,
      checkCode,
      createOrderQr
    }
  }
}
