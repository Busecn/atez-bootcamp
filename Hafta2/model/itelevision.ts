import {IProduct} from "./iproduct";

export interface ITelevision extends IProduct {
    smartTv:boolean;
    stock: number;
}