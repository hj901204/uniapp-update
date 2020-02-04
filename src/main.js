import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "./permission"
import "@/styles/reset.css"
import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

import Api from "./api/server/Api" // api 放置
import Path from "./api/server/path" // path放置
Vue.config.productionTip = false
Vue.use(Api)
Vue.use(Path)
Vue.use(Element)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
