import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TransactionModel } from 'src/app/core/models/transaction.model';

@Component({
  selector: 'app-transaction-information-detail',
  templateUrl: './transaction-information-detail.component.html',
  styleUrls: ['./transaction-information-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionInformationDetailComponent implements OnInit {
  @Input() transaction: TransactionModel;

  constructor() { }

  ngOnInit(): void {
    console.log(this.transaction);
  }

}
