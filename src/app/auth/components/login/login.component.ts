import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, public loginForm: FormGroup) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

}
