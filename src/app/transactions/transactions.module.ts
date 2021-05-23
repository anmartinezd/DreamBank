import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { SharedModule } from '../shared/shared.module';
import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { AccountSelectorComponent } from './components/account-selector/account-selector.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { TransactionInformationDetailComponent } from './components/transaction-information-detail/transaction-information-detail.component';



@NgModule({
  declarations: [TransactionsComponent, TransactionListComponent, AccountSelectorComponent, TransactionDetailComponent, TransactionInformationDetailComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    SharedModule,
  ]
})
export class TransactionsModule { }
