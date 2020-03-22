// 企业中心
import EnterpriseCenter from "@/views/enterpriseCenter/index"

const enterprise = {
  path: "/enterprise",
  component: EnterpriseCenter,
  name: "EnterpriseCenter",
  meta: {
    title: "企业中心",
    breadcrumbTitle: "企业中心",
    breadcrumb: true,
    role: ["1", "2"]
  },
  redirect: "/enterprise/enterpriseInfo/basicInfo",
  children: [
    {
      path: "enterpriseInfo",
      component: () =>
        import("../views/enterpriseCenter/enterpriseInfo/index.vue"),
      name: "enterpriseInfo",
      redirect: "/enterprise/enterpriseInfo/basicInfo",
      meta: {
        title: "企业信息",
        breadcrumbTitle: "企业信息",
        breadcrumb: true,
        path: "/enterprise/enterpriseInfo",
        icon: "el-icon-my-qiye",
        role: ["1", "2"]
      },
      children: [
        {
          path: "basicInfo",
          component: () =>
            import(
              "../views/enterpriseCenter/enterpriseInfo/basicInfo/index.vue"
            ),
          name: "basicInfo",
          meta: {
            title: "企业基本信息",
            breadcrumbTitle: "企业基本信息",
            breadcrumb: true,
            path: "/enterprise/enterpriseInfo/basicInfo",
            icon: "el-icon-my-dian",
            role: ["1", "2"]
          }
        },
        {
          path: "adminInfo",
          component: () =>
            import(
              "../views/enterpriseCenter/enterpriseInfo/adminInfo/index.vue"
            ),
          name: "adminInfo",
          meta: {
            title: "管理员信息",
            breadcrumbTitle: "管理员信息",
            breadcrumb: true,
            path: "/enterprise/enterpriseInfo/adminInfo",
            icon: "el-icon-my-dian",
            role: ["1"]
          }
        }
      ]
    },
    {
      path: "messageCenter",
      component: () =>
        import("../views/enterpriseCenter/messageCenter/index.vue"),
      name: "messageCenter",
      redirect: "/enterprise/messageCenter/systemInfo",
      meta: {
        title: "消息中心",
        breadcrumbTitle: "消息中心",
        breadcrumb: true,
        path: "/enterprise/messageCenter",
        icon: "el-icon-my-xiaoxi",
        role: ["1", "2"]
      },
      children: [
        {
          path: "systemInfo",
          component: () =>
            import(
              "../views/enterpriseCenter/messageCenter/systemInfo/index.vue"
            ),
          name: "systemInfo",
          meta: {
            title: "系统信息",
            breadcrumbTitle: "系统信息",
            breadcrumb: true,
            path: "/enterprise/messageCenter/systemInfo",
            icon: "el-icon-my-dian",
            role: ["1", "2"]
          }
        },
        {
          path: "applyInfo",
          component: () =>
            import(
              "../views/enterpriseCenter/messageCenter/applyInfo/index.vue"
            ),
          name: "applyInfo",
          meta: {
            title: "应用信息",
            breadcrumbTitle: "应用信息",
            breadcrumb: true,
            path: "/enterprise/messageCenter/applyInfo",
            icon: "el-icon-my-dian",
            role: ["1", "2"]
          }
        }
      ]
    },
    {
      path: "userCenter",
      component: () => import("../views/enterpriseCenter/userCenter/index.vue"),
      name: "userCenter",
      redirect: "/enterprise/userCenter/userManagement",
      meta: {
        title: "用户中心",
        breadcrumbTitle: "用户中心",
        breadcrumb: true,
        path: "/enterprise/userCenter",
        icon: "el-icon-my-yonghu",
        role: ["1", "2"]
      },
      children: [
        {
          path: "userManagement",
          component: () =>
            import(
              "../views/enterpriseCenter/userCenter/userManagement/index.vue"
            ),
          name: "userManagement",
          meta: {
            title: "用户管理",
            breadcrumbTitle: "用户管理",
            breadcrumb: true,
            path: "/enterprise/userCenter/userManagement",
            icon: "el-icon-my-dian",
            role: ["1", "2"]
          }
        },
        {
          path: "departmentManagement",
          component: () =>
            import(
              "../views/enterpriseCenter/userCenter/departmentManagement/index.vue"
            ),
          name: "departmentManagement",
          meta: {
            title: "部门管理",
            breadcrumbTitle: "部门管理",
            breadcrumb: true,
            path: "/enterprise/userCenter/departmentManagement",
            icon: "el-icon-my-dian",
            role: ["1", "2"]
          }
        }
      ]
    }
    // {
    //   path: "costCenter",
    //   component: () => import("../views/enterpriseCenter/costCenter/index.vue"),
    //   name: "costCenter",
    //   meta: {
    //     title: "费用中心",
    //     breadcrumbTitle: "费用中心",
    //     breadcrumb: true,
    //     path: "/enterprise/costCenter",
    //     icon: "el-icon-my-feiyong"
    //   },
    //   children: [
    //     {
    //       path: "billInquiry",
    //       component: () =>
    //         import(
    //           "../views/enterpriseCenter/costCenter/billInquiry/index.vue"
    //         ),
    //       name: "billInquiry",
    //       meta: {
    //         title: "账单查询",
    //         breadcrumbTitle: "账单查询",
    //         breadcrumb: true,
    //         path: "/enterprise/costCenter/billInquiry",
    //         icon: "el-icon-my-dian"
    //       }
    //     },
    //     {
    //       path: "historicalBill",
    //       component: () =>
    //         import(
    //           "../views/enterpriseCenter/costCenter/historicalBill/index.vue"
    //         ),
    //       name: "historicalBill",
    //       meta: {
    //         title: "历史账单",
    //         breadcrumbTitle: "历史账单",
    //         breadcrumb: true,
    //         path: "/enterprise/costCenter/historicalBill",
    //         icon: "el-icon-my-dian"
    //       }
    //     }
    //   ]
    // }
  ]
}

export default enterprise
