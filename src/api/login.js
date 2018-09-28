import request from './interceptors'

export function loginByUsername (username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/api/login',
    method: 'post',
    data
  })
}

export function upload(formdata) {
  return request({
    url: '/api/uploadMutiple',
    method: 'post',
    data: formdata,
    headers:{
      "content-type":"multipart/*"
    }
  })
}

export function registry(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/api/registry',
    method: 'post',
    data
  })
}

export function logout () {
  return request({
    url: '/api/logout',
    method: 'get'
  })
}

export function alluser() {
  return request({
    url: '/api/allUser',
    method: 'get'
  })
}

export function getUserInfo (userId) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { userId }
  })
}
