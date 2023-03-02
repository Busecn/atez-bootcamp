import {IProduct} from "./iproduct";

export interface ILaptop extends  IProduct {
    discountPercentage: number,
    screenDimensions: number,
}