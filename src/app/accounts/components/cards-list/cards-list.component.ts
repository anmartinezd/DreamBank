import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AccountModel } from '../../../core/models/account.model';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss'],
})
export class CardsListComponent implements OnInit, OnChanges {
  @Input() accounts: AccountModel[];
  cards: any[];

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.accounts) {
      this.cards = this.accounts
        .filter((account) => account.status !== 'Deactived')
        .map((account) => ({
          number: account.cardNumber,
          name: account.name,
          expirationDate: account.expirationDate,
          type: account.type,
          // remaining: account.getRemainingPercentage(),
        }));
    }
  }
}
