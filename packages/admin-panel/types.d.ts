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
    courseId:string
  }