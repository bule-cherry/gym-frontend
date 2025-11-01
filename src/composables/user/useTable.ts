import { type ListParam } from "@/api/user/UserModel";
import { nextTick, onMounted, reactive, ref } from "vue";
import { getListApi } from "@/api/user";
export default function () {
    //定义表格高度
    const tableHeight = ref(0)
    //定义表格参数
    const tableList = reactive({
        list:[]
    })
    //列表参数
    const listParam = reactive<ListParam>({
        currentPage: 1,
        pageSize: 10,
        total: 0,
        phone: '',
        nickName: '',
    })

    //列表
    const getList = async () => {
        let res = await getListApi(listParam)
        if(res && res.code == 200 ){
            tableList.list = res.data.records
            listParam.total = res.data.total
        }
    }
    //搜索
    const searchBtn = () => {
        getList()
    }
    //重置
    const resetBtn = () => {
        listParam.nickName = ''
        listParam.phone = ''
        getList()
    }
    //页容量改变时触发
    const sizeChange = (size: number) => {
        listParam.pageSize = size
        getList()
    }
    //页数改变时触发
    const currentChange = (page: number) => {
        listParam.currentPage = page
        getList()
    }
    //刷新列表
    const refresh = () => {
        getList()
    }
    onMounted(() => {
        getList()
        nextTick(() => {
            tableHeight.value = window.innerHeight - 230
        })
    })
    return {
        tableList,
        listParam,
        getList,
        searchBtn,
        resetBtn,
        sizeChange,
        currentChange,
        tableHeight,
        refresh
    }


}