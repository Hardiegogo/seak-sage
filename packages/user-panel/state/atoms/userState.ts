import { IUser } from "../../types";
import { atom } from "recoil";

const defaultState={
    username:"",
    id:"",
    isLoggedIn:false,
    purchasedCourses:[]      
}

export const userState=atom<IUser>({
    key:"currentUser",
    default:  (typeof window !== 'undefined') ? (
        localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : defaultState
    ) : defaultState
})