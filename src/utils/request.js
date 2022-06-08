import axios from 'axios'

const service = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 100000000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(res => {
    return res
  }, (error) => {
    return Promise.reject(error)
  }
)
export default service
