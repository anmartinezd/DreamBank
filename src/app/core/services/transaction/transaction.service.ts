import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { TransactionInterface } from '../../interfaces/api-responses/transaction.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpClient: HttpClient) { }


  transactions(accountId:string): Observable<TransactionInterface[]>{
    return this.httpClient.get<TransactionInterface[]>(`${environment.API_URL}/accounts/${accountId}/transactions`);
  }

  transactionDetail(accountId:string, id:string): Observable<TransactionInterface>{
    return this.httpClient.get<TransactionInterface>(`${environment.API_URL}/accounts/${accountId}/transactions/${id}`);
  } 
}
