import axios from 'axios'

const service = axios.create({
  baseUrl: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    // 请求前加参数
    config.headers['token'] = 'xx'

    return config
  },
  error => {
    console.log(error)

    return Promise.reject(error)
  }

)

service.interceptors.response.use(
  response => {
    const res = response.data

    // 处理结果信息

    if (res.code === -1) {
      location.reload()
    } else {
      return res
    }
  },
  error => {
    return Promise.reject(error)
  }

)

export default service
