import http from "@/http";
import { OrderListParam } from '@/api/order/OrderModel'
//下单
export const downApi = (parm: any) => {
    return http.post("/api/order/down", parm)
}
//列表
export const listApi = (parm: OrderListParam) => {
    return http.get("/api/order/list", parm)
}