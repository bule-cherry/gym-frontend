//角色数据查询
export type AddRoleModel = {
    type:string,
    roleId:string,
    roleName:string,
    remark:string
}
//列表查询
export type ListParm = {
    roleName:string,
    currentPage:number,
    pageSize:number,
    total:number
}