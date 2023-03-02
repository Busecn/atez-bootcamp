import {IProduct} from "./iproduct";

export interface IProductApi {
    findAll: () => IProduct[];
    findByCategory(category: string): IProduct[];

    findByText: (input:string) => IProduct[]; //listeyi dönecek

    findByColor(color: string): IProduct[];
}