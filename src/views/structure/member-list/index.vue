<template>
    <table-layout>
        <template #header>
            <simple-search :search-columns="searchColumns" @query-search="querySearch">
                <search-item>
                    <base-button type="danger" :checked-length="0" :is-many="true">删除</base-button>
                </search-item> 
                <search-item>
                    <base-button type="warning" :checked-length="1" @click="openEdit()">编辑</base-button>
                </search-item>
                <search-item>
                    <el-button type="primary"  @click="openAdd()">添加</el-button>
                </search-item>
            </simple-search>
        </template>

        <vxe-table
            ref="xTable"
            auto-resize
            row-id="id"
            highlight-hover-row
            column-min-width="120"
            height="100%"
            :data="tableData"
            :loading="listLoading"
        >
        <vxe-table-column type="checkbox" width="40" />
        <vxe-table-column field="name" title="放箱公司" />
        <vxe-table-column field="role" width="100" align="center" title="放箱类型" />
        <vxe-table-column field="sex" title="EIR编号" />
        <vxe-table-column field="age" title="备注" />
        <vxe-table-column field="address" title="注册时间" />
      </vxe-table>
      <template #footer>
        <auth-list-form
            :visible.sync="drawerVisible"
            :mode="mode"
            :new-data="newData"
            :checked-keys="checkedKeys"
            :form-data="formData"
            @add-success="getList()"
            @edit-success="getList()"
        />
        </template>
    </table-layout>
    
</template>

<script>
import pagination from '@/mixins/pagination'
import { ref } from 'vue'
export default {
    name: "MemberList",
    components: {},
    mixins: [pagination],
    setup() {
        const searchColumns = [
            { tagName: 'input', prop: 'key', value: '', placeholder: '车牌号' },
            { tagName: 'input', prop: 'key', value: '', placeholder: '行驶证号' }
        ]
        const tableData = ref([
              { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
              { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
              { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
              { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
              { id: 10005, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
              { id: 10006, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
              { id: 10007, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
              { id: 10008, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
              { id: 10009, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
              { id: 100011, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
              { id: 100012, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
              { id: 100013, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
              { id: 100014, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },
              { id: 100015, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
              { id: 100016, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
              { id: 100017, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' },
            ])
        const getList = async() => {
            console.log(11)
        }
        return {searchColumns, getList, tableData}
    }
}
</script>
<style scoped>

</style>