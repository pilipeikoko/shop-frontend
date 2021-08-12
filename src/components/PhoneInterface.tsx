import {Product} from "./Product";
import {Brand} from "./Brand";

export interface PhoneInterface extends Product{
    brand:Brand;
    creationDate:string;
    operationalSystem:string;
}