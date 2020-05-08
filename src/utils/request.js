import axios from "axios"
import { MessageBox, Message } from "element-ui"
import store from "../store"
import { getToken, removeToken } from "@/utils/auth"

// create an axios instance
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  timeout: 30000 // 请求超时时间
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
    // console.log("-------------------------------返回开始----------------------------");    
    // console.log(res);
    // console.log("-------------------------------返回结束----------------------------");   
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
    // } else if (res.code == 40103) {
    //   //用户密码错误
    //   Message({
    //     message: res.msg,
    //     type: "error",
    //     duration: 5 * 1000
    //   })
    //   return Promise.reject("error")
  } else if (res.code == 40102 || res.code == 40103) {
    if(res.code == 40103 && res.msg.indexOf("停用") != -1){
      window.location.href = '/#/forbidden'
    }else{
       //应用过期
        Message({
          message: res.msg,
          type: "error",
          duration: 5 * 1000
        })
        removeToken()
        removeUserName()
        window.location.href = res.data.url
    }
    } else {
      return res
    }
  },
  error => {
    if (error && error.response) {
      switch (error.response.status) {
          case 400: error.message = '请求错误(400)'; break;
          case 401: error.message = '未授权，请重新登录(401)'; break;
          case 403: error.message = '拒绝访问(403)'; break;
          case 404: error.message = '请求出错(404)'; break;
          case 408: error.message = '请求超时(408)'; break;
          case 500: error.message = '服务器错误(500)'; break;
          case 501: error.message = '服务未实现(501)'; break;
          case 502: error.message = '网络错误(502)'; break;
          case 503: error.message = '服务不可用(503)'; break;
          case 504: error.message = '网络超时(504)'; break;
          case 505: error.message = 'HTTP版本不受支持(505)'; break;
          default: error.message = `连接出错(${err.response.status})!`;
      }
  } else {
    error.message = '连接服务器失败!'
  }

  Message({
    message: error.message,
    type: "error",
    duration: 5 * 1000
  })
  return Promise.resolve(error);
    // 错误拦截
    //const response = error.response
  }
)

export default service
