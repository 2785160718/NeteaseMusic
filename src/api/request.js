import axios from "axios";

let ConfigBaseURL;
if (process.env.NODE_ENV == 'development') {
    ConfigBaseURL = 'http://localhost:3000/'
} else {
    ConfigBaseURL = '/xxx'
}




//使用create方法创建axios实例
export const request = axios.create({
    timeout: 7000, // 请求超时时间
    baseURL: ConfigBaseURL,
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json;charset=UTF-8'
    //   }
})
// 添加请求拦截器
request.interceptors.request.use(config => {

    return config
})
// 添加响应拦截器
request.interceptors.response.use(response => {

    // console.log(response)
    return response.data
}, error => {
    console.log('TCL: error', error)
    const msg = error.Message !== undefined ? error.Message : ''
    alert('网络错误')
    return Promise.reject(error)
})