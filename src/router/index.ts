import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginRegister.vue')
  },{
    path: '/layout',
    name: 'Layout',
    component: () => import('../views/layout/index.vue')
  },
  // {
  //   path: '/index',
  //   name: 'Index',
  //   component: () => import('../views/index.vue'),
  //   redirect: '/use-ist',
  //   children: [
  //     {
  //       path: '/use-ist',
  //       name: 'UseList',
  //       component: () => import('../views/use/use-list/index.vue'),
  //     }, {
  //       path: '/mv-ist',
  //       name: 'MvList',
  //       component: () => import('../views/vallenj/mv-list/index.vue'),
  //     }, {
  //       path: '/song-ist',
  //       name: 'SongList',
  //       component: () => import('../views/vallenj/song-list/index.vue'),
  //     }, {
  //       path: '/member-list',
  //       name: 'MemberList',
  //       component: () => import('../views/structure/member-list/index.vue'),
  //     }
  //   ]
  // },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import(/* webpackChunkName: "about" */ '../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
