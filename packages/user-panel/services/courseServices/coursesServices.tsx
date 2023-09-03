import axios from "axios"
export const buyCourse=async(courseId:string)=>{
    return await axios.post(`/api/courses/${courseId}`)
}