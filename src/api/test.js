import request from "../utils/request"
const getMemberList = (page,size,data)=>{
   return request({
        url:`/member/list/search${page}/${size}/`,
        method:'POST',
        data
    })
}
const getSupplierList = (page,size,data)=>{
   return request({
        url:`/supplier/list/search${page}/${size}/`,
        method:'POST',
        data
    })
}

const findMember =(id)=>{
    return request ({
        url:`/member/$(id)`,
        method:'GET',
        data:{
            age:10000
        }
    })
}

export default {
    getMemberList,
    getSupplierList,
    findMember
}