import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user/user.service';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/services/session/session.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.scss'],
})
export class HeaderContainerComponent implements OnInit {
  user$: Observable<UserModel>;

  constructor(
    private userService: UserService,
    private sessionService: SessionService,
  ) {}

  ngOnInit(): void {
    const userId: number = this.sessionService.getUserId()
    this.user$ = this.userService.getUser(userId);
  }
  
}
