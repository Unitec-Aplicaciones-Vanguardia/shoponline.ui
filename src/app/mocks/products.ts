import { Product } from '../models/product';

export const allProducts : Array<Product> = [
    { id:1, name: "xbox", stock:5, brandName: "Microsoft", categoryId: 1, categoryName: "consoles", price: 499 },
    { id:2, name: "Play Station 5", stock:3, brandName: "Sony", categoryId: 1, categoryName: "consoles", price: 599 },
    { id:3, name: "iPhone", stock:5, brandName: "Apple", categoryId: 2, categoryName: "mobile devices", price: 1200 },
    { id:4, name: "One Plus 8T", stock:5, brandName: "One Plus", categoryId: 2, categoryName: "mobile devices", price: 750 },
    { id:5, name: "Microsoft Surface Duo", stock:5, brandName: "Microsoft",  categoryId: 2, categoryName: "mobile devices", price: 1400 }
]