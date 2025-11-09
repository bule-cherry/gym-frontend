import http from "@/http";
//总数统计
export const getTotalApi = () => {
    return http.get("/api/home/getTotal")
}
//反馈列表
export const getSuggestListApi = () => {
    return http.get("/api/home/getSuggestList")
}
//热销商品
export const getHotGoodstApi = () => {
    return http.get("/api/home/getHotGoods")
}
//热销卡
export const getHotCardstApi = () => {
    return http.get("/api/home/getHotCards")
}
//热销课程
export const getHotCourseApi = () => {
    return http.get("/api/home/getHotCourse")
}