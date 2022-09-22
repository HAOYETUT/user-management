<!--vxe-table公共组件-->
<template>
  <div class="flex-table">
    <div class="flex-top">
      <!--搜索条件slot-->
      <slot name="search" />
    </div>
    <!--table容器-->
    <div class="flex-content">
      <vxe-table
        ref="xTable"
        reserve
        border
        :data="data"
        auto-resize
        show-header-overflow
        show-overflow
        highlight-hover-row
        column-min-width="80"
        height="100%"
        v-bind="$attrs"
        v-on="$listeners"
        @scroll="tableScroll"
      >
        <template v-for="(column, index) in columns">
          <!-- 复选框 -->
          <vxe-table-column v-if="column.type === 'checkbox'" :key="index" type="checkbox" :width="columns.width ? columns.width : '40'" />
          <!-- 序号 -->
          
          <vxe-table-column v-else-if="column.type === 'seq'" :key="(index as number)" type="seq" :title="column.title ? column.title: '序号'" :width="columns.width ? columns.width : '65'" show-overflow="title" />
          <!-- 具体内容和slot -->
          <vxe-table-column v-else :key="(index as number)" :field="column.field" :title="column.title" :width="column.width">
            <template v-slot="{row}">
              <slot v-if="column.slot" :name="column.slot" :row="row" />
              <template v-else>
                {{ row[column.field] | checkValue }}
              </template>
            </template>
          </vxe-table-column>
        </template>
      </vxe-table>
    </div>
    <div>
      <el-pagination
        v-if="count > 0"
        :current-page="page"
        :layout="layout"
        :page-size="limit"
        :total="count"
        :page-sizes="pageSizes"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'BaseTable',
  filters: {
    checkValue(val: any) {
      return (val === null || val === undefined) ? '' : val
    }
  },
  props: ['data', 'columns', 'page', 'limit', 'count', 'layout', 'pageSizes'],

  setup(props: any, ctx: any) {
    const {data = [], columns = [], page = 1, limit = 30, count = 0, layout = 'prev,pager,next,sizes,jumper,total', pageSizes = [10, 50, 100, 200]} = props as ({data: any[], columns: any[], page: number, limit: number, count: number, layout: string, pageSizes: any[]})
    
    // 页长变化
    const handleSizeChange = (val: any) => {
      ctx.emit('limit-change', val)
    }

    // 页码变化
    const handleCurrentChange = (val: any) => {
      ctx.emit('page-change', val)
    }

    
    const tableScroll = (value: any) => {
      const { type, scrollTop, scrollLeft, isX, isY, $event } = value
      // 不是纵向滚动
      if (!isY) return
      const { scrollHeight, clientHeight } = $event.srcElement
      if (clientHeight + scrollTop >= scrollHeight) {
        console.log('到底了！！')
        ctx.emit('bottom')
      }
    }
  
    return {data, columns, page, limit, count, layout, pageSizes, handleSizeChange, handleCurrentChange, tableScroll}
  }
}
</script>

<style lang="scss" scoped>
/* table自适应父容器 */
.flex-table {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
}

.flex-content {
  flex: 1;
  overflow: auto;
}
</style>
