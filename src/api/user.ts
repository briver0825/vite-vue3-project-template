import request from '@/utils/request'

enum Api {
  LOGIN = '/user/login'
}

export interface LoginInfo {
  username: string
  password: string
}

export async function login(loginInfo: LoginInfo) {
  return await request({
    url: Api.LOGIN,
    method: 'GET',
    params: loginInfo
  })
}
