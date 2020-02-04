import { loginByUsername, logout, getUserInfo, getMenus } from "@/api/login"
import { getToken, setToken, removeToken } from "@/utils/auth"
const state = {
  user: "",
  status: "",
  code: "",
  token: getToken(),
  name: "",
  avatar: "",
  introduction: "",
  roles: [],
  menus: undefined,
  eleemnts: undefined,
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
          const token = "Bearer " + response.access_token
          commit("SET_TOKEN", token)
          setToken(token)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  // 获取用户信息
  GetUserInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getUserInfo(state.token)
        .then(response => {
          const data = response
          commit("SET_ROLES", "admin")
          commit("SET_NAME", data.name)
          commit(
            "SET_AVATAR",
            "http://img.zcool.cn/community/0173e757b32f630000018c1b8767fc.png@1280w_1l_2o_100sh.png"
          )
          commit("SET_INTRODUCTION", data.description)
          const menus = {}
          // todo 这里获取到的菜单有问题
          for (let i = 0; i < data.menus.length; i++) {
            menus[data.menus[i].code] = true
          }
          commit("SET_MENUS", menus)
          const elements = {}
          for (let i = 0; i < data.elements.length; i++) {
            elements[data.elements[i].code] = true
          }
          commit("SET_ELEMENTS", elements)
          resolve(response)
        })
        .catch(error => {
          reject(error)
        })
      getMenus().then(response => {
        commit(
          "SET_PERMISSION_MENUS",
          response.filter(v => v.title !== "移动端")
        )
      })
    })
  },
  // 登出
  LogOut({ commit, state }) {
    return new Promise((resolve, reject) => {
      const token = state.token
      commit("SET_TOKEN", "")
      logout(token)
        .then(() => {
          commit("SET_TOKEN", "")
          commit("SET_ROLES", [])
          commit("SET_MENUS", undefined)
          commit("SET_ELEMENTS", undefined)
          commit("SET_PERMISSION_MENUS", undefined)
          removeToken()
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
