import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankCardComponent } from './components/bank-card/bank-card.component';
import { TableComponent } from './components/table/table.component';
import { GaugeComponent } from './components/gauge/gauge.component';


@NgModule({
  declarations: [
    BankCardComponent, 
    TableComponent,
    GaugeComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TableComponent,
    BankCardComponent,
    GaugeComponent
  ]
})
export class SharedModule { }
