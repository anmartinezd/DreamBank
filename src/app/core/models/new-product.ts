import { Transaction } from "./transaction";

export interface NewProduct {
    productType: productType;
    cellPhone: number;
    MonthlyIncome: number;
    userId: string;
    transactions: Transaction[];
}

export enum productType{
    agileCredit = 'Agile Credit',
    savingAccount = 'Saving account',
    creditCard = 'Credit Card',
    homeLeasing = 'Home Leasing'
}