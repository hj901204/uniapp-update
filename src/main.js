import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./permission"
import "@/styles/reset.css"
import "./assets/iconfont/iconfont.css"
import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import "./styles/index.scss"

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'
import VueClipboard from "vue-clipboard2" //复制功能

import Api from "./api/server/Api" // api 放置
import Path from "./api/server/path" // path放置
import Global from "./utils/vueGlobal" // path放置
Vue.config.productionTip = false
import G2 from "@antv/g2"
Vue.use(G2)
Vue.use(Api)
Vue.use(Path)
Vue.use(Global)
Vue.use(Element)
Vue.use(VXETable)
Vue.use(VueClipboard)
Vue.prototype.$XModal = VXETable.modal
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
