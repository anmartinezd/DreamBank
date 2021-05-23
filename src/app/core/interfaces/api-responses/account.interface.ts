import { accountTypes } from "../../constants/accunt-type.enum";

export interface AccountInterface{
    id: number;
    userId: number;
    accountName:string;
    number: string;
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