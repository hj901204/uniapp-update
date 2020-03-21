const getters = {
  token: state => state.user.token,
  type: state => state.user.type,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  permission_routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,
  permissionMenus: state => state.user.permissionMenus,
  errorLogs: state => state.errorLog.logs,
  menus: state => state.user.menus,
  elements: state => state.user.elements
}
export default getters
