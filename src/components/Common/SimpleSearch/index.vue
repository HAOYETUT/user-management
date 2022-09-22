<!--搜索组件-->
<template>
  <el-form class="search-form" :inline="inline" @keyup.enter.native="querySearch()" @submit.native.prevent>
    <!--前缀-->
    <slot name="prefix" />
    <el-form-item v-for="(item, index) in formArr" :key="index" :label="item.label || ''">
      <!--下拉列表-->
      <el-select
        v-if="item.tagName === 'select'"
        v-model="item.value"
        :multiple="!item.multiple? false : true"
        :collapse-tags="!item.collapseTags? false : true"
        class="w140px"
        :filterable="!!item.filterable"
        :class="[item.className ? item.className: '']"
        :clearable="item.clearable === false ? false : true"
        :placeholder="item.placeholder || ''"
        @change="changeValue"
      >
        <!--labelProp,valueProp下拉列表的label和value-->
        <el-option
          v-for="option in (item.options || [])"
          :key="option[item.valueProp || 'value']"
          :value="option[item.valueProp || 'value']"
          :label="option[item.labelProp || 'label']"
        />
      </el-select>
      <!--分组下拉列表-->
      <el-select v-else-if="item.tagName === 'selectGroup'" v-model="item.value" clearable :placeholder="item.placeholder">
        <el-option-group
          v-for="(group,gIndex) in (item.groupOptions || [])"
          :key="gIndex"
          :label="group.name"
        >
          <el-option
            v-for="option in (group.options || [])"
            :key="option[item.valueProp || 'value']"
            :value="option[item.valueProp || 'value']"
            :label="option[item.labelProp || 'label']"
          />
        </el-option-group>
      </el-select>
      <!--日期选择器-->
      <el-date-picker
        v-else-if="item.tagName === 'datePicker'"
        v-model="item.value"
        class="w240px"
        type="daterange"
        :clearable="item.clearable === false ? false : true"
        range-separator="-"
        :start-placeholder="item.startPlaceholder || '开始日期'"
        :end-placeholder="item.endPlaceholder || '结束日期'"
        :value-format="item.valueFormat || 'yyyy-MM-dd'"
        :picker-options="item.pickerOptions || {}"
      />
      <!--日期-->
      <el-date-picker
        v-else-if="item.tagName === 'date'"
        v-model="item.value"
        :type="item.type || 'date'"
        class="w140px"
        :value-format="item.valueFormat || 'yyyy-MM-dd'"
        :placeholder="item.placeholder || '选择日期'"
      />
      <el-input
        v-else
        v-model="item.value"
        :disabled="!item.disabledall? false : true"
        :placeholder="item.placeholder || ''"
        :class="[item.className ? item.className: '']"
        clearable
      />
    </el-form-item>
    <!--后缀-->
    <slot name="suffix" />
    <el-form-item v-if="searchColumns && searchColumns.length>0">
      <el-button type="primary" @click="querySearch()" :loading="goEasy">{{ buttonName }}</el-button>
    </el-form-item>
    <!--搜索按钮之后-->
    <slot name="buttonAfter" />
    <div v-if="isFloatRight" :class="[isFloatRight ? 'search-content' : '']">
      <slot />
    </div>
    <template v-else>
      <slot />
    </template>
  </el-form>

</template>

<script lang="ts">
import _ from 'lodash'
import { reactive, toRefs, watch } from 'vue'
export default {
  name: 'SimpleSearch',
  props: ['searchColumns','inline','buttonName','isFloatRight'],
  setup(props: any, ctx: any) {
    const formList = reactive({
      formArr: [],
      initValues: [], // 初始化数据
      pickerOptions: {
        disabledDate(time: any) {
          return time.getTime() > Date.now()
        }
      },
      goEasy: false,
    })
    
    const formatOptionsProp = (columns: any) => {
      return columns.map((item:any) => {
        const opt = item.options || []
        opt.forEach((obj: any = {}) => {
          for (const [prop, val] of Object.entries(obj)) {
            if (prop.indexOf('name') !== -1) obj.label = val
            if (prop.indexOf('id') !== -1) obj.value = val
          }
        })
        return item
      })
    }
    
    const getFormObject = () => {
      const obj: any = {}
      formList.formArr.forEach((el: any) => {
        obj[el.prop] = el.value
      })
      return obj
    }

    const {searchColumns = [], inline = true, buttonName = '搜索', isFloatRight = true } = props as ({searchColumns: any[], inline: Boolean, buttonName: string, isFloatRight: boolean })
    
    watch(searchColumns, (newValue, oldValue) => {
        console.log('watch 已触发', newValue)
        const columns = formatOptionsProp(_.cloneDeep(searchColumns))
        formList.initValues = columns.map((el: any) => el.value)
        formList.formArr = columns
    }, { deep: true, immediate: true })

    watch(formList.formArr, (value) => {
        console.log('watch 已触发', value)
        const obj = getFormObject()
        ctx.emit('form-change', obj)
    })

    const changeValue = (vals: any) => {
      ctx.emit('change-back', vals)
    }

    const querySearch = () => {
      const obj = getFormObject()
      ctx.emit('query-search', obj)
      formList.goEasy = true
      setTimeout(() => {
        formList.goEasy = false
        }, 5000)
    }

    const resetFields = () => {
      formList.formArr.forEach((el: any, index: number) => {
        el.value = formList.initValues[index] || ''
      })
    }

    const refsData = toRefs(formList);
    return {searchColumns, inline, buttonName, isFloatRight, ...refsData, changeValue, querySearch, resetFields}
  },
}
</script>

<style lang="scss" scoped>
/* edit margin-bottom */
.search-form {
  .search-content {
    float: right;
  }

  .not-float-right {
    display: inline-block;
  }

  .el-form-item--mini.el-form-item,
  .el-form-item--small.el-form-item {
    margin-bottom: 10px;
  }
}
</style>
