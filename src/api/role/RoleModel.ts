//角色数据查询
export type AddRoleModel = {
    type: string,
    roleId: string,
    roleName: string,
    remark: string
}
//列表查询
export type ListParam = {
    roleName: string,
    currentPage: number,
    pageSize: number,
    total: number
}
// 分配权限树的请求参数
export type AssignParam = {
    roleId: string,
    userId: string
}
//保存权限参数
export type SaveAssignParam = {
    roleId: string,
    list: Array<string>
}