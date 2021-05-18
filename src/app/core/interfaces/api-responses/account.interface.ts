import { accountTypes } from "../../constants/accunt-type.enum";

export interface AccountInterface{
    id: string;
    accountName:string;
    number: number;
    name: string;
    cardNumber: string;
    expirationDate: string;
    type: accountTypes;
    balance: number;
    status: string;
    currency: string;
    spent: number;
    limit: number;
}