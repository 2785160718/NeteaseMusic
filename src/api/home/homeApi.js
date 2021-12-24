import { request } from '../request.js'
import axios from "axios";

let baseURL;
if (process.env.NODE_ENV == 'development') {
    baseURL = 'http://localhost:3000/'
} else {
    baseURL = '/xxx'
}
// 首页轮播
export function GetBanners(data) {
    // return request({methods:'Get',params:{...data},url:'banner'})
    // return axios.get(`${baseURL}banner`, { params: { ...data } })
    return request({
        url: 'banner',
        params: { ...data },
        method:'get'
    })
}
// 首页发现歌单
export function GetSearchSongList(data) {
    // return request({methods:'Get',params:{...data},url:'personalized'})
    // return axios.get(`${baseURL}personalized`, { params: { ...data } })
    return request({
        url: 'personalized',
        params: { ...data },
        method:'get'
    })
}
// 首页发现歌单详情
export function GetSearchSongDetail(data) {

    // return request({ methods: 'Get', params: { ...data }, url: 'playlist/detail' })
    // return axios.get(`${baseURL}playlist/detail`, { params: { ...data } })
    return request({
        url: 'playlist/detail',
        params: { ...data },
        method:'get'
    })
}
// 获取歌词
export function getLyric(data){
    return request({
        url:'lyric',
        params:{...data},
        method:'get'
    })
}