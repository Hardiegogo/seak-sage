export interface IAdmin {
    username:string,
    id:string,
    isLoggedIn:boolean
}

export interface ICourse {
    title: string;
    rating: number;
    description: string;
    published: boolean;
    price: number;
    imgLink: string;
    _id?:string
  }

export interface ICourseFilters {
    rating:number,
    price:number,
    published:null|boolean,
    priceLowToHigh:null|boolean
}