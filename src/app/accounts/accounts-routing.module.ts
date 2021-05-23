import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account-summary',
  },
  {
    path: 'account-summary',
    component: AccountsComponent,
  },
  {
    path: ':accountId/transactions',
    loadChildren: () => import('../transactions/transactions.module').then((m) => m.TransactionsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
