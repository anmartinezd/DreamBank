import { productType } from "../constants/product-type.enum";

export interface NewProductInterface {
    productType: productType;
    cellPhone: number;
    monthlyIncome: number;
    userId: number;
}