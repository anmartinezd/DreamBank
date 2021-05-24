import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { AccountModel } from 'src/app/core/models/account.model';
import { TransactionModel } from 'src/app/core/models/transaction.model';
import { TransactionService } from 'src/app/core/services/transaction/transaction.service';
import { subMonths } from 'date-fns';

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
  spentAverage: number;
  accountName: string;
  lasTimeFrame: HTMLButtonElement;

  constructor(
    private transactionService: TransactionService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.pipe(pluck('accountId')).subscribe({
      next: (accountId: string) => {
        this.accountId = accountId.split('_')[0];
        this.accountName = accountId.split('_')[1];
        this.loadTransactions({ from: new Date().toUTCString(), to: null });
      },
    });
  }

  ngOnInit(): void {}

  handleTimeFrame(timeFrame: HTMLButtonElement) {
    console.log(timeFrame);
    if (this.lasTimeFrame) {
      this.lasTimeFrame.classList.remove('active');
    }
    timeFrame.classList.add('active');
    this.lasTimeFrame = timeFrame;
    let to = null;
    switch (timeFrame.id) {
      case 'all':
        this.loadTransactions({ from: new Date().toUTCString(), to: to });
        break;
      case 'las3months':
        to = subMonths(new Date(), 3).toUTCString();
        this.loadTransactions({ from: new Date().toUTCString(), to: to });
        break;
      case 'lastYear':
        to = subMonths(new Date(), 12).toUTCString();
        this.loadTransactions({ from: new Date().toUTCString(), to: to });
        break;
      default:
        break;
    }
  }

  loadTransactions(timeFrame: { from: string; to: string | null }): void {
    this.transactions$ = this.transactionService
      .transactions(this.accountId, timeFrame)
      .pipe(
        tap((transactions) => {
          this.spentAverage =
            transactions
              .map((transaction) => transaction.ammount)
              .reduce((accumulator, amount) => accumulator + amount) /
            transactions.length;
          console.log(this.spentAverage);
        }),
        map((transactions) =>
          transactions.map((transaction) => {
            transaction.date = new Date(transaction.date).toDateString();
            return transaction;
          })
        )
      );
  }

  handleRowClicked(transaction) {
    this.router.navigateByUrl(
      `/dashboard/accounts/${this.accountId}/transactions/${transaction.id}`
    );
  }
}
