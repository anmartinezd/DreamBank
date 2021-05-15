export class Account {
    customerId:number;
    accountNo: number;
    accountType: string;
    balance: number;
    accountStatus: string;
}

export enum accountTypes {
    checking = 'Checking',
    savings = 'Savings'
}

export enum accountStatus {
    active = 'Active',
    deactive = 'Deactive'
}