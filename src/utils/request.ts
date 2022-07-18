import axios from 'axios'

const service = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 3000
})

service.interceptors.request.use((config) => {
  return config
})
service.interceptors.response.use((response) => {
  return response
})

export default service
