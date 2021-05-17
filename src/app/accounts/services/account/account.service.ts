import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { first, map, switchMap, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { AccountModel } from '../../../core/models/account.model';
import { AccountInterface } from '../../../core/interfaces/api-responses/account.interface';

@Injectable()
export class AccountService {

  constructor(private httpClient: HttpClient) {
  }

  getUserAccounts(id: string): Observable<AccountInterface[]> {
    console.log(id);
    return this.httpClient.get<AccountInterface[]>(`${environment.API_URL}/${id}/accounts`);
  }
}
