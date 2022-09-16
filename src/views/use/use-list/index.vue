<template>
    <div class="Home">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20">
                <el-col :span="18">
                    <el-form-item label="">
                        <el-input placeholder="请输入用户名"  v-model="formInline.name"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" >搜索</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="6" class="operation-display">
                    <template  v-for="(item, index) in usetableBtn" :key="index">
                        <el-button :type="item.type" @click="operation(item.click)">{{item.text}}</el-button>
                    </template>
                </el-col>
            </el-row>
        </el-form>
        <Table
            :tableData="tableData"
            :column="column"
            :tableSearch="usetableSearch"
        />
        <UseForm
            :drawer="drawer"
        />
    </div>
</template>

<script lang="ts">
import Table from '@/components/table.vue'
import UseForm from "../use-form/index.vue";
import { tableData, column, usetableSearch, usetableBtn } from '@/utils/virtual-data';

import { ref, reactive } from 'vue';
export default {
    name: "useList",
    components: {Table, UseForm},
    setup() {
        const formInline = reactive({
            user: '',
            region: '',
        })
        const drawer = reactive({
            drowShows: false,
            drowTitle: '',
        })
        // const drowShows = ref(false)
        // const drowTitle = ref('新增音乐')
        const operation = (click: string) => {
            if (click == 'edit' || click == 'add') {
                drawer.drowShows = true
                drawer.drowTitle = click == 'edit'? '编辑音乐' : '新增音乐'
            }
            console.log(drawer)
        }
        
        return {tableData, column, usetableSearch, drawer, usetableBtn, formInline, operation}
    }
}
</script>
<style scoped>

</style>