import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService  {
  private token = null;
  private userId = null;

  private userIdSubject$ = new BehaviorSubject<number>(this.userId);
  userIdChanged$ = this.userIdSubject$.asObservable();
  private tokenSubject$ = new BehaviorSubject<number>(this.userId);
  tokenChanged$ = this.tokenSubject$.asObservable();

  constructor() {
  }

  getToken(): string {
    return this.token;
  }

  getUserId(): number {
    return this.userId;
  }

  addToken(newToken: string): Observable<string> {
    this.token = newToken;
    this.tokenSubject$.next(this.token);
    return of(this.token);
  }

  addUserId(newUserId: number): Observable<number> {
    this.userId = newUserId;
    localStorage.setItem('userId',this.userId)
    this.userIdSubject$.next(this.token);
    return of(this.userId);
  }

  deleteStorage(): boolean {
    this.userId = null;
    this.token = null;
    this.userIdSubject$.next(null);
    this.tokenSubject$.next(null);
    return true;
  }
}