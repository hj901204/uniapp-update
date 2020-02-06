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
    path: "/application"
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
        path: "/application/appStore"
      }
    },
    {
      path: "enterpriseApplications",
      component: () =>
        import("../views/applicationCenter/enterpriseApplications/index.vue"),
      name: "enterpriseApplications",
      redirect: "/application/enterpriseApplications/myApplication",
      meta: {
        title: "我的企业应用",
        breadcrumbTitle: "我的企业应用",
        breadcrumb: true,
        path: "/application/enterpriseApplications"
      },
      children: [
        {
          path: "myApplication",
          component: () =>
            import(
              "../views/applicationCenter/enterpriseApplications/myApplication"
            ),
          name: "myApplication",
          meta: {
            title: "我的应用",
            breadcrumbTitle: "我的应用",
            breadcrumb: true,
            path: "/application/enterpriseApplications/myApplication"
          }
        },
        {
          path: "applicationSetting",
          component: () =>
            import(
              "../views/applicationCenter/enterpriseApplications/applicationSetting/index.vue"
            ),
          name: "applicationSetting",
          meta: {
            title: "应用用户设置",
            breadcrumbTitle: "应用用户设置",
            breadcrumb: true,
            path: "/application/enterpriseApplications/applicationSetting"
          }
        }
      ]
    }
  ]
}
export default applicationRouter
