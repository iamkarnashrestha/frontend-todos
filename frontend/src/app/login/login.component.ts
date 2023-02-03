import { Component,inject } from '@angular/core';
import { UserService } from '../user.service';
import {FormBuilder,Validators } from '@angular/forms'
@Component({
  selector: 'app-login',
  template: `
    <h1>Login</h1>
    <form [formGroup]="loginForm" (ngSubmit)="login()">
      <input placeholder="email" formControlName="email" type="text">
      <input  placeholder="password" formControlName="password" type="password">
      <button (click)="login()">Login</button>
    </form>

   
  `,
  styles: [
  ]
})
export class LoginComponent {
  userService=inject(UserService)

  loginForm=inject(FormBuilder).nonNullable.group({
    email:['Karna@miu.edu',Validators.required],
    password:['12345',Validators.required]
  })
  login()
  {
    this.userService.login(this.loginForm.value as {email:string, password:string})
    .subscribe(response=>{
      if(response.success){
        //save state
        console.log(response)
      }
    })
  }
}
