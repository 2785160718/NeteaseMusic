import {createRouter, createWebHistory} from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)


// 定义路由配置
export const constantRouterMap = [
  { 
    path: '/',
    name: '/home',
    component: () => _import('home')
  },
  { 
    path: '/searchSongList',
    name: '/searchSongList',
    component: () => _import('searchSongList')
  }
];

export default createRouter({
  // 4.0 采用 history 模式
  history: createWebHistory(),
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap,
})
