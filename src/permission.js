import router, { resetRouter, constantRoutes } from "./router"
import store from "./store"
import NProgress from "nprogress" // progress bar
import "nprogress/nprogress.css" // progress bar style
import { getToken, getAuthType } from "@/utils/auth" // get token from cookie

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

const whiteList = [
  "/login",
  "/forbidden",
  "/findPassword",
  "/register",
  "/register/firstStep",
  "/register/secondStep",
  "/register/thirdStep",
  "/register/fourthStep",
  "/register/lastStep"
] // no redirect whitelist

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
      let type = getAuthType() //返回的登陆类型  2普通用户  1管理员
      if (type) {
        store.dispatch("permission/generateRoutes", [type]).then(result => {
          resetRouter()
          router.addRoutes(result)
        })
        next()
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
