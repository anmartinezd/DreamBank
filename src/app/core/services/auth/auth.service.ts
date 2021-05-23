import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';

import { environment } from 'src/environments/environment';

import { SessionService } from '../session/session.service';

import { LoginFormInterface } from '../../interfaces/login-form.interface';
import { SessionInterface } from '../../interfaces/api-responses/session.interface';
import { last, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn$ = this.sessionService.tokenChanged$;

  constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

  login(loginForm: LoginFormInterface): Observable<boolean> {
    return this.httpClient.post<SessionInterface>(`${environment.API_URL}/authenticate`, loginForm)
      .pipe(
        tap( ({token, userId}) => {
          console.log(token)
          this.sessionService.addToken(token),
          this.sessionService.addUserId(userId);
        }),
        map(value => true)
      );
  }

  logout() {
    return this.sessionService.deleteStorage();
  };

  isAuthenticated() {
    return true;
  }
}
