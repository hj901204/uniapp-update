import axios from "axios"
import { MessageBox, Message } from "element-ui"
import store from "../store"
import { getToken } from "@/utils/auth"

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
      config.headers.Authorization = getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    } else {
      config.headers.Authorization = "Basic dnVlOnZ1ZQ=="
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
    if (response.status === 401 || res.status === 40101) {
      MessageBox.confirm(
        "你已被登出，可以取消继续留在该页面，或者重新登录",
        "确定登出",
        {
          confirmButtonText: "重新登录",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(() => {
        store.dispatch("LogOut").then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      })
      return Promise.reject("error")
    }
    // if (response.status == 40131) {
    //   Message({
    //     message: '当前用户无相关操作权限！',
    //     type: 'error',
    //     duration: 1 * 1000
    //   })
    // }
    if (res.status === 40301 || response.status === 403 || res.status == 403) {
      if (response.status == 40131) {
        Message({
          message: "当前用户无相关操作权限！",
          type: "error",
          duration: 1 * 1000
        })
      } else {
        store.dispatch("LogOut").then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }
      return Promise.reject("error")
    }
    if (res.status === 40001) {
      Message({
        message: "账户或密码错误！",
        type: "warning"
      })
      return Promise.reject("error")
    }
    if (response.status !== 200 && res.status !== 200) {
      Message({
        message: res.message,
        type: "error",
        duration: 5 * 1000
      })
    } else {
      return response.data
    }
  },
  error => {
    // 错误拦截
    const response = error.response
    if (response.status === 401 || response.data.status === 40101) {
      store.dispatch("user/LogOut").then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
      return Promise.reject("error")
    }
    if (response.status === 401 || response.status === 403) {
      if (response.status == 40131 || response.data.status === 40131) {
        Message({
          message: "当前用户无相关操作权限！",
          type: "error",
          duration: 1 * 1000
        })
      } else {
        store.dispatch("LogOut").then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      }
      return Promise.reject("error")
    }
    if (
      response.data.message &&
      response.data.message.indexOf("ORA-12899") != -1
    ) {
      Message({
        message: "输入字符长度过长，请重新输入",
        type: "error"
      })
      return Promise.reject(error)
    }
    if (response.status === 500) {
      Message({
        message: response.data.message,
        type: "error",
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
    if (
      (response.data &&
        response.data.error_description === "Bad credentials" &&
        response.data.error === "invalid_grant") ||
      (response.data &&
        response.data.error_description ===
          "IUserService#getUserInfoByUsername(String) failed and no fallback available.")
    ) {
      Message({
        message: "用户名或者密码错误",
        type: "error",
        duration: 5 * 1000
      })
      return Promise.reject(error)
    }
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
