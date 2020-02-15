const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  permissionMenus: state => state.user.permissionMenus,
  errorLogs: state => state.errorLog.logs,
  menus: state => state.user.menus,
  elements: state => state.user.elements
}
export default getters
