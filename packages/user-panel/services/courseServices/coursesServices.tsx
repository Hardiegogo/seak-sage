import { AuthorisedApi } from "../userServices/userServices"

export const buyCourse=async(courseId:string)=>{
    return await AuthorisedApi.post(`/user/courses/${courseId}`)
}