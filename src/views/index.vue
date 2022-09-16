<template>
    <div class="index common-layout">
    <el-container>
        <div >
            <h5 class="mb-2" style="width:100%;text-align:center;height:50px;line-height: 50px;">{{isCollapse?'管理系统':'小哪吒影音管理系统'}}</h5>
            <el-menu :default-active="menuIndex" :collapse="isCollapse" @select="menuSelect">
                <template v-for="(item, index) in navigationDataList" :key="index">
                    <el-menu-item v-if="item.children.length == 0" :index="item.id" @click="routerPath(item.path)">
                        <el-icon>
                            <component :is="item?.icon || 'Orange'"></component>
                        </el-icon>
                        <template #title>{{item?.title}}</template>
                    </el-menu-item>
                    <el-sub-menu v-if="item.children.length > 0" :index="item.id">
                        <template #title>
                            <el-icon>
                                <component :is="item?.icon || 'Orange'"></component>
                            </el-icon>
                            <span>{{item?.title}}</span>
                        </template>
                        <el-menu-item-group v-for="(itemTwo, indexTwo) in item.children" :key="indexTwo">
                            <template #title>
                                <el-menu-item class="paddingLeft" :index="itemTwo.id" @click="routerPath(itemTwo.path)">{{itemTwo.title}}</el-menu-item>
                            </template>
                        </el-menu-item-group>
                    </el-sub-menu>
                </template>
            </el-menu>
        </div>
        <el-container>
            <el-header>
                <el-icon :size="40" @click="navigationShow">
                    <component :is="isCollapse ? 'Menu' : 'Grid'"></component>
                </el-icon>
                <el-dropdown :hide-on-click="false" class="dropdownRight">
                    <el-avatar :size="50" :src="circleUrl" />
                    <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="loginOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>
            <el-main>
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: './page-header.html' }">
                    homepage
                    </el-breadcrumb-item>
                    <el-breadcrumb-item><a href="./page-header.html">route 1</a></el-breadcrumb-item>
                    <el-breadcrumb-item>route 2</el-breadcrumb-item>
                </el-breadcrumb>
                <el-card class="box-card boxCard" style="margin-top: 10px;">
                    <router-view/>
                </el-card>
            </el-main>
            <!-- <el-footer>Footer</el-footer> -->
        </el-container>
    </el-container>
    </div>
</template>
  

<script lang="ts">
import { ref, onMounted } from 'vue'
import { navigationData } from '@/utils/virtual-data'
import router from '@/router'
import { ElMessageBox } from 'element-plus'
export default {
    name: "Index",
    components: {},
    setup() {
        const isCollapse = ref(false)
        const circleUrl = 'https://img1.baidu.com/it/u=4216761644,15569246&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500'
        const navigationDataList = JSON.parse(JSON.stringify(navigationData))
        const menuIndex = ref('1')
        const navigationShow = () => {
            isCollapse.value = !isCollapse.value
        }

        const menuSelect = (index: any, path: any) => {
            localStorage.setItem('menuId', JSON.stringify(index))
        }

        const routerPath = (value: string) => {
            console.log(value)
            router.push({path: value})
        }

        onMounted(() => {
            //@ts-ignore
            menuIndex.value =  JSON.parse(localStorage.getItem('menuId'))
        })

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

        return { isCollapse, navigationDataList, navigationShow, circleUrl, menuSelect, menuIndex, routerPath, loginOut}
    }
}
</script>
<style scoped>
.index {
    width: 100%;
    height: 100%;
}
.class {
    width: 64px;
}
.el-container {
    width: 100%;
    height: 100%;
}
.el-header {
    padding: 10px 10px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    /* background-color: aqua; */
}

.boxCard {
    height: 93%;
}
.el-menu {
    border-right: 0;
}

.dropdownRight .el-avatar--circle {
    --el-avatar-size: 40px !important;
}

.el-header .el-col {
  border-radius: 4px;
}

.el-header .grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.el-main {
    padding: 10px;
    /* background: chocolate; */
}
.el-aside {
    /* background: greenyellow; */
}

.paddingLeft {
    padding-left: 0 !important;
}
.el-footer {
    /* height: 50px; */
    /* background-color: blue; */
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.flex-grow {
  flex-grow: 1;
}
</style>