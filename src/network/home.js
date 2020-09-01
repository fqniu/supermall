import {
  request
} from './request.js'

// 封装所有请求
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}