import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.scss']
})
export class UserInformationComponent implements OnInit {
  @Input() user: UserModel;

  constructor() { }

  ngOnInit(): void {
  }

}
