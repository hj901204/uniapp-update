import request from "@/utils/request"

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
