import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankCardComponent } from './components/bank-card/bank-card.component';
import { TableComponent } from './components/table/table.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { InputTextComponent } from './components/forms/input-text/input-text.component';
import { InputSelectComponent } from './components/forms/input-select/input-select.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BankCardComponent, 
    TableComponent,
    GaugeComponent,
    InputTextComponent,
    InputSelectComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NgbModule,
    TableComponent,
    BankCardComponent,
    GaugeComponent,
    InputTextComponent,
    InputSelectComponent,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
