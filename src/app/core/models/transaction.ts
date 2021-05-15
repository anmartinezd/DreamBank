export class Transaction {
    transactionId: number;
    ammount: number;
    transactionStatus: transactionStatus;
    date: string;
    hour: string;
    description: string;
    currency: string;
    balance: number; 
}

export enum transactionStatus {
    accepted = 'Accepted',
    declined = 'Declined',
    waiting = 'Waiting'
}