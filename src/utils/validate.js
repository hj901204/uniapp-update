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
