import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts.component';
import { AccountListComponent } from './components/account-list/account-list.component';



@NgModule({
  declarations: [AccountsComponent, AccountListComponent],
  imports: [
    CommonModule
  ]
})
export class AccountsModule { }
