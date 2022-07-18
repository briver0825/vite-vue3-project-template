import { login, LoginInfo } from '@/api/user'
import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state() {
    return {
      userInfo: {
        token: null
      }
    }
  },
  actions: {
    doLogin: async (loginInfo: LoginInfo) => {
      const result = await login(loginInfo)
      console.log(result)
      return result
    }
  },
  getters: {
    isLogin: (state) => !!state.userInfo.token
  }
})
