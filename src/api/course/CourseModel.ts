export type CourseListParam = {
    courseName: string,
    currentPage: number,
    pageSize: number,
    total: number,
    teacherName: string
}
export type CourseType = {
    type: string,
    courseId: string,
    courseName: string,
    image: string,
    teacherName: string,
    courseHour: number,
    courseDetails: string,
    coursePrice: number,
    teacherId: string,
}
//选课参数类型
export type SelectCourse = {
    courseId: string,
    memberId: string
}