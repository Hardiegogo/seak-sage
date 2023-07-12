import { IAdmin } from "../../types";
import { atom } from "recoil";

const defaultState={
    username:"",
    id:"",
    isLoggedIn:false      
}

export const adminState=atom<IAdmin>({
    key:"currentAdmin",
    default:  (typeof window !== 'undefined') ? (
        localStorage.getItem('admin') ? JSON.parse(localStorage.getItem('admin') as string) : defaultState
    ) : defaultState
})