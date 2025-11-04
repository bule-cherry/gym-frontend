import http from "@/http";
import { MaterialType, ListParam } from "./MaterialModel";
//新增
export const addApi = (Param: MaterialType) => {
    return http.post('/api/material', Param)
}
//列表
export const getListApi = (Param: ListParam) => {
    return http.get("/api/material/list", Param)
}
//编辑
export const editApi = (Param: MaterialType) => {
    return http.put('/api/material', Param)

}
//删除
export const deleteApi = (id: string) => {
    return http.delete(`/api/material/${id}`)
}