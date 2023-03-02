export interface IProduct {
    title: string;
    description: string,
    price: number;
    rating: number;
    id?: number | string;
    thumbnail: string;
    category?: string;
    images?: string[];
    discountPercentage?: number;
    stock?: number;
}