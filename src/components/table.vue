<template>
    <div class="table">
        <el-table
            ref="multipleTableRef"
            loading="true"
            style="width: 100%;"
            :data="tableData"
            height="500"
            @selection-change="handleSelectionChange"
            table-layout="fixed"
        >
            <template v-if="selection">
                <el-table-column type="selection" width="55"></el-table-column>
            </template>
            <template v-for="(item,index) in column" :key="index">
                    <el-table-column :type="item.type !='selection'" :property="item.value" :label="item.title" :width="item.width">
                        <template  #default="scope">
                            <span v-if="item.type =='input'">{{ scope.row[item.value] }}</span>
                            <span v-if="item.type =='image'">
                                <el-avatar :size="60" src="https://empty"><img :src="scope.row[item.value]"/></el-avatar>
                            </span>
                            <span v-if="item.type == 'data'">
                                {{ happenTimeFun(scope.row[item.value]) }}
                            </span>
                            <el-button v-if="item.type == 'click'" :type="item.btnType || primary" link >{{scope.row[item.value]}}</el-button>
                            <el-link v-if="item.type == 'link'" :href="scope.row[item.value]" :type="item.linkType || primary">{{scope.row[item.value]}}</el-link>
                        </template>
                    </el-table-column>
            </template>
        </el-table>
        <el-empty v-if="tableData.length == 0" :image-size="200" />
        <el-footer>
            <!-- <el-pagination
            :page-sizes="[100, 200, 300, 400]"
            :small="small"
            :disabled="false"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            /> -->
        </el-footer>
        
    </div>
</template>

<script lang="ts">

import { happenTimeFun } from '@/utils/index'
export default {
    components: {},
    props: ['tableData', 'column', 'tableSearch', 'tableButton', 'tableForm'],
    setup(props: any) {
        console.log(props,'props')
        const {tableData = [], column = []} = props as ({tableData: any[], column: any[]})
        
         const handleSelectionChange = () => {

         }
        return {tableData, column, handleSelectionChange, happenTimeFun}
    }
}
</script>
<style scoped>
.table {
    position: relative;
    height: 100%;
    width: 100%;
}

.table .display {
    display: flex;
    justify-content: flex-end;
}
/* :global {

} */

.table .el-table__body-wrapper {
    display: none !important;
}


.table .el-pagination {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>