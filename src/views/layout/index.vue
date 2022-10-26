<template>
    <div class="body-all">
        <el-row :gutter="20">
            <el-col :span="3"></el-col>
            <el-col :span="18">
            <div class="flex">
                    <p class="header-title"><i>小哪吒影音网</i></p>
                    
                    <div>
                        <el-dropdown :hide-on-click="false" class="dropdownRight">
                            <el-avatar :size="50" :src="circleUrl" />
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item @click="loginOut">个人中心</el-dropdown-item>
                                    <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
            </div>
            <Carousel/>
            <HeaderTable/>
            </el-col>
            <el-col :span="3"></el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Carousel from '@/components/carousel.vue'
import HeaderTable from '@/components/headerTable.vue'
import router from '@/router'
import { ElMessageBox } from 'element-plus'
const circleUrl = 'https://img1.baidu.com/it/u=4216761644,15569246&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500'

const loginOut = () => {
    ElMessageBox.confirm('你确定要退出登录吗?').then(() => {
        // 清空token
        window.sessionStorage.clear()
        // 跳转到登录页
        router.push('/login')
    }).catch(() => {
        // catch error
    })
}

</script>
<style scoped>
.body-all {
    width: 100%;
    height: 100%;
    /* background: url(@/assets/background-title.jpg) no-repeat;
    background-size: 100% 100%; */
    overflow: hidden;
}
.flex {
    width: 100%;
    height: 60px;
    font-weight: 500;
    padding-top: 10px;
    /* background: green; */
    display: flex;
    border: 1px solid pink;
    border-top: none;
    border-left: none;
    border-right: none;
    justify-content: space-between;
}
.header-title {
    /* color: #fff; */
    line-height: 50px;
    font-family: '仿宋';
}
.flex-grow {
  flex-grow: 1;
}

</style>