import { ICourseFilters } from "../../types";
import { atom } from "recoil";

const defaultFilters:ICourseFilters={
    rating:0,
    price:5000,
    published:null,
    priceLowToHigh:null
}

export const coursesFiltersState=atom<ICourseFilters>({
    key:"coursesFilters",
    default:defaultFilters
})