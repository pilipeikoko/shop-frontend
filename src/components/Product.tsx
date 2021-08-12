import {Category} from "./Category";

export interface Product{
    id:number;
    name:string;
    category:Category;
    rating:number;
    sellers:[string];
    img:string;
    price:number;
}