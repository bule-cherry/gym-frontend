import { getListApi } from '@/api/role'
import {type ListParam} from '@/api/role/RoleModel'
import { List } from '@element-plus/icons-vue'
 import { nextTick, onMounted, reactive,ref } from 'vue'
 export default function useTable(){
    //定义表格高度
    const tableHeight = ref(0)
    //定义表格参数
    const tableList = reactive({
        list:[]
    })
    //列表参数
    const listParam = reactive<ListParam>({
        roleName:'',
        currentPage:1,
        pageSize:10,
        total:0
    })
    //列表查询 分页
    const getList = async () =>{
        let res = await getListApi(listParam)
        if(res && res.code == 200){
            //设置表格参数
            tableList.list = res.data.records;
            //设置记录总数
            listParam.total = res.data.total;
        }
    }
    //搜索
    const searchBtn = () =>{
        getList()
    }
    //重置
    const resetBtn = () =>{
        listParam.roleName = ''
        getList()
    }
     //页容量改变时触发
    const sizeChange = (val: number) => {
        listParam.pageSize = val
        getList()
    }
    //页数改变时触发
    const currentChange = (val: number) => {
        listParam.currentPage = val
        getList()
    }
    //刷新列表
    const refresh = ()=>{
        getList()
    }
    //页面一打开出发查询,并设置tableHeight
    onMounted(() => {
        getList()
        nextTick(() => {
            tableHeight.value = window.innerHeight - 230
        })
    })
    return {
        listParam,
        getList,
        searchBtn,
        resetBtn,
        tableList,
        sizeChange,
        currentChange,
        tableHeight,
        refresh

    }
 }