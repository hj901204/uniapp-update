import Vue from "vue"
import VueRouter from "vue-router"
import Login from "@/views/login/index.vue"
import Dashboard from "@/views/dashboard/index"
import ApplicationCenter from "@/views/applicationCenter/index"
import EnterpriseCenter from "@/views/enterpriseCenter/index"
import Help from "@/views/help/index"

Vue.use(VueRouter)

const routes = [
  // {
  //   path: "/",
  //   name: "login",
  //   component: Login
  // },
  {
    path: "/",
    redirect: "/dashboard"
  },
  //首页
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard"
  },
  //应用中心
  {
    path: "/application",
    component: ApplicationCenter,
    name: "applicaApplicationCentertion"
  },
  // 企业中心
  {
    path: "/enterprise",
    component: EnterpriseCenter,
    name: "EnterpriseCenter"
  },
  //帮助
  {
    path: "/help",
    component: Help,
    name: "Help"
  },
  //登陆页面
  {
    path: "/login",
    name: "login",
    component: Login
  }

  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

const router = new VueRouter({
  routes
})

export default router
