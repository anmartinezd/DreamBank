import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

import { StorageService } from '../storage/storage.service';

import { LoginFormInterface } from '../../interfaces/login-form.interface';
import { UserInterface } from '../../interfaces/api-responses/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private storageService: StorageService) { }

  login(loginForm: LoginFormInterface): Observable<UserInterface> {
    return this.httpClient.post<UserInterface>(`${environment.API_URL}/authenticate`, loginForm)
      .pipe(
        tap(
          (user) => this.storageService.changeCurrentState({ user }),
        ),
        catchError((err) => {
          console.error(err)
          return throwError(err);
        })
      );
  }

  logout() {
    return this.storageService.changeCurrentState({});
  };

  isAuthenticated() {
    return this.storageService.getCurrentStateProperty<boolean>("user")? true : false;
  }
}
