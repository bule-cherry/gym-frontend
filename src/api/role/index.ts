import http from "@/http";
import { type AddRoleModel, type ListParam } from "./RoleModel";
//新增
export const addApi = (param: AddRoleModel) => {
    return http.post("/api/role", param)
}
//查询
export const getListApi = (param: ListParam) =>{
    return http.get("api/role/list",param)
}