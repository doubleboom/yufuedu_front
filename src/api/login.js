import request from './interceptors'

export function loginByUsername (username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function logout () {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo (userId) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { userId }
  })
}
