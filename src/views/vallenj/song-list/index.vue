<template>
    <div class="songList">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20">
                <el-col :span="18">
                    <el-form-item label="">
                        <el-input placeholder="请输入歌曲名"  v-model="formInline.name"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSearch">搜索</el-button>
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
            :tableData="songData"
            :column="songColumn"
        /></div>
</template>

<script>
import Table from '@/components/table.vue'
import { songData, songColumn, usetableBtn } from '@/utils/virtual-data';
import { reactive } from 'vue';
export default {
    name: "songList",
    components: { Table },
    setup() {
        const formInline = reactive({
            user: '',
            region: '',
        })
        return {songData, songColumn, formInline, usetableBtn}
    }
}
</script>
<style scoped>

</style>