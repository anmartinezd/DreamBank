import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { BankCardComponent } from './components/bank-card/bank-card.component';
import { BudgetComponent } from './components/budget/budget.component';
import { AccountSelectorComponent } from './components/account-selector/account-selector.component';
import { AccountRoutingModule } from './account-routing.module';



@NgModule({
  declarations: [
    AccountComponent,
    WalletComponent, 
    BankCardComponent, 
    BudgetComponent, 
    AccountSelectorComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
