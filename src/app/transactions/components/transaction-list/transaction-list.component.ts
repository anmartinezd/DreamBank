import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { AccountModel } from 'src/app/core/models/account.model';
import { TransactionModel } from 'src/app/core/models/transaction.model';
import { AccountService } from 'src/app/core/services/account/account.service';
import { TransactionService } from 'src/app/core/services/transaction/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit {
  headers = [
    { label: 'Date', key: 'date' },
    { label: 'Desciption', key: 'description' },
    { label: 'Currency', key: 'currency' },
    { label: 'Value', key: 'ammount' },
    { label: 'Balance', key: 'balance' },
  ];

  public accountId: string;
  public transactions$: Observable<TransactionModel[]>;
  public accounts$: Observable<AccountModel[]>;

  constructor(
    private transactionService: TransactionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.pipe(pluck('accountId')).subscribe(
      {
        next: accountId => {
          this.accountId = accountId;
          this.transactions$ = this.transactionService.transactions(this.accountId);
        }
      }
    );
  }

  ngOnInit(): void {
  }

  handleRowClicked(transaction) {
    this.router.navigateByUrl(
      `/dashboard/accounts/${this.accountId}/transactions/${transaction.id}`
    );
  }
}
