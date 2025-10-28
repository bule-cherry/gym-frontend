//编辑和新增共用一个弹框组件, 所有需要去设定弹框的属性
// types.ts 或 constants.ts
export const EditType = {
    ADD: '0',
    EDIT: '1'
} as const;

export const Title = {
    ADD: '新增',
    EDIT: '编辑'
} as const;

export const UserType = {
    ADMIN: '1',
    STUDENT: '2'
} as const;

// 如果需要类型，可以这样提取
export type EditType = typeof EditType[keyof typeof EditType];
export type Title = typeof Title[keyof typeof Title];
export type UserType = typeof UserType[keyof typeof UserType];