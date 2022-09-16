<template>
    <div class="songList">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20">
                <el-col :span="18">
                    <el-form-item label="">
                        <el-input placeholder="请输入歌曲名"  v-model="formInline.name"/>
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
            :tableData="songData"
            :column="songColumn"
        />
        <SongForm
            :drowShow="drowShow"
            :title="drowTitle"
        />
    </div>
</template>

<script lang="ts">
import Table from '@/components/table.vue'
import { songData, songColumn, usetableBtn } from '@/utils/virtual-data';
import SongForm from "../song-form/index.vue";
import { reactive, ref } from 'vue';
export default {
    name: "songList",
    components: { Table, SongForm },
    setup() {
        const formInline = reactive({
            user: '',
            region: '',
        })
        const drowShow = ref(false)
        const drowTitle = ref('新增音乐')
        const operation = (click: string) => {
            console.log(click)
            if (click == 'edit' || click == 'add') {
                drowShow.value = true
                drowTitle.value = click == 'edit'? '编辑音乐' : '新增音乐'
            }
        }
        return {songData, songColumn, formInline, usetableBtn, operation, drowShow, drowTitle}
    }
}
</script>
<style scoped>

</style>