import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TransactionInterface } from '../../interfaces/api-responses/transaction.interface';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { TransactionModel } from '../../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private httpClient: HttpClient) {}

  transactions(accountId: string,timeFrame: {from:string, to:string}): Observable<TransactionModel[]> {
    return this.httpClient
      .get<TransactionInterface[]>(
        `${environment.API_URL}/accounts/${accountId}/transactions`,
        {
          params: timeFrame
        }
      )
      .pipe(
        map(transactions => transactions.map(transaction =>new TransactionModel(transaction)))
      );
  }

  transactionDetail(
    accountId: string,
    id: string
  ): Observable<TransactionModel> {
    return this.httpClient.get<TransactionInterface>(
      `${environment.API_URL}/accounts/${accountId}/transactions/${id}`
    ).pipe(
      map(transaction => new TransactionModel(transaction))
    );
  }
}
