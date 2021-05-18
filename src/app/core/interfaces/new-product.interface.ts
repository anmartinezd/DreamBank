import { productType } from "../constants/product-type.enum";
import { TransactionModel } from "../models/transaction.model";

export interface NewProductInterface {
    productType: productType;
    cellPhone: number;
    MonthlyIncome: number;
    userId: string;
    transactions: TransactionModel[];
}