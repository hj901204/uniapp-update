import router from "./router"
import store from "./store"
import NProgress from "nprogress" // progress bar
import "nprogress/nprogress.css" // progress bar style
import { getToken, getRoute, getAuthType } from "@/utils/auth" // get token from cookie
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
  if (roles.indexOf("1") >= 0) return true // admin permission passed directly
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
      if (getAuthType()) {
        //获得用户登陆类型
        let type = getAuthType()

        store.dispatch("permission/generateRoutes", [type]).then(result => {
          // 生成可访问的路由表
          console.log(result)
          router.addRoutes(result) // 动态添加可访问路由表

          next() // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
        })
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
