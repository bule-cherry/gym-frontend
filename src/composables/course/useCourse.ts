import { CourseType } from "@/api/course/CourseModel"
import { EditType } from "@/type/BaseEnum"
import { ref } from "vue"
import { deleteApi } from "@/api/course"
import { ElMessage } from "element-plus"
import { FuncList } from "@/type/BaseType"
import useInstance from "@/hooks/useInstance"
export default function useCourse(getList: FuncList) {
    const { global } = useInstance()
    const addRef = ref<{
        show: (type: string, row?: CourseType)
            => void
    }>()
    //新增
    const addBtn = () => {
        addRef.value?.show(EditType.ADD)
    }
    //编辑
    const editBtn = (row: CourseType) => {
        console.log("row"+ row)
        addRef.value?.show(EditType.EDIT, row)
    }
    //删除
    const deleteBtn = async (row: CourseType) => {
        //信息确定
        let confirm = await global.$myconfirm('确定删除该数据吗?')
        if (confirm) {
        }
        let res = await deleteApi(row.courseId)
        if (res && res.code == 200) {
            ElMessage.success(res.msg)
            getList()
        }
    }
    //选课
    const joinBtn = async (row: CourseType) => {

    }
    return {
        addBtn,
        editBtn,
        deleteBtn,
        addRef,
        joinBtn
    }
}