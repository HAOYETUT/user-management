<template>
    <div class="table">
        <!-- <el-form :inline="true" :model="tableForm" class="demo-form-inline" v-show="search">
            <el-row :gutter="20">
                <el-col :span="18">
                    <template v-for="(item, index) in tableSearch" :key="index">
                        <el-form-item v-if="item.type=='input'" :label="item.label">
                            <el-input :placeholder="item.placeholder"  v-model="item.name"/>
                        </el-form-item>
                        <el-form-item v-if="item.type=='select'" :label="item.label" >
                            <el-select :placeholder="item.placeholder" v-model="item.name">
                                <template v-for="(op, opin) in item.option" :key="opin">
                                    <el-option :label="op.label" :value="op.value" />
                                </template>
                            </el-select>
                        </el-form-item>
                        <el-form-item v-if="item.type=='data'" :label="item.label" >
                            <el-time-picker
                                :placeholder="item.placeholder"
                                style="width: 100%"
                                v-model="item.name"
                            />
                        </el-form-item>
                    </template>
                    <el-form-item>
                        <el-button type="primary" @click="searchBtn">搜索</el-button>
                    </el-form-item>
                </el-col>
                <el-col :span="6" class="display">
                    <template  v-for="(item, index) in tableButton" :key="index">
                        <el-button :type="item.type" >{{item.text}}</el-button>
                    </template>
                </el-col>
            </el-row>
        </el-form> -->
        <el-table
            ref="multipleTableRef"
            loading="true"
            style="width: 100%;"
            :data="tableData"
            height="600"
            @selection-change="handleSelectionChange"
            table-layout="fixed"
            empty = ''
            :row-class-name="tableRowClassName"
        >
            <template v-if="selection">
                <el-table-column type="selection" width="55"></el-table-column>
            </template>
            <template v-for="(item,index) in column" :key="index">
                    <el-table-column :type="item.type !='selection'" :property="item.value" :label="item.title" :width="item.width">
                        <template  #default="scope">
                            <span v-if="item.type=='input'">{{ scope.row[item.value] }}</span>
                            <span v-if="item.type=='image'">
                                <el-avatar :size="60" src="https://empty" @error="errorHandler"><img :src="scope.row[item.value]"/></el-avatar>
                            </span>
                            <span v-if="item.type=='data'">
                                {{ happenTimeFun(scope.row[item.value]) }}
                            </span>
                            <el-button v-if="item.type=='click'" :type="item.btnType || primary" link>{{scope.row[item.value]}}</el-button>
                            <el-link v-if="item.type=='link'" :href="scope.row[item.value]" :type="item.linkType || primary">{{scope.row[item.value]}}</el-link>
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
    props: ['tableData', 'column', 'search', 'tableSearch', 'tableButton', 'tableForm'],
    setup(props: any) {
        console.log(props,'props')
        const {tableData = [], column = [], search = true, selection = true, tableSearch, tableButton, tableForm} = props as ({tableData: any[], column: any[], search: boolean, selection: boolean, tableSearch: any[], tableButton: any[], tableForm: any})
        
         const handleSelectionChange = () => {

         }
        return {tableData, column, handleSelectionChange, search, happenTimeFun, selection, tableSearch, tableButton, tableForm}
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