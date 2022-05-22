import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionResponse } from '../models/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  LIMIT = 100;
  constructor(private httpClient: HttpClient) { }

  getTransactions(accountId: string, offset: number = 0): Observable<TransactionResponse> {
    return this.httpClient.get<TransactionResponse>(
      `https://fcd.terra.dev/v1/txs?offset=${offset}&limit=${this.LIMIT}&account=${accountId}`
    )
  }
}
