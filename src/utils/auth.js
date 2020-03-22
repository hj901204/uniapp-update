import Cookies from "js-cookie"

const TokenKey = "Token"
const userNameKey = "userName"
const authTypeKey = "authType"
const routesKey = "accessedRoutes"

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

// 用户名
export function getUserName() {
  return Cookies.get(userNameKey)
}

export function setUserName(userName) {
  return Cookies.set(userNameKey, userName)
}

export function removeUserName() {
  return Cookies.remove(userNameKey)
}

// 用户类型
export function getAuthType() {
  return Cookies.get(authTypeKey)
}

export function setAuthType(authType) {
  return Cookies.set(authTypeKey, authType)
}

export function removeAuthType() {
  return Cookies.remove(authTypeKey)
}
