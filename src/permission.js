import router from "./router"
import store from "./store"
import { Message, Form } from "element-ui"
import NProgress from "nprogress" // progress bar
import "nprogress/nprogress.css" // progress bar style
import { getToken } from "@/utils/auth" // get token from cookie
// import getPageTitle from "@/utils/get-page-title"

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

const whiteList = [
  "/login",
  "/register",
  "/register/firstStep",
  "/register/secondStep",
  "/register/thirdStep",
  "/register/fourthStep"
] // no redirect whitelist

// permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf("admin") >= 0) return true // admin permission passed directly
  if (!permissionRoles) return true
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

router.beforeEach((to, from, next) => {
  NProgress.start()
  // 判断是否获取到本地存储的token,
  //如果有就拉取用户信息;
  //如果没有就跳转到登陆页面
  if (getToken()) {
    if (whiteList.indexOf(to.path) != -1) {
      next({ path: "/" })
      NProgress.done()
    } else {
      //拉取用户信息

      // 判断用户是否已经拉取信息
      if (store.getters.menus === undefined) {
        store.dispatch("user/GetUserInfo").then(info => {
          if (info.id) {
            next()
          }
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next("/login") // 否则全部重定向到登录页
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
