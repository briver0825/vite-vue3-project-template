import { reactive, computed } from 'vue'
import { login } from '@/api/user'

const userInfo = reactive({
  token: null
})

const loginInfo = reactive({
  username: '',
  password: ''
})

const isLogin = computed(() => !!userInfo.token)

const doLogin = async () => {
  const result = await login(loginInfo)
  console.log(result)
  return result
}

const doLogout = () => {}

export const useUser = () => {
  return {
    loginInfo,
    doLogin,
    doLogout,
    isLogin
  }
}
