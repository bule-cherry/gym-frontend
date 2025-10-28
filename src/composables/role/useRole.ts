import {type AddRoleModel} from '@/api/role/RoleModel'
 import { reactive,ref } from 'vue'

export default function useRole(){
    //RoleAdd.vue 暴露出来的, 该对象有一个方法 show，无参数、无返回值 → 作用是控制弹窗大小和显示的属性
    //新增弹框的ref属性(子组件将方法暴露出去，父组件就可以调用子组件的方法)
    const addRef = ref<{ show: () => void }>()

    //新增
    const addBtn = () =>{
        //?. 可选链操作符：如果前面是 null 或 undefined，就不执行后面的 .show()，避免报错
        addRef.value?.show()
    }
    //编辑
    const editBtn = () =>{

    }
    //删除
    const deleteBtn = () =>{

    }
    return {
        addBtn,
        editBtn,
        deleteBtn,
        addRef
    }
}