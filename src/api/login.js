import request from "@/utils/request"

//添加登录日志接口
export function loginAndLogoutLogApi(data) {
  return request({
    url: "/api/admin/gateLog/save",
    method: "post",
    data: data
  })
}
export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: "/supplyx/system/login",
    method: "post",
    data
    // transformRequest: [
    //   function(data) {
    //     // Do whatever you want to transform the data
    //     let ret = ""
    //     for (const it in data) {
    //       ret +=
    //         encodeURIComponent(it) + "=" + encodeURIComponent(data[it]) + "&"
    //     }
    //     return ret
    //   }
    // ],
    // headers: {
    //   "Content-Type": "application/x-www-form-urlencoded"
    // }
  })
}
export function logout(token) {
  return request({
    url: "/api/auth/oauth/token",
    method: "delete",
    params: {
      access_token: token
    }
  })
}

export function getUserInfo(token) {
  return request({
    url: "/api/admin/user/front/info",
    method: "get",
    params: {
      token
    }
  })
}

export function getMenus() {
  return request({
    url: "/api/admin/user/front/menus",
    method: "get"
  })
}
