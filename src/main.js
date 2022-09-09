import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {ElButton, ElMessage, ElMessageBox, ElPopconfirm, ElSelect} from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(
    ElButton, 
    ElSelect,
    ElMessage,
    ElMessageBox,
    ElPopconfirm,
    { size: 'small', zIndex: 3000 })
app.use(store).use(router).mount('#app')