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
//只允许输入数字或字母
export function validateNumAndEN(rule, value, callback) {
  let reg = /^[A-Za-z0-9]+$/
  if (value) {
    if (reg.test(value)) {
      return callback()
    } else {
      return callback(new Error("只允许输入数字或字母"))
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
//手机号和座机号正则
export function validatePhone(rule, value, callback) {
  var phoneReg = /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/ //手机号码
  var telReg = /^0\d{2,3}-?\d{7,8}$/ //座机号码
  if (value) {
    if (value.length == 11) {
      //手机号码
      if (phoneReg.test(value)) {
        return callback()
      }
    } else if (value.length == 13 && value.indexOf("-") != -1) {
      //固定电话
      if (telReg.test(value)) {
        return callback()
      }
    } else {
      return callback(new Error("请输入正确联系电话"))
    }
  }
}
 //保留两位小数 
 //功能：将浮点数四舍五入，取小数点后2位 
 export function toDecimal(x) { 
  var f = parseFloat(x); 
  if (isNaN(f)) { 
    return; 
  } 
  f = Math.round(x*100)/100; 
  return f; 
}