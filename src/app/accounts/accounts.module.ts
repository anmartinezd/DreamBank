import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { AccountsRoutingModule } from './accounts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BudgetComponent } from './components/budget/budget.component';
import { AccountService } from './services/account/account.service';
import { CardsListComponent } from './components/cards-list/cards-list.component';


@NgModule({
  declarations: [AccountsComponent, BudgetComponent, CardsListComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule
  ],
  providers: [
    AccountService
  ]
})
export class AccountsModule { }
