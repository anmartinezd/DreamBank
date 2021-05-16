import { transactionStatus } from "../../constants/transaction-status.enum";

export interface TransactionInterface{
    transactionId: number;
    ammount: number;
    transactionStatus: transactionStatus;
    date: string;
    hour: string;
    description: string;
    currency: string;
    balance: number; 
}