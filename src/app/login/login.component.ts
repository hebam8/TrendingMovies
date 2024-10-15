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

  constructor(private _AuthService:AuthService , private _Router:Router) {
    if(localStorage.getItem('userToken') !== null){
      this._Router.navigate(['/home'])
    }
{

}   }

  ngOnInit(): void {
  }
  isLoading:boolean=false;
  apiError:string='';
  loginForm:FormGroup=new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{5,10}/)]),
  })


  HandelLogin(registerForm:FormGroup){


    this.isLoading=true
    if (registerForm.valid){
  this._AuthService.signIn(registerForm.value).subscribe({
    next:(response)=>{
      if (response.message === 'success'){
        localStorage.setItem('userToken', response.token)
        this._AuthService.saveData();
      console.log(response.token);
        this.isLoading=false;
        this._Router.navigate(['/home']);



      }},
      error:(err)=>{
         this.isLoading=false;
         this.apiError=err.message
      }}) }



  }

}
