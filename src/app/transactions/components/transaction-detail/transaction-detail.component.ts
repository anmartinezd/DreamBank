import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { transactionStatus } from 'src/app/core/constants/transaction-status.enum';
import { TransactionInterface } from 'src/app/core/interfaces/api-responses/transaction.interface';
import { TransactionModel } from 'src/app/core/models/transaction.model';
import { TransactionService } from 'src/app/core/services/transaction/transaction.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss'],
})
export class TransactionDetailComponent implements OnInit {
  transaction: TransactionModel | TransactionInterface;
  accountId: string;
  transactionId: string;
  transaction$: Observable<TransactionModel>;

  constructor(
    private transactionService: TransactionService,
    private route: ActivatedRoute
  ) {
    this.transaction$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.accountId = params.get('accountId');
        this.transactionId = params.get('transactionId');
        return this.transactionService.transactionDetail(
          this.accountId,
          this.transactionId
        );
      })
    );
  }

  ngOnInit(): void {}
}
