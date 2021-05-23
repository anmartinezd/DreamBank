import { accountTypes } from '../constants/accunt-type.enum';
import { AccountInterface } from '../interfaces/api-responses/account.interface';
export class AccountModel {
  icon: string;
  id: number;
  private _accountName: string;

  public get accountName(): string {
    return `${this.number} - ${this._accountName.toUpperCase()}`;
  }

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

  constructor({
    id,
    accountName,
    number,
    name,
    cardNumber,
    expirationDate,
    type,
    balance,
    status,
    currency,
    spent,
    limit,
  }: AccountInterface) {
    this.id = id;
    this._accountName = accountName;
    this.number = number;
    this.name = name;
    this.cardNumber = cardNumber;
    this.expirationDate = expirationDate;
    this.type = type;
    this.balance = balance;
    this.status = status;
    this.currency = currency;
    this.spent = spent;
    this.limit = limit;
    this.icon = this.getIcon();
  }

  getspentPercentage(): number {
    return (100 * this.spent) / this.limit;
  }

  getRemainingPercentage(): number {
    return 100 - this.getspentPercentage();
  }

  private getIcon(): string {
    let icon;
    switch (this.type) {
      case accountTypes.checking:
        icon = 'fas fa-money-check-alt';
        break;

      case accountTypes.savings:
        icon = 'fas fa-piggy-bank';
        break;
    }
    return icon;
  }
}
