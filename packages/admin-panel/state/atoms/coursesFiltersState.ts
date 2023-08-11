import { ICourseFilters } from "../../types";
import { atom } from "recoil";

const defaultFilters:ICourseFilters={
    rating:0,
    price:0,
    published:null,
    priceLowToHigh:null
}

export const coursesFiltersState=atom<ICourseFilters>({
    key:"coursesFilters",
    default:defaultFilters
})