import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from '../session/session.service';
import { UserModel } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserInterface } from '../../interfaces/api-responses/user.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private sessionService: SessionService, private httpClient: HttpClient) { }

  getUser(id):Observable<UserModel> {
    return this.httpClient.get<UserInterface>(`${environment.API_URL}/users/${id}`)
    .pipe(
      map((userInfo) => new UserModel(userInfo))
    );
  }

}
