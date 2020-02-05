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
    component: Login,
    meta: {
      title: "登陆"
    }
  },
  //注册页面
  {
    path: "/register",
    name: "register",
    meta: {
      title: "企业注册流程"
    },
    component: () => import("../views/register"),
    children: [
      {
        path: "firstStep",
        name: "firstStep",
        meta: {
          title: "填写详细信息",
          showRoute: false
        },
        component: () => import("../views/register/firstStep.vue")
      },
      {
        path: "secondStep",
        name: "secondStep",
        meta: {
          title: "注册信息提交结果",
          showRoute: false
        },
        component: () => import("../views/register/secondStep.vue")
      },
      {
        path: "thirdStep",
        name: "thirdStep",
        meta: {
          title: "获得企业ID和管理账号",
          showRoute: false
        },
        component: () => import("../views/register/thirdStep.vue")
      },
      {
        path: "fourthStep",
        name: "fourthStep",
        meta: {
          title: "登陆访问系统",
          showRoute: false
        },
        component: () => import("../views/register/fourthStep.vue")
      }
    ]
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
