import request from '@/utils/request'

export function fetchTree(query) {
  return request({
    url: '/api/admin/menu/tree',
    method: 'get',
    params: query
  })
}

export function fetchAll() {
  return request({
    url: '/api/admin/menu/all',
    // url: '/mockapi/api/admin/menu/all',
    method: 'get'
  })
}
export function addObj(obj) {
  return request({
    url: '/api/admin/menu',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/api/admin/menu/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/api/admin/menu/' + id,
    method: 'delete'
  })
}

export function putObj(id, obj) {
  return request({
    url: '/api/admin/menu/' + id,
    method: 'put',
    data: obj
  })
}

export function getRouterTree() {
  return request({
    url: '/api/admin/menu/router/tree',
    method: 'get'
  })
}

export function getComponentList(name) {
  return request({
    url: `/api/admin/component/list?name=${name}`,
    method: 'get'
  })
}
export function handleSelectTenant(data) {
  return request({
    url: '/api/admin/menu/setMenuForTenant ',
    method: 'post',
    data: data
  })
}
