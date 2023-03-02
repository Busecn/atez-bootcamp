import {IProduct} from "./iproduct";
import {IProductApi} from "./iproductapi";
import {dummyData} from "../data";
import {ISmartPhone} from "./ismartphone";
import {ITablet} from "./itablet";

export class ProductApi implements IProductApi {
    findAll (): IProduct[] {
        return dummyData.map(data => this.filterFields(data));
    }

    findByCategory(category: string): IProduct[] {
        return dummyData.filter(data => data.category == category).map(data => this.filterFields(data));
    }

    findByText(input: string): IProduct[] {
        return dummyData.filter(data =>
            data.title.indexOf(input) >= 0 ||
            data.description.indexOf(input) >= 0 ||
            data.brand.indexOf(input) >= 0
        ).map(data => this.filterFields(data));
    }

    findByColor(color: string): IProduct[] {
        return dummyData.filter(data =>
            (data.category == "smartphones" && (<ISmartPhone>data).color == color) ||
            (data.category == "tablet" && (<ISmartPhone>data).color == color)
        ).map(data => this.filterFields(data));
    }

    private filterFields (data: IProduct): IProduct {
        data.id = undefined;
        data.category = undefined;
        data.images = undefined;
        data.discountPercentage = undefined;
        data.stock = undefined;
        return data;
    }


}