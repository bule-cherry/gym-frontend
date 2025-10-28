import {type ListParm} from '@/api/role/RoleModel'
import { List } from '@element-plus/icons-vue'
 import { reactive } from 'vue'
 export default function useTable(){
    const listParam = reactive<ListParm>({
        roleName:'',
        currentPage:1,
        pageSize:10,
        total:0
    })
    //分页
    //列表查询
    //搜索
    const searchBtn = () =>{

    }
    //重置
    const resetBtn = () =>{

    }
    return {
        listParam,
        searchBtn,
        resetBtn
    }
 }