import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AccountInterface } from '../../interfaces/api-responses/account.interface';
import { map, switchMap, switchMapTo, tap } from 'rxjs/operators';
import { AccountModel } from 'src/app/core/models/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  getUserAccounts(userId: number): Observable<AccountModel[]> {
    return this.httpClient
      .get<AccountInterface[]>(`${environment.API_URL}/${userId}/accounts`).pipe(
        map(accounts => accounts.map(account => new AccountModel(account))),
      );
  }
}
