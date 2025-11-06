import http from "@/http";
import { type AddRoleModel, type ListParam, type AssignParam, type SaveAssignParam } from "./RoleModel";
//新增
export const addApi = (param: AddRoleModel) => {
    return http.post("/api/role", param)
}
//查询
export const getListApi = (param: ListParam) => {
    return http.get("api/role/list", param)
}
//删除
export const deleteApi = (roleId: string) => {
    return http.delete(`/api/role/${roleId}`)
}
//编辑
export const editApi = (parm: AddRoleModel) => {
    return http.put("/api/role", parm)
}
//查询权限树数据
export const getMenuTreeApi = (parm: AssignParam) => {
    return http.get('/api/role/getMenuTree', parm)
}
//保存权限
export const saveRoleMenuApi = (parm: SaveAssignParam) => {
    return http.post('/api/role/saveRoleMenu', parm)
}
