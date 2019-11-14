// 封装一个ajax请求
import axios from 'axios'
export default function ajax (url = '', params = {}, type = 'GET') {
  let promise
  return new Promise((resolve, reject) => {
    if (type.toUpperCase() === 'GET') {
      let paramsStr
      Object.keys(params).forEach((item) => {
        paramsStr += item + '=' + params[item] + '&'
      })
      // 清除最后一个&符号
      if (paramsStr) {
        paramsStr = paramsStr.slice(0, paramsStr.length - 1)
      }
      // 拼接url路径
      url = url + '?' + paramsStr
      // 设置请求缓存
      promise = axios.get(url)
    } else if (type.toUpperCase() === 'POST') {
      promise = axios.post(url, params)
    }
    // 将返回的promise对象进行数据获取
    promise.then((res) => {
      // 数据成功拿到，调用resolve成功返回
      resolve(res.data)
    }).catch((err) => {
      reject(err)
    })
  })
}
