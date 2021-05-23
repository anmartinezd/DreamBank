import { transactionStatus } from "../constants/transaction-status.enum";

export class TransactionModel {
    id: string;
    ammount: number;
    status: transactionStatus;
    date: string;
    hour: string;
    description: string;
    currency: string;
    balance: number;
    
}