import { loginByUsername, logout, getUserInfo, getMenus } from "@/api/login"
import {
  getToken,
  setToken,
  removeToken,
  getUserName,
  setUserName,
  removeUserName
} from "@/utils/auth"
const state = {
  user: "",
  status: "",
  code: "",
  token: getToken(),
  name: getUserName(),
  avatar: "",
  introduction: "",
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
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_SETTING: (state, setting) => {
    state.setting = setting
  },
  SET_STATUS: (state, status) => {
    state.status = status
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
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
          const token = "Bearer " + response.data.token
          const userName = response.data.userName
          commit("SET_TOKEN", token)
          commit("SET_NAME", userName)
          setToken(token)
          setUserName(userName)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  // 登出
  LogOut({ commit, state }) {
    return new Promise((resolve, reject) => {
      const token = state.token
      commit("SET_TOKEN", "")
      commit("SET_NAME", "")
      // commit("SET_MENUS", undefined)
      // commit("SET_ELEMENTS", undefined)
      // commit("SET_PERMISSION_MENUS", undefined)
      removeToken()
      removeUserName()
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
