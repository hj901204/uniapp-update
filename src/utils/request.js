import axios from "axios"
import { MessageBox, Message } from "element-ui"
import store from "../store"
import { getToken, removeToken } from "@/utils/auth"

// create an axios instance
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      config.headers["X-Access-Token"] = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    } else {
      config.headers["X-Access-Token"] = "Basic dnVlOnZ1ZQ=="
    }
    return config
  },
  error => {
    // Do something with request error
    // console.log(error) // for debug
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    const res = response.data
    if (res.code == 1) {
      Message({
        message: res.msg,
        type: "error",
        duration: 5 * 1000
      })
      return Promise.reject("error")
    } else if (res.code == 40401) {
      //登陆过期
      Message({
        message: res.msg,
        type: "error",
        duration: 5 * 1000
      })
      store.dispatch("user/LogOut").then(() => {
        location.reload() // In order to re-instantiate the vue-router object to avoid bugs
      })
      return Promise.reject("error")
    } else if (res.code == 40103) {
      //用户密码错误
      Message({
        message: res.msg,
        type: "error",
        duration: 5 * 1000
      })
      return Promise.reject("error")
    } else if (res.code == 40102) {
      //应用过期
      Message({
        message: res.msg,
        type: "error",
        duration: 5 * 1000
      })
      return Promise.reject("error")
    } else {
      return res
    }
  },
  error => {
    // 错误拦截
    const response = error.response
  }
)

export default service
