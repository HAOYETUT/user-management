<template>
    <div class="index common-layout">
    <el-container>
        <el-aside width="200px">
            <h5 class="mb-2">超级管理系统</h5>
            <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
                @close="handleClose">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><location /></el-icon>
                        <span>Navigator One</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">item one</el-menu-item>
                        <el-menu-item index="1-2">item two</el-menu-item>
                    </el-menu-item-group>
                </el-sub-menu>
                <el-menu-item index="2">
                    <el-icon>
                        <icon-menu />
                    </el-icon>
                    <template #title>Navigator Two</template>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header>
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    :ellipsis="false"
                    @select="handleSelect"
                >
                    <el-menu-item index="0">LOGO</el-menu-item>
                    <div class="flex-grow" />
                    <el-menu-item index="1">Processing Center</el-menu-item>
                    <el-sub-menu index="2">
                    <template #title>Workspace</template>
                    <el-menu-item index="2-1">item one</el-menu-item>
                    <el-menu-item index="2-2">item two</el-menu-item>
                    <el-menu-item index="2-3">item three</el-menu-item>
                    <el-sub-menu index="2-4">
                        <template #title>item four</template>
                        <el-menu-item index="2-4-1">item one</el-menu-item>
                        <el-menu-item index="2-4-2">item two</el-menu-item>
                        <el-menu-item index="2-4-3">item three</el-menu-item>
                    </el-sub-menu>
                    </el-sub-menu>
                </el-menu>
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
    </div>
</template>
  

<script>
import { ref } from 'vue'
export default {
    name: "Index",
    components: {},
    setup() {
        const isCollapse = ref(false)
        const handleOpen = (key, keyPath) => {
            console.log(key, keyPath)
        }
        const handleClose = (key, keyPath) => {
            console.log(key, keyPath)
        }
        return {handleOpen, handleClose, isCollapse}
    }
}
</script>
<style scoped>
.index {
    width: 100%;
    height: 100%;
}
.el-container {
    width: 100%;
    height: 100%;
}
.el-header {
    padding: 0;
    /* background-color: aqua; */
}
.el-main {
    background: chocolate;
}
.el-aside {
    /* background: greenyellow; */
}
.el-footer {
    background-color: blue;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.flex-grow {
  flex-grow: 1;
}
</style>