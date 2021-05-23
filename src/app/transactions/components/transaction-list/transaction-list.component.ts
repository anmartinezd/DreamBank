import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { transactionStatus } from 'src/app/core/constants/transaction-status.enum';
import { TransactionInterface } from 'src/app/core/interfaces/api-responses/transaction.interface';
import { AccountModel } from 'src/app/core/models/account.model';
import { TransactionModel } from 'src/app/core/models/transaction.model';
import { AccountService } from 'src/app/core/services/account/account.service';
import { TransactionService } from 'src/app/core/services/transaction/transaction.service';

const transatctionsList1 = [
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    currency: 'USD',
    value: '$6,266.33',
    balance: '$6,266.33',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    currency: 'USD',
    value: '$6,266.33',
    balance: '$6,266.33',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    currency: 'USD',
    value: '$6,266.33',
    balance: '$6,266.33',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    currency: 'USD',
    value: '$6,266.33',
    balance: '$6,266.33',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    currency: 'USD',
    value: '$6,266.33',
    balance: '$6,266.33',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    currency: 'USD',
    value: '$6,266.33',
    balance: '$6,266.33',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    currency: 'USD',
    value: '$6,266.33',
    balance: '$6,266.33',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    currency: 'USD',
    value: '$6,266.33',
    balance: '$6,266.33',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    currency: 'USD',
    value: '$6,266.33',
    balance: '$6,266.33',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    currency: 'USD',
    value: '$6,266.33',
    balance: '$6,266.33',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    currency: 'USD',
    value: '$6,266.33',
    balance: '$6,266.33',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    currency: 'USD',
    value: '$6,266.33',
    balance: '$6,266.33',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    currency: 'USD',
    value: '$6,266.33',
    balance: '$6,266.33',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    currency: 'USD',
    value: '$6,266.33',
    balance: '$6,266.33',
  },
];

const transatctionsList2 = [
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    status: transactionStatus.declined,
    currency: 'USD',
    ammount: 6266.33,
    balance: 6266.33,
    hour: '09:00',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    status: transactionStatus.declined,
    currency: 'USD',
    ammount: 6266.33,
    balance: 6266.33,
    hour: '09:00',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    status: transactionStatus.declined,
    currency: 'USD',
    ammount: 6266.33,
    balance: 6266.33,
    hour: '09:00',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    status: transactionStatus.declined,
    currency: 'USD',
    ammount: 6266.33,
    balance: 6266.33,
    hour: '09:00',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    status: transactionStatus.declined,
    currency: 'USD',
    ammount: 6266.33,
    balance: 6266.33,
    hour: '09:00',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    status: transactionStatus.declined,
    currency: 'USD',
    ammount: 6266.33,
    balance: 6266.33,
    hour: '09:00',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    status: transactionStatus.declined,
    currency: 'USD',
    ammount: 6266.33,
    balance: 6266.33,
    hour: '09:00',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    status: transactionStatus.declined,
    currency: 'USD',
    ammount: 6266.33,
    balance: 6266.33,
    hour: '09:00',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    status: transactionStatus.declined,
    currency: 'USD',
    ammount: 6266.33,
    balance: 6266.33,
    hour: '09:00',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    status: transactionStatus.declined,
    currency: 'USD',
    ammount: 6266.33,
    balance: 6266.33,
    hour: '09:00',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    status: transactionStatus.declined,
    currency: 'USD',
    ammount: 6266.33,
    balance: 6266.33,
    hour: '09:00',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    status: transactionStatus.declined,
    currency: 'USD',
    ammount: 6266.33,
    balance: 6266.33,
    hour: '09:00',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    status: transactionStatus.declined,
    currency: 'USD',
    ammount: 6266.33,
    balance: 6266.33,
    hour: '09:00',
  },
  {
    id: '123456543212345',
    date: '11/02/2021',
    description: 'Payment Virt AS',
    status: transactionStatus.declined,
    currency: 'USD',
    ammount: 6266.33,
    balance: 6266.33,
    hour: '09:00',
  },
];

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
  public transactions$: Observable<TransactionInterface[]>;
  public accounts$: Observable<AccountModel[]>;

  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.accounts$ = this.accountService.getUserAccounts().pipe();
  }

  handleRowClicked(transaction) {
    this.router.navigateByUrl(
      `/dashboard/accounts/${this.accountId}/transactions/${transaction.id}`
    );
  }

  handleAccountChange(accountId) {
    this.accountId = accountId;
    this.transactions$ = this.transactionService.transactions(accountId);
  }
}
