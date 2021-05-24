import { Component, OnInit } from '@angular/core';
import { TransactionModel } from '../core/models/transaction.model';
import { AccountService } from '../core/services/account/account.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  ngOnInit(): void {
  }
}
