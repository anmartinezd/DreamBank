import { transactionStatus } from "../../constants/transaction-status.enum";

export interface TransactionInterface{
    id: number;
    accountId: number;
    ammount: number;
    status: transactionStatus;
    date: string;
    description: string;
    currency: string;
    balance: number; 
}