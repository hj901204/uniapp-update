import { asyncRouterMap, constantRouterMap } from "../../router"
function hasPermission(roles, route) {
  if (route.meta && route.meta.role) {
    console.log(roles, route.meta.role)

    return roles.some(role => route.meta.role.indexOf(role) >= 0)
  } else {
    return true
  }
}
/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRouterMap
 * @param roles
 */
function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

const state = {
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constantRouterMap.concat(routes)
  }
}

const actions = {
  generateRoutes({ commit }, roles) {
    return new Promise(resolve => {
      let accessedRoutes
      if (roles.includes("1")) {
        accessedRoutes = asyncRouterMap || []
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRouterMap, roles)
      }
      commit("SET_ROUTES", accessedRoutes)
      resolve(accessedRoutes)
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
