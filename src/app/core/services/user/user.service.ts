import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storageService: StorageService) { }

  getCurrentUser(): UserModel {
    const user = new UserModel(this.storageService.getCurrentStateProperty<UserModel>('user'));
    return user;
  }

}
