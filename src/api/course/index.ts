import http from "@/http";
import { type CourseType, type CourseListParam, type SelectCourse, type MyCourseListParam } from "./CourseModel";
//图片上传
export const uploadImageApi = (param: object) => {
    return http.upload("/api/upload/uploadImage", param)
}
//新增
export const addApi = (param: CourseType) => {
    return http.post("/api/course", param)
}
//获取课程教练
export const getTeacherApi = () => {
    return http.get("/api/user/getTeacher")
}
//列表
export const listApi = (parm: CourseListParam) => {
    return http.get("/api/course/list", parm)
}
//编辑
export const editApi = (parm: CourseType) => {
    return http.put("/api/course", parm)
}
//删除
export const deleteApi = (courseId: string) => {
    return http.delete(`/api/course/${courseId}`)
}
//选课
export const joinCourseApi = (parm: SelectCourse) => {
    return http.post("/api/course/joinCourse", parm)
}
//我的课程
export const getMyCourseListApi = (parm: MyCourseListParam) => {
    return http.get("/api/course/getMyCourseList", parm)
}