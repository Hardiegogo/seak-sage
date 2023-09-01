import axios from "axios"
import { AuthorisedApi } from "../userServices/userServices"

export const buyCourse=async(courseId:string)=>{
    return await axios.post(`/api/courses/${courseId}`)
}