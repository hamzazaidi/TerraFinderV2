import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthResponse } from '../models/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  isValid(id: string): Observable<boolean> {
    return this.httpClient.get<AuthResponse>(`https://lcd.terra.dev/cosmos/auth/v1beta1/accounts/${id}`).pipe(
      map(response => !!response.account.account_number),
      catchError(error => of(false))
    )
  }
}
