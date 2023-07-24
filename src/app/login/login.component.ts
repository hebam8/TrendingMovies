import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl , Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  isLoading:boolean=false;
  loginForm:FormGroup = new FormGroup ({
    email:new FormControl (null, [Validators.email, Validators.required]),
   password:new FormControl (null, [Validators.pattern(/^[A-Z]/)])
  })

  constructor(private _authService:AuthService , private _router:Router) { }
error:string='';

  submitLoginForm(loginForm:FormGroup){
  this.isLoading= true;
    console.log('hi');

    this._authService.signIn(loginForm.value).subscribe({

      next:(response) => {
        this.isLoading= false;
        if (response.message === 'success') {
          localStorage.setItem('userToken', response.token);
          this._authService.saveUserData();
          console.log('success');
          this._router.navigate(['/home']);
        }else {
           this.error=response.message;}  
}})}
  ngOnInit(): void {
    this._authService.userData.subscribe({
      next:()=> {
        if (this._authService.userData.getValue() != null ) {
       this._router.navigate(['/home'])
        }
      
      }}
     )
  }

}


