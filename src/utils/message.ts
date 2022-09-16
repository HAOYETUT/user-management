import { ElMessage } from 'element-plus'

const message = (promise: any) => {
    ElMessage({
        message: promise?.message,
        grouping: promise?.grouping || true,
        type: promise?.type || 'success',
    })
}

export { message }