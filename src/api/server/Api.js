import request from "@/utils/request"

const pathSuffix = {
  get: "page",
  add: "add",
  update: "update",
  del: "delete",
  details: "details",
  export: "export",
  custom: "custom"
}

export default {
  install(Vue) {
    function Api(headers) {
      // this.headers = headers
    }

    Api.prototype.get = (url, config) => {
      return request({
        url: url,
        method: "get",
        params: config
      })
    }

    Api.prototype.post = async (url, config, params) =>  {
      return await request({
        url: url,
        method: "post",
        data: config,
        params: params
      })
    }

    Api.prototype.update = (url, config) => {
      return request({
        url: url,
        method: "put",
        data: config
      })
    }

    Api.prototype.delete = (url, config) => {
      return request({
        url: url,
        method: "delete"
      })
    }

    Api.prototype.findList = (url, config) => {
      return request({
        url: url + pathSuffix.get,
        method: "post",
        data: config
      })
    }
    Api.prototype.custom = (url, config) => {
      return request({
        url: url + pathSuffix.custom,
        method: "post",
        data: config
      })
    }
    Api.prototype.addData = (url, config) => {
      return request({
        url: url + pathSuffix.add,
        method: "post",
        data: config
      })
    }

    Api.prototype.updateData = (url, config) => {
      return request({
        url: url + pathSuffix.update,
        method: "post",
        data: config
      })
    }

    Api.prototype.delData = (url, config) => {
      return request({
        url: url + pathSuffix.del,
        method: "post",
        data: config
      })
    }

    Api.prototype.getById = (url, config) => {
      return request({
        url: url + pathSuffix.details,
        method: "post",
        data: config
      })
    }
    Api.prototype.export = (url, config) => {
      return request({
        url: url + pathSuffix.export,
        method: "post",
        data: config,
        responseType: "blob"
      })
    }

    Vue.prototype.$api = new Api()
  }
}
