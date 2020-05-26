import router, { resetRouter, constantRoutes } from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken, getAuthType } from '@/utils/auth' // get token from cookie

NProgress.configure({
  showSpinner: false
}) // NProgress Configuration

const whiteList = [
  '/login',
  '/forbidden',
  '/findPassword',
  '/register',
  '/register/firstStep',
  '/register/secondStep',
  '/register/thirdStep',
  '/register/fourthStep',
  '/register/lastStep'
] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  // 判断是否获取到本地存储的token,
  //如果有就拉取用户信息;
  //如果没有就跳转到登陆页面
  if (getToken()) {
    if (whiteList.indexOf(to.path) !== -1) {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      if (store.getters.type === '') {
        await store.dispatch('user/getInfo', {}).then(async() => {
          const routerAdd = await store.dispatch('permission/generateRoutes', [store.getters.type])
          resetRouter()
          router.addRoutes(routerAdd)
          next()
        })
      } else {
        next()
        NProgress.done()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})
router.afterEach(() => {
  NProgress.done() // finish progress bar
})
