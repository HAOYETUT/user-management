<template>
    <div class="mvList">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20">
                <el-col :span="18">
                    <el-form-item label="">
                        <el-input placeholder="请输入mv名"  v-model="formInline.name"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">搜索</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="6" class="operation-display">
                    <template  v-for="(item, index) in usetableBtn" :key="index">
                        <el-button :type="item.type" >{{item.text}}</el-button>
                    </template>
                </el-col>
            </el-row>
        </el-form>
        <Table
            :tableData="mvData"
            :column="mvColumn"
        />
    </div>
</template>

<script lang="ts">
import Table from '@/components/table.vue'
import { mvData, mvColumn, usetableBtn } from '@/utils/virtual-data';
import { reactive } from 'vue';
export default {
    name: "MvList",
    components: { Table },
    setup() {
        const formInline = reactive({
            user: '',
            region: '',
        })
        return {mvData, mvColumn, formInline, usetableBtn}
    }
}
</script>
<style scoped>

</style>