import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../core/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: UserModel;

  constructor() { }

  ngOnInit(): void {
    this.user = new UserModel(
      {
        firstName: "Anderson",
        lastLogin: "Sun May 16 2021 16:43:35 GMT-0500",
        lastName: "Martínez",
        id: "12345666",
        balance: 17288.29,
        profilePicture: "https://media-exp1.licdn.com/dms/image/C5603AQGmQvajYD235g/profile-displayphoto-shrink_200_200/0/1592265537428?e=1626912000&v=beta&t=VbjskdgSc9MwqU976c-6W0-VCATl_JMlZCkuEsp2VCk"
      })
  }

  onLogout(){
    
  }
}
