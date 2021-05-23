import { transactionStatus } from '../constants/transaction-status.enum';
import { TransactionInterface } from '../interfaces/api-responses/transaction.interface';

export class TransactionModel {
  id: number;
  ammount: number;
  status: transactionStatus;
  accountId: number;
  date: Date;
  description: string;
  currency: string;
  balance: number;

  /**
   *
   */
  constructor(transaction: TransactionInterface) {
    this.id = transaction.id;
    this.ammount = transaction.ammount;
    this.status = transaction.status;
    this.date =  new Date(transaction.date);
    this.description = transaction.description;
    this.currency = transaction.currency;
    this.balance = transaction.balance;
  }
}
