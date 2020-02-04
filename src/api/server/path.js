import globalData from "@/api/global"

// 工厂信息
const getTmOrg = globalData.baseUrl + "/tmOrg/"
export default {
  install(Vue) {
    Vue.prototype.$lesUiPath = {
      getTmOrg
    }
  }
}
