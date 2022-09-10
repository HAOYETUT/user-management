import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { showLoading, hideLoading } from "@/utils/loading";
// import {
//     ElButton,
//     ElMessage,
//     ElMessageBox, 
//     ElPopconfirm, 
//     ElSelect,
//     ElContainer,
//     ElHeader,
//     ElAside,
//     ElMain,
//     ElFooter,
//     ElMenu,
//     ElMenuItem,
//     ElMenuItemGroup,
//     ElSubMenu,
//     ElIcon,
//     ElRadioGroup,
//     ElRadioButton,
// } from 'element-plus'

const app = createApp(App)
// app.use(
//     ElContainer,
//     ElButton, 
//     ElHeader,
//     ElSelect,
//     ElMain,
//     ElFooter,
//     ElAside,
//     ElMessage,
//     ElMessageBox,
//     ElPopconfirm,
//     ElRadioButton,
//     ElMenu,
//     ElMenuItem,
//     ElSubMenu,
//     ElMenuItemGroup,
//     ElIcon,
//     ElRadioGroup,
//     { size: 'small', zIndex: 3000 })
app.use(ElementPlus)
app.use(store).use(router).mount('#app')