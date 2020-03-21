import Vue from "vue"
import VueRouter from "vue-router"
import Login from "@/views/login/index.vue"
import Dashboard from "@/views/dashboard/index"

import Help from "@/views/help/index"

import applicationRouter from "./application"
import enterprise from "./enterprise"
Vue.use(VueRouter)

export const constantRouterMap = [
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
      breadcrumb: true
    }
  },
  //应用中心
  applicationRouter,

  //帮助
  {
    path: "/help",
    component: Help,
    name: "Help",
    meta: {
      title: "帮助中心",
      breadcrumbTitle: "帮助中心",
      breadcrumb: true
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
//实例化vue的时候只挂载constantRouter
export default new VueRouter({
  routes: constantRouterMap
})
//异步挂载的路由
//动态需要根据权限加载的路由表
export const asyncRouterMap = enterprise
