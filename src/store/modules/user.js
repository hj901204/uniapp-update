import { loginByUsername } from '@/api/login'
import { Message } from 'element-ui'
import {
  getToken,
  setToken,
  removeToken,
  getUserName,
  setUserName,
  removeUserName,
  getAuthType,
  setAuthType,
  removeAuthType
} from '@/utils/auth'

const state = {
  user: '',
  code: '',
  token: getToken(), //token
  name: getUserName(), // 登录名
  type: '',
  introduction: '',
  roles: [],
  menus: undefined,
  elements: undefined,
  permissionMenus: undefined,
  setting: {
    articlePlatform: []
  }
}
const mutations = {
  SET_CODE: (state, code) => {
    state.code = code
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_AUTHTYPE: (state, type) => {
    state.type = type
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_SETTING: (state, setting) => {
    state.setting = setting
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_PERMISSION_MENUS: (state, permissionMenus) => {
    state.permissionMenus = permissionMenus
  },
  SET_MENUS: (state, menus) => {
    state.menus = menus
  },
  SET_ELEMENTS: (state, elements) => {
    state.elements = elements
  }
}
const actions = {
  // 用户名登录
  LoginByUsername({ commit }, userInfo) {
    const username = userInfo.username.trim()
    const password = userInfo.password

    return new Promise((resolve, reject) => {
      loginByUsername(username, password)
        .then(response => {
          if (response.code == 0) {
            console.log(response,'type')
            const token = response.data.token
            const type = response.data.authType.toString()
            let userName = ''
            if (type == '1') {
              userName = response.data.name
            } else {
              userName = response.data.name
            }

            commit('SET_TOKEN', token)
            commit('SET_NAME', userName)
            setToken(token)
            setUserName(userName)
            setAuthType(type)
            // resetRouter()
            resolve()
          } else {
            Message({
              message: response.msg,
              type: 'error'
            })
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  getInfo({ commit, state }) {
    const userType = getAuthType()
    commit('SET_AUTHTYPE', userType)
  },
  // 登出
  LogOut({ commit, state }) {
    return new Promise((resolve, reject) => {
      const token = state.token
      commit('SET_TOKEN', '')
      commit('SET_NAME', '')
      commit('SET_AUTHTYPE', '')
      removeToken()
      removeUserName()
      removeAuthType()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
