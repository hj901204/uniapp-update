//应用中心
import ApplicationCenter from "@/views/applicationCenter/index"

const applicationRouter = {
  path: "/application",
  component: ApplicationCenter,
  name: "applicaApplicationCentertion",
  meta: {
    title: "应用中心",
    breadcrumbTitle: "应用中心",
    breadcrumb: true,
    path: "/application",
    leftNav: true
  },
  redirect: "/application/appStore",
  children: [
    {
      path: "appStore",
      component: () => import("../views/applicationCenter/appStore/index.vue"),
      name: "appStore",
      meta: {
        title: "应用商城",
        breadcrumbTitle: "应用商城",
        breadcrumb: true,
        path: "/application/appStore",
        isOnlyRoute: true, //用来左侧菜单栏隐藏路由的作用
        icon: "el-icon-my-shangcheng"
      },
      children: [
        {
          path: "applicationDetails",
          component: () =>
            import(
              "../views/applicationCenter/appStore/applicationDetails/index.vue"
            ),
          name: "applicationDetails",
          meta: {
            title: "应用详情",
            breadcrumbTitle: "应用详情",
            breadcrumb: true,
            path: "/application/appStore/applicationDetails"
          }
        },
        {
          path: "apply",
          component: () =>
            import("../views/applicationCenter/appStore/apply/index.vue"),
          name: "apply",
          meta: {
            title: "应用申请",
            breadcrumbTitle: "应用申请",
            breadcrumb: true,
            path: "/application/appStore/apply"
          }
        }
      ]
    },
    {
      path: "enterpriseApplications",
      component: () =>
        import("../views/applicationCenter/enterpriseApplications/index.vue"),
      name: "enterpriseApplications",
      // redirect: "/application/enterpriseApplications/myApplication",
      meta: {
        title: "我的企业应用",
        breadcrumbTitle: "我的企业应用",
        breadcrumb: true,
        path: "/application/enterpriseApplications",
        isOnlyRoute: true, //用来左侧菜单栏隐藏路由的作用
        icon: "el-icon-my-yingyong"
      },
      children: [
        {
          path: "applicationStatus",
          component: () =>
            import(
              "../views/applicationCenter/enterpriseApplications/applicationStatus"
            ),
          name: "applicationStatus",
          meta: {
            title: "应用状态",
            breadcrumbTitle: "应用状态",
            breadcrumb: true,
            path: "/application/enterpriseApplications/applicationStatus"
          },
          children: [
            {
              path: "Renew",
              component: () =>
                import(
                  "../views/applicationCenter/enterpriseApplications/applicationStatus/Renew"
                ),
              name: "Renew",
              meta: {
                title: "应用续费",
                breadcrumbTitle: "应用续费",
                breadcrumb: true,
                path:
                  "/application/enterpriseApplications/applicationStatus/Renew"
              }
            }
          ]
        },
        {
          path: "applicationSetting",
          component: () =>
            import(
              "../views/applicationCenter/enterpriseApplications/applicationSetting/index.vue"
            ),
          name: "applicationSetting",
          meta: {
            title: "用户设定",
            breadcrumbTitle: "用户设定",
            breadcrumb: true,
            path: "/application/enterpriseApplications/applicationSetting"
          }
        },
        {
          path: "enterpriseCode",
          component: () =>
            import(
              "../views/applicationCenter/enterpriseApplications/enterpriseCode/index.vue"
            ),
          name: "enterpriseCode",
          meta: {
            title: "邀请供应商",
            breadcrumbTitle: "邀请供应商",
            breadcrumb: true,
            path: "/application/enterpriseApplications/enterpriseCode"
          }
        },
        {
          path: "linkSupplier",
          component: () =>
            import(
              "../views/applicationCenter/enterpriseApplications/linkSupplier/index.vue"
            ),
          name: "linkSupplier",
          meta: {
            title: "关联采购商",
            breadcrumbTitle: "关联采购商",
            breadcrumb: true,
            path: "/application/enterpriseApplications/linkSupplier"
          }
        }
      ]
    }
  ]
}
export default applicationRouter
