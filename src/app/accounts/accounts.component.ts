import { Component, OnInit } from '@angular/core';
import { AccountInterface } from '../core/interfaces/api-responses/account.interface';
import { AccountService } from './services/account/account.service';
import { StorageService } from '../core/services/storage/storage.service';
import { UserModel } from '../core/models/user.model';
import { Observable } from 'rxjs';
import { AccountsModule } from './accounts.module';
import { AccountModel } from '../core/models/account.model';
import { accountTypes } from '../core/constants/accunt-type.enum';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  headers;
  accounts: any;
  accounts$: Observable<AccountsModule>;

  constructor(private accountService: AccountService, private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.subscribeToAccounts()
    this.headers = [
      { label: 'Type', key: 'type' },
      { label: "Account Name", key: "accountName" },
      { label: 'Status', key: 'status' },
      { label: 'Currency', key: 'currency' },
      { label: 'Balance', key: 'balance' }
    ];
    this.loadAccounts();
  }

  subscribeToAccounts() {
    const userId = this.storageService.getCurrentStateProperty<UserModel>('user').id;
    this.accounts$ = this.accountService.getUserAccounts(userId);
  }


  loadAccounts() {
    this.accounts$.subscribe(
      {
        next: (accounts: AccountInterface[]) => {
          this.accounts = this.generateAccountsIcons(accounts);
          console.log(this.accounts);

        }
      }
    );
  }

  generateAccountsIcons(accounts: AccountInterface[]): any {
    return accounts.map(reponseAccount => {
      const account = new AccountModel(reponseAccount);
      switch (account.type) {
        case accountTypes.checking:
          account.icon = "fas fa-money-check-alt"
          break;

        case accountTypes.savings:
          account.icon = "fas fa-piggy-bank";
          break;
      }

      return account;
    }
    );
  }

}
