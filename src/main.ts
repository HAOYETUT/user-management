import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import createStore from '@/router/index'
import { message } from '@/utils/message'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import baseComponents from '@/components/Common'
// import * as filters from '@/filters'
//路由导航守卫
router.beforeEach((to, from, next) => {
    // 如果访问的是登录页面
    if (to.path === '/login') return next()
    // 如果访问的不是登录页面，则要先检查是否有token
    const tokenStr = window.sessionStorage.getItem('token')
    // 如果没有token
    if (!tokenStr) return next('/login')
    // 如果有token
    next()
 })



const app = createApp(App)
app.use(baseComponents)
app.use(ElementPlus)
app.use(createStore)
app.use(VXETable)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// 全局 filter
// Object.keys(filters).forEach(key => {
//     app.filter(key, filters[key])
// })
app.config.globalProperties.$message = message
app.use(store).use(router).mount('#app')