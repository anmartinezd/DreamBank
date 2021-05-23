import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TransactionInterface } from 'src/app/core/interfaces/api-responses/transaction.interface';

@Component({
  selector: 'app-transaction-information-detail',
  templateUrl: './transaction-information-detail.component.html',
  styleUrls: ['./transaction-information-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionInformationDetailComponent implements OnInit {
  @Input() transaction: TransactionInterface;

  constructor() { }

  ngOnInit(): void {
    console.log(this.transaction);
  }

}
