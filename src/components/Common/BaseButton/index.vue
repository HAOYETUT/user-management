<!--组件按钮:统一表格是选中或不选-->
<template>
  <el-button :loading="loading" :type="(checkedLength === 1 && !isMany) || (checkedLength >= 1 && isMany) ? type : ''" v-bind="$attrs" @click="handleClick">
    <slot />
  </el-button>
</template>

<script lang="ts">
import { ElMessage } from 'element-plus'
export default {
  name: 'BaseButton',
  // 选中的表格长度 checkedLength 是否允许多选功能 isMany 按钮颜色类型 type loading
  props: ['checkedLength', 'isMany', 'type', 'loading'],
  setup(props: any, ctx: any) {
    const {checkedLength = 0, isMany = false, type = 'primary', loading = false} = props as ({checkedLength: number, isMany: boolean, type: string, loading: boolean})
    const handleClick = (evt: any) =>  {
      if (checkedLength <= 0) {
        return ElMessage.warning('请勾选要操作的数据！')
      }
      if (checkedLength > 1 && !isMany) {
        return ElMessage.warning('请勾选一项数据！')
      }
      ctx.$emit('click', evt)
    }
    return {checkedLength, isMany, type, loading, handleClick}
  },
}
</script>

