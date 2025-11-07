//登录参数类型
export type LoginParm = {
    username: string,
    password: string,
    code: string
    userType: string
}
//菜单和动态路由生成请求参数
export type InfoParam = {
    userId: string,
    userType: string
}