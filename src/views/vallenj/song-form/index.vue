<template>
    <el-drawer v-model="drowShow" :direction="direction" :show-close="false">
        <!-- <template #title>
        <h4>{{title}}</h4>
        </template>
        <template #default>
        <div>
            <el-radio v-model="radio1" label="Option 1" size="large"
            >Option 1</el-radio
            >
            <el-radio v-model="radio1" label="Option 2" size="large"
            >Option 2</el-radio
            >
        </div>
        </template>
        <template #footer>
        <div style="flex: auto">
            <el-button>关闭</el-button>
            <el-button type="primary">保存</el-button>
        </div>
        </template> -->
    </el-drawer>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    props: ['drowShow', 'title', 'direction'],
    components: {},
    setup(props: any) {
        // debugger
        const {drowShow = false, title, direction = 'rtl'} = props as ({drowShow: boolean, title: string, direction: string})
        return { drowShow, title, direction }
    }
}
</script>
<style scoped>

</style>