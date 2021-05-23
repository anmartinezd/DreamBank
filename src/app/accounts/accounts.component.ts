import { Component, OnInit } from '@angular/core';
import { AccountInterface } from '../core/interfaces/api-responses/account.interface';
import { AccountService } from '../core/services/account/account.service';
import { SessionService } from '../core/services/session/session.service';
import { UserModel } from '../core/models/user.model';
import { Observable } from 'rxjs';
import { AccountModel } from 'src/app/core/models/account.model';
import { accountTypes } from '../core/constants/accunt-type.enum';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  headers;
  accounts: any;
  accounts$: Observable<AccountModel[]>;

  constructor(
    private accountService: AccountService,
    private sessionService: SessionService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.subscribeToAccounts();
    this.headers = [
      { label: 'Type', key: 'type' },
      { label: 'Account Name', key: 'accountName' },
      { label: 'Status', key: 'status' },
      { label: 'Currency', key: 'currency' },
      { label: 'Balance', key: 'balance' },
    ];
  }

  subscribeToAccounts(): void {
    const userId = this.sessionService.getUserId();
    this.accounts$ = this.accountService.getUserAccounts(userId);
  }

  handleAccountSelect(account) {
    this.router.navigate(['..',account.id,'transactions'], {relativeTo: this.route});
  }
}
