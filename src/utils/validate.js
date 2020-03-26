/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

//只允许输入中文或字母
export function validateNumAndCh(rule, value, callback) {
  let reg = /^[\u0391-\uFFE5A-Za-z]+$/
  if (value) {
    if (reg.test(value)) {
      return callback()
    } else {
      return callback(new Error("只允许输入中文或字母"))
    }
  }
}
export function validateEmail(rule, value, callback) {
  // 邮箱验证正则
  let reg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/
  if (value) {
    if (reg.test(value)) {
      return callback(new Error("不允许邮箱注册"))
    } else {
      return callback()
    }
  }
}
