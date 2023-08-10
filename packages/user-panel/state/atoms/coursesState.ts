import { ICourse } from "../../types";
import { atom } from "recoil";

export const coursesState=atom<ICourse[]>({
    key:"courses",
    default:[]
})