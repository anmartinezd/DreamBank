import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionsComponent } from './transactions.component';

const routes: Routes = [
  {
    path: '',
    component: TransactionListComponent
  },
  {
    path: 'inquire-transactions',
    component: TransactionListComponent
  },
  {
    path: ':transactionId',
    component: TransactionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
