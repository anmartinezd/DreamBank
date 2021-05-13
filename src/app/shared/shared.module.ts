import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankCardComponent } from './components/bank-card/bank-card.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [BankCardComponent, TableComponent],
  imports: [
    CommonModule
  ],
  exports: []
})
export class SharedModule { }
