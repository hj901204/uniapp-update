// import Vue from "vue"
// import VueRouter from "vue-router"
import Login from "@/views/login/index.vue"
import Forbidden from "@/views/forbidden/forbidden.vue"
import Dashboard from "@/views/dashboard/index"
import FindPassword from "@/views/findPassword/index.vue"

import Help from "@/views/help/index"

import applicationRouter from "./application"
import enterprise from "./enterprise"
// Vue.use(VueRouter)

export const constantRoutes = [
  // {
  //   path: "/",
  //   name: "login",
  //   component: Login
  // },
  {
    path: "/",
    redirect: "/dashboard",
    meta: {
      title: "首页",
      breadcrumbTitle: "首页",
      breadcrumb: true
    }
  },
  //首页
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard",
    meta: {
      title: "首页",
      breadcrumbTitle: "首页",
      breadcrumb: true,
      icon:"el-icon-s-home",
    }
  },
  //应用中心
  applicationRouter,
  enterprise,

  //帮助
  {
    path: "/help",
    component: Help,
    name: "Help",
    meta: {
      title: "帮助中心",
      breadcrumbTitle: "帮助中心",
      breadcrumb: true,
      icon:"el-icon-collection-tag"
    }
  },
  //登陆页面
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      title: "登陆",
      breadcrumbTitle: "登陆",
      breadcrumb: true
    }
  },
  //禁用
  {
    path: "/forbidden",
    name: "forbidden",
    component: Forbidden,
    meta: {
      title: "禁用",
      breadcrumbTitle: "禁用",
      breadcrumb: true
    }
  },
  //忘记密码
  {
    path: "/findPassword",
    name: "findPassword",
    component: FindPassword,
    meta: {
      title: "找回密码",
      breadcrumbTitle: "找回密码",
      breadcrumb: true
    }
  },
  //注册页面
  {
    path: "/register",
    name: "register",
    meta: {
      title: "企业注册流程",
      breadcrumbTitle: "注册",
      breadcrumb: true
    },
    component: () => import("../views/register"),
    children: [
      {
        path: "firstStep",
        name: "firstStep",
        meta: {
          title: "填写详细信息",
          showRoute: false,
          breadcrumb: false
        },
        component: () => import("../views/register/firstStep.vue")
      },
      {
        path: "secondStep",
        name: "secondStep",
        meta: {
          title: "注册信息提交结果",
          showRoute: false,
          breadcrumb: false
        },
        component: () => import("../views/register/secondStep.vue")
      },
      {
        path: "thirdStep",
        name: "thirdStep",
        meta: {
          title: "获得企业ID和管理账号",
          showRoute: false,
          breadcrumb: false
        },
        component: () => import("../views/register/thirdStep.vue")
      },
      {
        path: "fourthStep",
        name: "fourthStep",
        meta: {
          title: "登陆访问系统",
          showRoute: false,
          breadcrumb: false
        },
        component: () => import("../views/register/fourthStep.vue")
      },
      {
        path: "lastStep",
        name: "lastStep",
        meta: {
          title: "完成",
          showRoute: false,
          breadcrumb: false
        },
        component: () => import("../views/register/end.vue")
      }
    ]
  }
]

const createRouter = () =>
  new VueRouter({
    // mode: 'history', // require service support
    // scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = new VueRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
