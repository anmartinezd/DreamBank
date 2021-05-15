import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { StorageService } from './storage.service';
import { ApiService } from './api.service';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private StorageService: StorageService, private api: ApiService<User>) {}

  login(loginObj: Login): void  {
    const user = this.api.post('athenticate',loginObj);
    this.StorageService.changeCurrentState({user});
  }

  logout(): Observable<User> {
    return this.api.post('athenticate', {}, 'logout');
  }

  getUser(): Observable<User> {
    return this.StorageService.getCurrentStateProperty('user') as Observable<User>;
  }

  isAuthenticated(): boolean {
    return (this.StorageService.getCurrentStateProperty('user') != null) ? true : false;
  };
}
