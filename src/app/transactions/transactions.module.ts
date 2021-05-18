import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { SharedModule } from '../shared/shared.module';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { AccountSelectorComponent } from './components/account-selector/account-selector.component';



@NgModule({
  declarations: [TransactionsComponent, TransactionListComponent, AccountSelectorComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    SharedModule,
  ]
})
export class TransactionsModule { }
