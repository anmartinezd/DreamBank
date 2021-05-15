import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { SharedModule } from '../shared/shared.module';
import { TransactionsRoutingModule } from './transactions-routing.module';



@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    SharedModule
  ]
})
export class TransactionsModule { }
