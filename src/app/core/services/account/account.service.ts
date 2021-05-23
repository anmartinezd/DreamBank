import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AccountInterface } from '../../interfaces/api-responses/account.interface';
import { map, tap } from 'rxjs/operators';
import { AccountModel } from 'src/app/core/models/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  getUserAccounts(): Observable<AccountModel[]> {
    return this.httpClient
      .get<AccountModel[]>(`${environment.API_URL}/accounts`);
  }
}
