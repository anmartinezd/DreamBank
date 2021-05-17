import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: UserModel;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.getCurrentUser();
  }

  onLogout(){

  }
}
