import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  loginSubscription: Subscription;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      identificationNumber: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  onLogin(){
    console.log(this.loginForm.value);
    this.loginSubscription = this.authService.login(this.loginForm.value)
      .subscribe(
        {
          next: () =>  {
            this.router.navigate(['/']);
          },
          error: () => {
            this.loginForm.reset();
          }
        }
      );
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

}
