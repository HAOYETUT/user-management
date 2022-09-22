/*
 * 分页mixins
 */
// import { deleteCommon, saveStatus } from '@/api'
import { ElMessage, ElMessageBox } from 'element-plus'
import { nextTick, onMounted, reactive } from 'vue'
export default {
  props: ['getList'],
  setup(props: any) {
    console.log(props,'propspropspropspropspropsprops')
    const tableInline = reactive({
      // 分页
      pagination: {
        // 当前页
        page: 1,
        // 页长
        limit: 30,
        // 总个数
        count: 0,
        // 调整每页显示条数
        pageSizes: [30, 50, 100, 200],
        // 分页布局
        layout: 'prev,pager,next,sizes,jumper,total'
      },
      // 搜索条件
      condition: {},
      // 增,删,改按钮loading
      load: {
        addLoading: false,
        deleteLoading: false,
        editLoading: false
      },
      // 列表loading
      listLoading: true,
      // 状态loading
      statusLoading: false,
      // 列表导出loading
      listExportLoading: false,
      // table list
      tableData: [],
      // checkbox选中的数据
      checkedData: [],
      /**
       *  当前组件 vxe table的引用, ref必须取名为 xTable
       *  或者在组件内自定义 tableRefName
       */
       tableRef: {},
       // add:添加模式, edit:修改模式
       mode: '',
       // 编辑时传递的行对象
       formData: {},
       // 抽屉展开收起变量
       drawerVisible: false
    })
    onMounted(() => {
      // 获取table数据
      nextTick(() => {
        tableInline.tableRef = 'xTable'
      })
    })

     // 组件内需定义getCustomList方法
     const getList = () => {

    }

     // 改变页码handle
    const pageChange = (val: any) => {
      tableInline.pagination.page = val
      getList()
    }

    // 改变显示条数handle
    const limitChange = (val: any) => {
      tableInline.pagination.page = 1
      tableInline.pagination.limit = val
      getList()
    }

    // @ts-ignore
    const handleCellDbClick = ({ row }) => {
      tableInline.formData = { ...row }
      tableInline.mode = 'edit'
      tableInline.drawerVisible = true
    }

    // Open add Drawer
    const openAdd = () => {
      console.log('aaaaaaddddd')
      tableInline.mode = 'add'
      tableInline.drawerVisible = true
      // if (this.addCallback) this.addCallback()
    }

    // Open edit Drawer
    const openEdit = () => {
      if (!tableInline.checkedData[0]) return ElMessage.warning('未选中数据！')
      // @ts-ignore
      tableInline.formData = { ...tableInline.checkedData[0] }
      tableInline.mode = 'edit'
      tableInline.drawerVisible = true
      // if (this.editCallback) this.editCallback()
    }

        // add success 回调
    const  addSuccess = (row: never) => {
      // 如果列表长度等于页长
      if (tableInline.tableData.length >= tableInline.pagination.limit) {
        // 去除最后一条数据和选中状态
        const lastRow = tableInline.tableData.pop()
        nextTick(() => {
          // tableInline.tableRef.setCheckboxRow(lastRow, false)
          // tableInline.checkedData = tableInline.tableRef.getCheckboxRecords()
        })
      }
      tableInline.tableData.unshift(row)
      tableInline.pagination.count += 1
    }

    // edit success 回调
    const editSuccess = (row: any) => {
      // if (!this.autoId) throw new Error('请定义autoId!')
      // const index = tableInline.tableData.findIndex(el => el[this.autoId] === row[this.autoId])
      // 没找到,重新刷新列表
      // if (index === -1) {
      //   getList()
      // } else {
      //   // set(tableInline.tableData, index, row)
      //   // tableInline.tableData[index] = row
      //   // this.$set(tableInline.tableData, index, row)
      //   nextTick(() => {
      //     // tableInline.tableRef.setCheckboxRow(row, true)
      //     // tableInline.checkedData = tableInline.tableRef.getCheckboxRecords()
      //   })
      // }
    }
    /*
     * 统一删除方法
     * 自定义 autoId: id字段名
     * dt: 表名
     * type: 类型 tree类型和普通表格
     */
    const handleDel = (type: any) => {
      ElMessageBox.confirm('确定要删除吗?', '信息', {
          confirmButtonText: '取消',
          cancelButtonText: '确定',
          type: 'warning',
        }).then( async() => {
          // ElMessage({
          //   type: 'success',
          //   message: 'Delete completed',
          // }) const ids = tableInline.checkedData.map(item => item[this.autoId])
          // const { msg } = await deleteCommon({ dt: this.dt, status: 3, auto_id: this.autoId, id: ids })
          // ElMessage.success(msg || 'success')
          // tree 删除后
          if (type === 'tree') {
            getList()
          } else {
            // tableInline.tableData = tableInline.tableData.filter(item => ids.indexOf(item[this.autoId]) === -1)
            // tableInline.checkedData = []
            // tableInline.pagination.count -= ids.length
            // if (tableInline.tableData.length <= 0) {
            //   tableInline.pagination.page--
            //   if (tableInline.pagination.page <= 0) {
            //     tableInline.pagination.page = 1
            //   }
            //   getList()
            // }
          }
        })
        .catch(() => {
          console.log('取消了删除')
          // ElMessage({
          //   type: 'info',
          //   message: 'Delete canceled',
          // })
        })
    }

    /* 改变状态 */
    const changeStatus = async (id: any, key: any, val: any, row: any) => {
      if (val === null || val === undefined) return ElMessage.warning('值不能为空！')
      const statusVal = [1, 0][val]
      if (statusVal === null || statusVal === undefined) return ElMessage.warning('没有找到状态！')
      if (tableInline.statusLoading) return
      tableInline.statusLoading = true
      // const { autoId, dt } = this
      // const params = { auto_id: autoId, dt, id, save: {}}
      // params.save[key] = statusVal
      // const { msg } = await saveStatus(params).finally(() => { tableInline.statusLoading = false })
      // row[key] = statusVal
      // ElMessage.success(msg || '修改成功')
    }

    // 根据查询条件搜索
    const querySearch = (queryForm: any) => {
      debugger
      tableInline.condition = queryForm
      tableInline.pagination.page = 1
      getList()
    }
    // /* 排序 */
    const  changeSort = async(id: any, key: any, val: any, row: any) => {
      // const { autoId, dt } = this
      // const params = { auto_id: autoId, dt, id }
      // params[key] = val
      // const { msg } = await saveStatus(params)
      // row[key] = val
      // ElMessage.success(msg || '修改成功')
    }
    return {tableInline, pageChange, limitChange, handleCellDbClick, openAdd, openEdit, addSuccess, editSuccess, handleDel, changeStatus, querySearch, changeSort}
  }
}
