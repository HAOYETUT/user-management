<template>
  <el-drawer
    :wrapper-closable="false"
    :size="newsDroaw.wrapSize"
    :visible.sync="newsDroaw.visibleDrawer"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </el-drawer>
</template>

<script lang="ts">import { computed } from 'vue'


export default {
  name: 'BaseDrawer',
  props: ['visible', 'size'],
  setup(props: any, ctx: any) {
    const SIZES = { samll: '320px', default: '520px', large: '720px' }

    const {visible = false, size = '520px'} = props as ({visible: boolean, size: string})
    const wrapSize = () => {
      // @ts-ignore
      return SIZES[size] || size
    }
    const newsDroaw = computed({
      //@ts-ignore
      wrapSize() {
        //@ts-ignore
        return SIZES[size] || size
      },
      visibleDrawer: {
        get() {
          return visible
        },
        set(val: any) {
          ctx.emit('update:visible', val)
        }
      }
    })
    // const visibleDrawer = computed({
    //   wrapSize() {
    //     return 
    //   },
    //   get() {
    //     return visible
    //   },
    //   set(val) {
    //     ctx.emit('update:visible', val)
    //   }
    // })
    // {
    return {visible, size, newsDroaw}
  },
}
</script>
